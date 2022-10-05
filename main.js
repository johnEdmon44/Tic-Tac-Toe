"use strict";

//get and display players
const players = (() => {

  function Players (name, weapon) {
    this.name = name;
    this.weapon = weapon;
  }

  const players = [];
  
  function getPlayers() {
    const player1Name = document.querySelector('#player1');
    const player2Name = document.querySelector('#player2'); 
    const player1 = new Players(player1Name.value = 'player1', 'X');
    const player2 = new Players(player2Name.value = 'player2', 'O');

    players.push(player1);
    players.push(player2);

  }

  function toggle () {
    const form = document.querySelector('#form');
    const board = document.querySelector('.container');

    form.classList.toggle('visible');
    board.classList.toggle('visible');
  }

  return {
    getPlayers,
    toggle,
  }
})();

const startBtn = document.querySelector('#startBtn');
startBtn.addEventListener('click', () => {
  players.getPlayers();
  players.toggle();
});