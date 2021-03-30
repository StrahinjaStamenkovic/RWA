import { MemoryGameModel } from "./memorygamemodel";

export class MemoryGameView {
  private model: MemoryGameModel;
  private container: HTMLElement;

  constructor(container: HTMLElement, model: MemoryGameModel) {
    this.model = model;
    this.container = container;
  }
  draw() {
    for (let i = 0; i < this.model.size; i++) {
      const row = document.createElement("div");
      row.className = "Row";
      this.container.appendChild(row);
      for (let j = 0; j < this.model.size; j++) {
        const button = document.createElement("button");
        button.className = "Tile";
        button.id = `Button${i * this.model.size + j}`;
        //button.disabled = true;
        button.onclick = async () => {
          this.evaluate(button, i * this.model.size + j);
        };
        row.appendChild(button);
      }
    }
    const button = document.createElement("button");
    button.innerHTML = "Start";
    button.className = "Start";

    button.onclick = () => {
      button.disabled = true;
      this.interactableTiles("true");
      this.initiateGame();
    };
    this.container.appendChild(button);

    const playerInfo = document.createElement("div");
    playerInfo.className = "PlayerInfo";

    const playerName = document.createElement("label");
    playerName.innerHTML = this.model.player.name;
    playerName.className = "PlayerName";

    playerInfo.appendChild(playerName);

    const playerScore = document.createElement("label");
    playerScore.innerHTML = this.model.player.score.toString();
    playerScore.className = "PlayerScore";

    playerInfo.appendChild(playerScore);

    const playerTopScore = document.createElement("label");
    playerTopScore.innerHTML = this.model.player.topScore.toString();
    playerTopScore.className = "PlayerTopScore";

    playerInfo.appendChild(playerTopScore);

    const playerLives = document.createElement("label");
    playerLives.innerHTML = this.model.player.lives.toString();
    playerLives.className = "PlayerLives";

    playerInfo.appendChild(playerLives);

    this.container.appendChild(playerInfo);
  }
  async sleep(ms: number) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
  async initiateGame() {
    const indexes = this.model.start();
    console.log(indexes);

    await this.sleep(1000);
    indexes.forEach(async (index) => {
      await this.showTile(document.getElementById(`Button${index}`));
    });
  }
  async showTile(tile: HTMLElement) {
    return new Promise((resolve, reject) => {
      tile.classList.add("ActiveTile");
      setTimeout(() => {
        tile.classList.remove("ActiveTile");
        resolve(null);
      }, 500);
    });
  }

  async evaluate(button: HTMLElement, index: number) {
    await this.showTile(button);

    const outcome = this.model.evaluate(index);

    switch (outcome) {
      case -2: {
        const start = document.querySelector(".Start");
        start.setAttribute("enabled", "true");
        this.interactableTiles("false");
      }
      case -1: {
        await this.levelNotCleared();
        await this.displayPattern();
        break;
      }
      case 0: {
        break;
      }
      case 1: {
        await this.levelCleared();
        await this.displayPattern();

        break;
      }
    }

    this.updatePlayerInfo();
  }
  async displayPattern() {
    const indexes = this.model.tiles;
    console.log(indexes);

    await this.sleep(2000);
    for (const index of indexes) {
      await this.showTile(document.getElementById(`Button${index}`));
    }
  }
  interactableTiles(value: string) {
    const buttons = document.querySelectorAll(".Tile");
    buttons.forEach((button) => button.setAttribute("enabled", value));
  }
  updatePlayerInfo() {
    /*const playerName = document.querySelector('.PlayerName');
    playerName.innerHTML = this.model.player.name;*/

    const playerScore = document.querySelector(".PlayerScore");
    playerScore.innerHTML = this.model.player.score.toString();

    const playerTopScore = document.querySelector(".PlayerTopScore");
    playerTopScore.innerHTML = this.model.player.topScore.toString();

    const playerLives = document.querySelector(".PlayerLives");
    playerLives.innerHTML = this.model.player.lives.toString();
  }
  async levelCleared() {
    await this.sleep(500);
    const buttons = document.querySelectorAll(".Tile");
    buttons.forEach((button) => button.classList.add("Cleared"));
    await this.sleep(1000);
    buttons.forEach((button) => button.classList.remove("Cleared"));
  }
  async levelNotCleared() {
    await this.sleep(500);
    const buttons = document.querySelectorAll(".Tile");
    buttons.forEach((button) => button.classList.add("NotCleared"));
    await this.sleep(1000);
    buttons.forEach((button) => button.classList.remove("NotCleared"));
  }
}
