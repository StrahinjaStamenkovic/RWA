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

  pushObservable(observable: Observable<number>, type: UpgradeType) {
    this.observablesArray.push(observable);
    observable.subscribe((value) => {
      switch (type) {
        case UpgradeType.Timed: {
          this.cookieAmount += 1;
          break;
        }
        case UpgradeType.OnClick: {
          this.cookieAmount += 1;
          break;
        }
        case UpgradeType.OnClickTimed: {
          this.cookieAmount += 1;
          break;
        }
        case UpgradeType.OnFiveCookiesBonus: {
          this.cookieAmount += 1;
          break;
        }
        case UpgradeType.OnClickRandomChance: {
          if (Math.random() > 0.8) this.cookieAmount += 1;
          break;
        }
      }

      this.emitCurrentNumberOfCookies();
    });
  }
}
