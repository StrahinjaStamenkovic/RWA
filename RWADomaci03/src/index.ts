import { CookieClicker } from "./cookieclicker";
import { Player } from "./player";
import { Upgrade, UpgradeType } from "./upgrade";

const passiveCookiebonusTimed = new Upgrade(
  "Rolling pin",
  "Get a bonus amount of cookies every set amount of seconds",
  1,
  10,
  UpgradeType.passiveTimed
);

const onClickCookiebonus = new Upgrade(
  "A helping hand",
  "Once every five seconds when clicking on a cookie you get a bonus one",
  1,
  15,
  UpgradeType.activeOnClick
);

const bonusCookieEveryFifth = new Upgrade(
  "Luck of the baker",
  "Each click has a small chance of getting you a bonus cookie",
  1,
  30,
  UpgradeType.passiveAccumulative
);

let upgradeArray = [
  passiveCookiebonusTimed,
  onClickCookiebonus,
  bonusCookieEveryFifth,
];
let observablesArray = upgradeArray.map((element) => element.observable);
const player = new Player();

const game = new CookieClicker(player);

game.addUpgrade(passiveCookiebonusTimed);
game.addUpgrade(onClickCookiebonus);
game.addUpgrade(bonusCookieEveryFifth);

game.draw(document.body);
