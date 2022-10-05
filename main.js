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
    const playerNames = document.querySelector('.players');

    form.classList.toggle('visible');
    board.classList.toggle('visible');
    playerNames.classList.toggle('visible');
  }

  function displayPlayers () {
    document.querySelector('#player1Name').textContent = players[0].name;
    document.querySelector('#player2Name').textContent = players[1].name;
    console.log(players[0].name)
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
  players.displayPlayers();
});