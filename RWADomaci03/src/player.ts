import { Observable, Subject } from "../node_modules/rxjs/index";
import { UpgradeType } from "./upgrade";

export class Player {
  private observablesArray: Observable<number>[];
  //private name: string;
  public cookieAmount: number;
  public cookieCountObservable: Subject<number>;
  constructor() {
    this.cookieAmount = 0;
    this.observablesArray = [];
    this.cookieCountObservable = new Subject<number>();
  }

  emitCurrentNumberOfCookies() {
    this.cookieCountObservable.next(this.cookieAmount);
  }
  //draw(host: HTMLElement) {}

  pushObservable(
    observable: Observable<number>,
    type: UpgradeType,
    amount: number,
    level: number
  ) {
    this.observablesArray.push(observable);
    observable.subscribe((value) => {
      switch (type) {
        case UpgradeType.passiveAccumulative: {
          let randomNumber = Math.random() * 10 + level * 0.1;
          if (randomNumber > 8) this.cookieAmount += 1;
          break;
        }
        case UpgradeType.passiveTimed: {
          this.cookieAmount += 1;
          break;
        }
        case UpgradeType.activeOnClick: {
          this.cookieAmount += amount;
          break;
        }
      }

      this.emitCurrentNumberOfCookies();
    });
  }
}
