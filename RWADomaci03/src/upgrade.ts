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
  Timed,
  OnClick,
  OnClickTimed,
  OnFiveCookiesBonus,
  OnClickRandomChance,
}
export class Upgrade {
  public name: string;
  public description: string;
  public level: number;
  private baseValue: number;
  public cost: number;
  private type: UpgradeType;
  public observable: Observable<any>;
  public observerPlayer: Subject<any>;

  constructor(
    name: string,
    description: string,
    baseValue: number,
    cost: number,
    type: UpgradeType,
    observerPlayer: Subject<any>
  ) {
    this.name = name;
    this.description = description;
    this.level = 0;
    this.baseValue = baseValue;
    this.cost = cost;
    this.type = type;
    this.observerPlayer = observerPlayer;
  }

  levelUp(player: Player) {
    player.cookieAmount -= this.cost;
    player.emitCurrentNumberOfCookies();

    this.cost += Math.round(this.cost * 0.8);
    this.level++;
    this.baseValue += Math.round(this.baseValue * 0.1 * this.level);
    this.createObservable();
    player.pushObservable(this.observable, this.type);
    return 1;
  }
  createObservable() {
    switch (this.type) {
      case UpgradeType.Timed: {
        this.observable = interval(1000).pipe(
          throttleTime(3000 - this.level * 100)
        );
        break;
      }
      case UpgradeType.OnClick: {
        this.observable = fromEvent(document.querySelector(".Cookie"), "click");
        break;
      }
      case UpgradeType.OnClickTimed: {
        this.observable = fromEvent(
          document.querySelector(".Cookie"),
          "click"
        ).pipe(throttleTime(5000 - this.level * 100));
        break;
      }
      case UpgradeType.OnFiveCookiesBonus: {
        this.observable = new Observable((onSubscribe) => {
          this.observerPlayer.subscribe((value) => {
            if (value % 5 === 0) onSubscribe.next(1);
          });
        });

        break;
      }
      case UpgradeType.OnClickRandomChance: {
        this.observable = fromEvent(document.querySelector(".Cookie"), "click");
        break;
      }
    }
  }
}
