export class Crypto {

    private name: string;
    private abbreviation: string;
    private priceUSD: number;
    private container: HTMLElement;

    constructor(name: string, abbreviation: string, priceUSD: number) {
        this.name = name;
        this.abbreviation = abbreviation;
        this.priceUSD = priceUSD;
    }
    getPriceUSD(): number {
        return this.priceUSD;
    }
    getName(): string {
        return this.name;
    }
    getAbbreviation(): string {
        return this.abbreviation;
    }
    displayInfo(): string {
        return `Crypto name: ${this.name},  Abbreviation: ${this.abbreviation}, Price in USD: $${this.priceUSD}.`;
    }
    convertTo(someCrypto: Crypto): number {
        return this.priceUSD / someCrypto.getPriceUSD();
    }
    draw(container: HTMLElement) {
        if (container === null)
            throw new Error("Container value is not set or is null.");
        else {
            this.container = container;
            let names = ["Cryotocurrency", "Abbreviation", "PriceUSD", "PriceBaseline"];

            names.forEach((p, i) => {
                let td = document.createElement("td");
                this.container.appendChild(td);
                switch (i) {
                    case 0: {
                        let link = document.createElement("a");
                        link.setAttribute("href", `https://coinmarketcap.com/currencies/${this.name}/`);
                        link.setAttribute("target", "_blank");
                        td.appendChild(link);

                        link.innerHTML = this.name;
                        break;
                    }
                    case 1: {
                        let link = document.createElement("a");
                        link.setAttribute("href", `https://coinmarketcap.com/currencies/${this.name}/`);
                        link.setAttribute("target", "_blank");
                        td.appendChild(link);

                        link.innerHTML = this.abbreviation;
                        break;
                    }
                    case 2: {
                        td.innerHTML = `$${this.priceUSD}`;
                        break;
                    }
                    default: {
                        td.innerHTML = " ";
                        break;
                    }

                }
                td.setAttribute("id", `${names[i]}${this.abbreviation}`);
            });


            return true;
        }
    }
}