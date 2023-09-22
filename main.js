  /*----- constants -----*/
  //the amount of guess the player has
  const INITIAL_GUESSES = 8;
  //a timer to add some stakes
  const TIMER = 5;
  //id of the gameboard arena elment
  const ARENA_ID = 'arena';
  //id of the start button element
  const PRESS_START_ID = 'press-start';
  //id of the lifebar element
  const LIFEBAR_ID = 'lifebar';
  //id of the cards
  const FIGHTERS_ID = 'cards';
  //id of loss display
  const LOSS_ID = 'fatality';
  //id of no mistakes win
  const FLAWLESS_WIN_ID = 'flawless-victory';






  /*----- state variables -----*/
  //player
  let player;
  //initial lifebar
  let lifebar;

  //matched car




  /*----- cached elements  -----*/
  //the start buton element
  const pressStart = document.getElementById('press-start');
  //arena element
  const fightArena = document.getElementById('arena');
  //lifebard element
  const lifebarDisplay = document.getElementById('lifebar');
  //cards element
  const fighters = document.getElementById('cards')


  /*----- event listeners -----*/
  //event listener to begin game
  pressStart.addEventListener('click', beginMatch);
  //event listener to indicate hover
  fighters.addEventListener('mouseover', fighterCombo);
  //event listener for player choice
  fighters.addEventListener('click', fighterCombo);




  /*----- functions -----*/
  //game initialize function
    //random shuffle of cards function

  //game render function

  //matching choices function
    //sound alert for correct matches
    //sound alert for incorrect matches

  //loss of lifebar(incorrect choices) function

  //match won function

  //rematch game function
    //random shuffle of cards