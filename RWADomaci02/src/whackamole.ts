import { Player } from "./player";

export class WhackAMole {
    private moles: HTMLElement[];
    private difficulty: number;
    private speed: number;
    private player: Player;

    constructor(difficulty: number, speed: number, player: Player) {
        this.moles = [];
        this.createElements(difficulty);
        this.difficulty = difficulty;
        this.speed = speed;
        this.player = player;
    }
    createElements(difficulty: number): void {
        for (let i: number = 0; i < difficulty * difficulty; i++) {
            this.moles.push(document.createElement("button"));
            this.moles[i].className = "InactiveMole";
            this.moles[i].onclick = () => {
                this.evaluate(this.moles[i]);
            }
        }
    }
    evaluate(mole: HTMLElement) {
        if (mole.className == "ActiveMole") {
            this.player.increaseScore(this.difficulty);
            mole.className = "Hit"
            setTimeout(() => {
                mole.className = "InactiveMole";
            }, 1);
            return true;
        }
        else {
            this.player.removeLife();
            mole.className = "Miss"
            setTimeout(() => {
                mole.className = "InactiveMole";
            }, 1);
            if (this.player.getLives() == 0)
                this.end();
            return false;
        }
    }
    end() {
        this.player.evaluateTopScore();
        this.player.reset();
        //enable start button
    }
    start()/*: Promise<number> */ {
        let

    }
}