import { Table } from "./table";
import { Crypto } from "./crypto";

const btc = new Crypto("Bitcoin", "BTC", 62000);
const eth = new Crypto("Ethereum", "ETH", 2000);
const rvn = new Crypto("Ravencoin", "RVN", 0.20);
const ada = new Crypto("Cardano", "ADA", 1.20);
const usdt = new Crypto("Tether", "USDT", 1);

const table = new Table(btc);

table.addCrypto(btc);
table.addCrypto(eth);
table.addCrypto(rvn);
table.addCrypto(ada);
table.addCrypto(usdt);

let tableContainer = document.createElement("table");
document.body.appendChild(tableContainer);
table.draw(tableContainer);
console.log(table);

//console.log(btc.displayInfo());