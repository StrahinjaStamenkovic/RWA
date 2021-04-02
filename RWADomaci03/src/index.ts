//import { ActiveUpgrade } from "./activeupgrade";
import { CookieClicker } from "./cookieclicker";
//import { PassiveUpgrade } from "./passiveupgrade";
import { Player } from "./player";
import { Upgrade, UpgradeType } from "./upgrade";

const player = new Player();

const CookieBonusTimed = new /*Passive*/ Upgrade(
  "Rolling pin",
  "Get a bonus cookie every set amount of seconds",
  1,
  10,
  UpgradeType.Timed,
  player.cookieCountObservable
);

const CookieBonusOnClick = new /*Passive*/ Upgrade(
  "A helping hand",
  /*Once every five seconds*/ "When clicking you get a bonus cookie",
  1,
  15,
  UpgradeType.OnClick,
  player.cookieCountObservable
);
const CookieBonusOnClickTimed = new /*Passive*/ Upgrade(
  "Right on time",
  "Once every five seconds when clicking you get a bonus cookie",
  1,
  15,
  UpgradeType.OnClickTimed,
  player.cookieCountObservable
);

const CookieBonusEveryFifth = new /*Active*/ Upgrade(
  "The collector",
  "Every five cookies you collect you get a bonus cookie",
  1,
  30,
  UpgradeType.OnFiveCookiesBonus,
  player.cookieCountObservable
);
const CookieBonusRandomChanceOnClick = new /*Active*/ Upgrade(
  "A stroke of luck",
  "Each click has a small chance of getting you a bonus cookie",
  1,
  30,
  UpgradeType.OnClickRandomChance,
  player.cookieCountObservable
);

let upgradeArray = [
  CookieBonusTimed,
  CookieBonusOnClick,
  CookieBonusOnClickTimed,
  CookieBonusEveryFifth,
  CookieBonusRandomChanceOnClick,
];
//let observablesArray = upgradeArray.map((element) => element.observable);

const game = new CookieClicker(player);

game.addUpgrades(upgradeArray);

game.draw(document.body);
