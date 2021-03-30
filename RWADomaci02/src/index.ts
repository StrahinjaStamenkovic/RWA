import { PlayerModel } from "./playermodel";
import { MemoryGameModel } from "./memorygamemodel";
import { MemoryGameView } from "./memorygameview";

const player = new PlayerModel("Strahinja");
const game = new MemoryGameModel(3, 10, 5, player);

const view = new MemoryGameView(document.body, game);
view.draw();
console.log("succ");
