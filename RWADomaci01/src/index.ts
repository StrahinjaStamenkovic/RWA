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

let div = document.createElement("div");
document.body.appendChild(div);

table.draw(div);

let divSelect = document.createElement("div");
document.body.appendChild(divSelect);
divSelect.setAttribute("id", "divSelect");

let label = document.createElement("label");
label.setAttribute("for", "cryptocurrency");
label.innerHTML = "Choose a crypto:";
divSelect.appendChild(label);

let select = document.createElement("select");
select.setAttribute("name", "cryptocurrency");
select.setAttribute("id", "cryptocurrencyid");
divSelect.appendChild(select);

let arr = table.getElements();
arr.forEach(p => {
    let option = document.createElement("option");
    option.setAttribute("value", p.getAbbreviation());
    option.innerHTML = p.getAbbreviation();
    select.appendChild(option);
});
select.onchange = () => {
    let crypto = select.value;
    let cryptoObj = arr.find(p => p.getAbbreviation() == crypto);
    table.changeBaseline(cryptoObj);
    table.getContainer().remove();
    table.draw(div);

};