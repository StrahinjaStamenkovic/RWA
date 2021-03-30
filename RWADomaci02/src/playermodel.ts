export class PlayerModel {
  public name: string;
  public score: number;
  public topScore: number;
  public lives: number;

  constructor(name: string) {
    this.name = name;
    this.score = 0;
    this.topScore = 0;
    this.lives = 3;
  }
  //displayScore(scoreElement: HTMLElement): void {}
  //displayTopScore(topScoreElement: HTMLElement): void {}

  evaluateTopScore() {
    if (this.lives == 0 && this.score >= this.topScore)
      this.topScore = this.score;
  }
  // removeLife() {
  //   this.lives--;
  // }
  increaseScore(points: number) {
    this.score += points;
  }
  reset() {
    this.lives = 3;
    this.score = 0;
  }
}
