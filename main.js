"use strict";

//get and display players
const players = (() => {

  function Players (name, weapon) {
    this.name = name;
    this.weapon = weapon;
  }

  const players = [];
  
  function getPlayers() {

    let player1Name = document.querySelector('#player1');
    let player2Name = document.querySelector('#player2');
    
    const player1 = new Players(player1Name.value, 'X');
    const player2 = new Players(player2Name.value, 'O');

    players.push(player1);
    players.push(player2);
  }

  function toggle () {
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
    getPlayers,
    toggle,
    displayPlayers,
  }
})();


const startBtn = document.querySelector('#startBtn');
startBtn.addEventListener('click', () => {
  players.getPlayers();
  players.toggle();
  players.displayPlayers();
  game.addDataAtt();
});


const game = (() => {

  function addDataAtt () {
    boxes.forEach( (box, i) => {
      box.setAttribute('data-index', i);
    });
  }

  return {
    addDataAtt,
  }

})(); 

const data = []; // data attribute use to check the winners
const weapons = []; // to alternate between X and O

//
const boxes = document.querySelectorAll('.items');
boxes.forEach( x => {
  x.addEventListener('click', e => {
    
    if(e.target.textContent) {
      return;
    }

    if(data.length === 0 || weapons[weapons.length -1] === 'O') {
      data.push(e.target.dataset.index);
      weapons.push('X');
      e.target.textContent = 'X';
    } else {
      data.push(e.target.dataset.index);
      weapons.push('O');
      e.target.textContent = 'O';
    }
  });
});
