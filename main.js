"use strict";

//get and display players
const players = (() => {

  function Players (name, weapon) {
    this.name = name;
    this.weapon = weapon;
  }

  const players = [];
  
  function _getPlayers() {

    let player1Name = document.querySelector('#player1');
    let player2Name = document.querySelector('#player2');
    
    const player1 = new Players(player1Name.value, 'X');
    const player2 = new Players(player2Name.value, 'O');

    players.push(player1);
    players.push(player2);
  }

  function _toggle () {
    const form = document.querySelector('#form');
    const board = document.querySelector('.container');

    form.classList.toggle('visible');
    board.classList.toggle('visible');
  }

  return {
    _getPlayers,
    _toggle,
    displayPlayers,
  }
})();

const startBtn = document.querySelector('#startBtn');
startBtn.addEventListener('click', () => {
  players._getPlayers();
  players._toggle();
});