"use strict";

//get and display players
const players = (() => {

  function toggle () {
    const form = document.querySelector('#form');
    const board = document.querySelector('.container');

    form.classList.toggle('visible');
    board.classList.toggle('visible');
  }

  return {
    toggle,
  }
})();

const startBtn = document.querySelector('#startBtn');
startBtn.addEventListener('click', () => {

  players.toggle();
});