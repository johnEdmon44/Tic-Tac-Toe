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

  function checkWinner () {
    const goal0 = document.querySelector('[data-index = "0"]').textContent;
    const goal1 = document.querySelector('[data-index = "1"]').textContent;
    const goal2 = document.querySelector('[data-index = "2"]').textContent;
    const goal3 = document.querySelector('[data-index = "3"]').textContent;
    const goal4 = document.querySelector('[data-index = "4"]').textContent;
    const goal5 = document.querySelector('[data-index = "5"]').textContent;
    const goal6 = document.querySelector('[data-index = "6"]').textContent;
    const goal7 = document.querySelector('[data-index = "7"]').textContent;
    const goal8 = document.querySelector('[data-index = "8"]').textContent;

    if (
      goal0 === 'X' &&
      goal1 === 'X' &&
      goal2 === 'X' ||

      goal0 === 'X' &&
      goal3 === 'X' &&
      goal6 === 'X' ||

      goal1 === 'X' &&
      goal4 === 'X' &&
      goal7 === 'X' ||

      goal3 === 'X' &&
      goal4 === 'X' &&
      goal5 === 'X' ||

      goal6 === 'X' &&
      goal7 === 'X' &&
      goal8 === 'X' ||

      goal2 === 'X' &&
      goal5 === 'X' &&
      goal8 === 'X' ||

      goal0 === 'X' &&
      goal4 === 'X' &&
      goal8 === 'X' ||

      goal2 === 'X' &&
      goal4 === 'X' &&
      goal6 === 'X'
    ) {
      playerX = true;
      console.log('X')
      return playerX
    } else if (
      goal0 === 'O' &&
      goal1 === 'O' &&
      goal2 === 'O' ||

      goal0 === 'O' &&
      goal3 === 'O' &&
      goal6 === 'O' ||

      goal1 === 'O' &&
      goal4 === 'O' &&
      goal7 === 'O' ||

      goal3 === 'O' &&
      goal4 === 'O' &&
      goal5 === 'O' ||

      goal6 === 'O' &&
      goal7 === 'O' &&
      goal8 === 'O' ||

      goal2 === 'O' &&
      goal5 === 'O' &&
      goal8 === 'O' ||

      goal0 === 'O' &&
      goal4 === 'O' &&
      goal8 === 'O' ||

      goal2 === 'O' &&
      goal4 === 'O' &&
      goal6 === 'O'
    ) {
      playerO = true;
      console.log('O')
      return playerO
    }

    if(data.length === 9 && !playerO && !playerX) {
      draw = true;
      console.log('draw')
      return draw;
    }
  }


  return {
    addDataAtt,
    checkWinner,
  }

})(); 

const data = []; // data attribute use to check the winners
const weapons = []; // to alternate between X and O

//
let playerX;
let playerO;
let draw;
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

    game.checkWinner();
  });
});
