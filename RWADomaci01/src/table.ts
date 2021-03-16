import { Crypto } from "./crypto";
export class Table {
    private arr: Crypto[];
    private baseline: Crypto;
    private container: HTMLElement;

    constructor(baseline: Crypto) {
        this.arr = [];
        this.baseline = baseline;
    }
    addCrypto(someCrypto: Crypto): number {
        return this.arr.push(someCrypto);

    }
    getElements(): Crypto[] {
        return this.arr;
    }
    draw(container: HTMLElement): boolean {
        if (container === null)
            throw new Error("Container value is not set or is null.");
        else {


            let tableContainer = document.createElement("table");
            container.appendChild(tableContainer);
            this.container = tableContainer;
            let headers = ["Cryptocurrency", "Abbreviation", "Value (USD)", `Value (${this.baseline.getAbbreviation()})`];

            let thead = document.createElement("thead");
            tableContainer.appendChild(thead);

            let tr = document.createElement("tr");
            thead.appendChild(tr);

            headers.forEach(p => {
                let th = document.createElement("th");
                th.innerHTML = p;
                tr.appendChild(th);
            });

            let tbody = document.createElement("tbody");
            tableContainer.appendChild(tbody);

            this.arr.forEach(p => {
                let tr = document.createElement("tr");
                tbody.appendChild(tr);
                p.draw(tr);
                let cellBaseline = document.getElementById(`PriceBaseline${p.getAbbreviation()}`);
                let num = p.convertTo(this.baseline).toPrecision(6);
                cellBaseline.innerHTML = `${num} ${this.baseline.getAbbreviation()}`;
            });


            return true;
        }
    }
    getContainer(): HTMLElement {
        return this.container;
    }
    changeBaseline(baseline: Crypto): boolean {
        this.baseline = baseline;
        return true;
    }
}