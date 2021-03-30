import { PlayerModel } from "./playermodel";
export enum GameState {
  stopped,
  running,
}

export class MemoryGameModel {
  public tiles: number[];
  public size: number;
  public difficulty: number;
  public speed: number;
  public player: PlayerModel;
  public gameState: GameState;
  public currentLevel: number;
  public currentTile: number;
  constructor(
    size: number,
    difficulty: number,
    speed: number,
    player: PlayerModel
  ) {
    this.size = size;
    this.tiles = new Array();
    this.difficulty = difficulty;
    this.speed = speed;
    this.player = player;
    this.currentLevel = 1;
    this.gameState = GameState.stopped;
    this.currentTile = 0;
  }

  evaluate(ind: number) {
    if (this.tiles[this.currentTile] !== ind) {
      this.player.lives--;
      this.currentTile = 0;
      if (this.player.lives === 0) {
        this.end();
        return -2;
      }

      return -1;
    } else {
      this.currentTile++;
      this.player.increaseScore(5);
      if (this.currentTile === this.currentLevel) {
        this.nextRound();
        return 1;
      }
      return 0;
    }
  }
  generateARandomTile() {
    const randomTile =
      Math.round(Math.random() * this.size * this.size) %
      (this.size * this.size);
    this.tiles.push(randomTile);
    return this.tiles;
  }

  start() /*: Promise<number> */ {
    if (this.gameState === GameState.stopped) {
      this.reset();
      this.gameState = GameState.running;

      return this.generateARandomTile();
    }
  }
  reset() {
    this.tiles = new Array();
    this.player.reset();
  }
  nextRound() {
    this.currentLevel++;
    this.currentTile = 0;
    this.generateARandomTile();
  }
  end() {
    this.player.evaluateTopScore();
    this.reset();
  }
}
