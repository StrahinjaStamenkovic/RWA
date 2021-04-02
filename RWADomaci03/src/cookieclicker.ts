import { fromEvent, Subject } from "../node_modules/rxjs/index";
import { Player } from "./player";
import { Upgrade, UpgradeType } from "./upgrade";

export class CookieClicker {
  private upgrades: Upgrade[];
  /*private mainCookie: Upgrade = new Upgrade(
    "The main one",
    "Get a cookie each time you click",
    1,
    30,
    //UpgradeType.activeOnClickMain
  );*/
  private player: Player;

  private playerCookieAmountListener: Subject<number>;

  constructor(player: Player) {
    this.player = player;
    this.upgrades = [];
    this.playerCookieAmountListener = player.cookieCountObservable;
  }

  addUpgrade(upgrade: Upgrade) {
    this.upgrades.push(upgrade);
  }
  addUpgrades(upgrades: Upgrade[]) {
    upgrades.forEach((upgrade) => this.upgrades.push(upgrade));
  }

  draw(host: HTMLElement) {
    const container = document.createElement("div");
    container.className = "CookieClicker";
    host.appendChild(container);

    const upgrades = document.createElement("div");
    upgrades.className = "Upgrades";
    container.appendChild(upgrades);

    const cookieContainer = document.createElement("div");
    cookieContainer.className = "CookieContainer";
    container.appendChild(cookieContainer);

    const mainCookieButton = document.createElement("button");
    mainCookieButton.title = "Get a cookie each time you click";
    mainCookieButton.innerHTML =
      '<img src="cookie.png" width = "200" height = "200" />';
    mainCookieButton.className = "Cookie";
    //mainCookieButton.innerHTML = `${this.mainCookie.name}`;

    fromEvent(mainCookieButton, "click").subscribe(() => {
      this.player.cookieAmount += 1;
      this.player.emitCurrentNumberOfCookies();
    });
    cookieContainer.appendChild(mainCookieButton);

    const CookieAmount = document.createElement("label");
    CookieAmount.className = "CookieAmount";
    cookieContainer.appendChild(CookieAmount);
    CookieAmount.innerHTML = this.player.cookieAmount.toString();

    this.upgrades.forEach((upgrade) => {
      const upgradeButton = document.createElement("button");
      upgradeButton.className = "Upgrade";
      upgradeButton.innerHTML = `${upgrade.name} ${upgrade.level} <br/>Cost: ${upgrade.cost}`;
      upgradeButton.title = upgrade.description;
      upgradeButton.disabled = true;
      upgrades.appendChild(upgradeButton);

      fromEvent(upgradeButton, "click").subscribe((value) => {
        upgrade.levelUp(this.player);
        upgradeButton.innerHTML = `${upgrade.name} ${upgrade.level}<br/>Cost: ${upgrade.cost}`;
      });
    });

    const upgradeButtons = document.querySelectorAll(
      ".Upgrade"
    ) as NodeListOf<HTMLButtonElement>;
    this.playerCookieAmountListener.subscribe((value) => {
      upgradeButtons.forEach((button, index) => {
        if (this.upgrades[index].cost < value) button.disabled = false;
        else button.disabled = true;
      });
      document.querySelector(".CookieAmount").innerHTML = value.toString();
    });
  }
}
