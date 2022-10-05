"use strict";

//get and display players
const players = (() => {

  function Players (name, weapon) {
    this.name = name;
    this.weapon = weapon;
  }

  const players = [];
  
  function getPlayers() {

    let player1Name = document.querySelector('#player1').value;
    let player2Name = document.querySelector('#player2').value;
    
    if(!player1Name) {
      player1Name = 'Player 1';
    } else if(!player2Name) {
      player2Name = 'Player 2';
    } else {
      player1Name.value;
      player2Name.value;
    }

    const player1 = new Players(player1Name, 'X');
    const player2 = new Players(player2Name, 'O');

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