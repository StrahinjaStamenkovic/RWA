import {
  fromEvent,
  interval,
  Observable,
  Subject,
  Subscription,
} from "../node_modules/rxjs/index";
import {
  delay,
  take,
  throttle,
  throttleTime,
} from "../node_modules/rxjs/operators";
import { Player } from "./player";
export enum UpgradeType {
  passiveTimed,
  passiveAccumulative,
  activeOnClick,
  activeOnClickMain,
}
export class Upgrade {
  public name: string;
  public description: string;
  public level: number;
  private amount: number;
  public cost: number;
  private type: UpgradeType;
  public observable: Observable<any>;
  constructor(
    name: string,
    description: string,
    amount: number,
    cost: number,
    type: UpgradeType
  ) {
    this.name = name;
    this.description = description;
    this.level = 0;
    this.amount = amount;
    this.cost = cost;
    this.type = type;
  }

  levelUp(player: Player) {
    if (this.cost > player.cookieAmount) return -1;
    else {
      player.cookieAmount -= this.cost;
      player.emitCurrentNumberOfCookies();

      this.cost += Math.round(this.cost * 0.8);
      this.level++;
      this.amount = Math.round(this.amount * 0.6);
      /*if (this.level === 1) */ this.startUpgrade();
      player.pushObservable(
        this.observable,
        this.type,
        this.amount,
        this.level
      );
      return 1;
    }
  }
  startUpgrade() {
    switch (this.type) {
      case UpgradeType.passiveTimed: {
        this.observable = interval(1000).pipe(
          throttleTime(3000 - this.level * 100)
        );
        break;
      }
      case UpgradeType.passiveAccumulative: {
        this.observable = fromEvent(document.querySelector(".Cookie"), "click");
        break;
      }
      case UpgradeType.activeOnClick: {
        this.observable = fromEvent(
          document.querySelector(".Cookie"),
          "click"
        ).pipe(throttleTime(5000 - this.level * 100));
        break;
      }
    }
  }
}
