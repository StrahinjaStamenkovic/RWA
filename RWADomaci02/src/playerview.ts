import { PlayerModel } from "./playermodel";

export class PlayerView {
  private model: PlayerModel;

  constructor(model: PlayerModel) {
    this.model = model;
  }

  draw() {}
}
