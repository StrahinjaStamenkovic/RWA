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
    draw(container: HTMLElement): boolean {
        if (container === null)
            throw new Error("Container value is not set or is null.");
        else {
            this.container = container;
            let headers = ["Cryptocurrency", "Abbreviation", "Value (USD)", `Value (${this.baseline.getAbbreviation()})`];

            let thead = document.createElement("thead");
            container.appendChild(thead);

            let tr = document.createElement("tr");
            thead.appendChild(tr);

            headers.forEach(p => {
                let th = document.createElement("th");
                th.innerHTML = p;
                tr.appendChild(th);
            });

            let tbody = document.createElement("tbody");
            this.container.appendChild(tbody);

            this.arr.forEach(p => {
                let tr = document.createElement("tr");
                tbody.appendChild(tr);
                p.draw(tr);
                let cellBaseline = document.getElementById(`PriceBaseline${p.getAbbreviation()}`);
                cellBaseline.innerHTML = `${p.convertTo(this.baseline)} ${this.baseline.getAbbreviation()}`;
            });


            return true;
        }
    }
    changeBaseline(baseline: Crypto): boolean {
        this.baseline = baseline;

        return this.draw(this.container);
    }
}