import Game from "./Game.js";
import GameView from "./GameView.js";

let game = new Game();
let gameView = new GameView();
let btn = document.querySelector(".restart");
btn.addEventListener('click', ()=>{
    onRestartClick()
})

let tiles = document.querySelectorAll(".board-tile");
tiles.forEach((tile) => {
  tile.addEventListener("click", () => {
    onTileClick(tile.dataset.index);
  });
});
function onTileClick(i) {
  //make move
  game.makeMove(i);
  //update board
  gameView.updateBoard(game);
}
function onRestartClick(){
    game = new Game()
    gameView.updateBoard(game);
}