  /*----- constants -----*/
  //the amount of guess the player has
  const INITIAL_GUESSES = 12;
  //score needed to win
  const WINNING_SCORE = 6;
  //id of the gameboard arena elment
  const GAMEBOARD_ID = 'arena';
  //id of the start button element
  const INIT_BUTTON_ID = 'press-start';
  //id of the lifebar element
  const GUESSES_DISPLAY_ID = 'guesses';
  //id of the cards
  const CARDS_ID = 'cards';
  //id of loss display
  const GMAE_LOSS_ID = 'fatality';
  //id of no mistakes win
  const FLAWLESS_SCORE_ID = 'flawless-victory';
  //an array of all cards
  const CARD_ARRAY_ID = [];







  /*----- state variables -----*/
  //initial lifebar
  let guesses;
  //matched cards
  //stashed in initialize as an array
  let cardsMatched = [];
  //win message
  //score
  let score;





  /*----- cached elements  -----*/
  //the start buton element
  const initGame = document.getElementById(INIT_BUTTON_ID);
  //arena element
  const gameBoard = document.getElementById(GAMEBOARD_ID);
  //lifebar element
  // const lifebarDisplay = document.getElementById(LIFEBAR_ID);
  //cards element
  const cards = document.getElementById(CARDS_ID);
  //guesses element
  const guessDisplay = document.getElementById(GUESSES_DISPLAY_ID);


  /*----- event listeners -----*/
  //event listener to begin game
  startGame.addEventListener('click', initializeGame);
  //event listener to indicate hover
  // fighters.addEventListener('mouseover', fighterCombo);
  //event listener for player choice of cards
  // cards.addEventListener('click', flipCard);




  /*----- functions -----*/
  //game initialize function
    //random shuffle of cards function

  //game render function

  //matching choices function
    //sound alert for correct matches
    //sound alert for incorrect matches
    //check if a card has been clicked and there is a match add card to a matched cards array(or disable click on matched elements)
    //check if a match has been made
    //check if a match hasn't been made
    //if a card has not been clicked then add card to an array of clicked cards
    //loss of lifebar(incorrect choices) function


  //game won function(check winner)
    //check for conditions of a all matched cards

  //rematch game function
    //random shuffle of cards
    //check winner


    /*----- functions -----*/

    //game initialize function
        //set gameboard
        //loop through cards array
        //append to 'grid' of gameboard


    //check for match function
        //grab cards that have been chosen out of the array
        //give two options to pick card1 and card 2
        //set alert when a match has been made
        //leave cards flipped over
        //set alert to continue choosing if match hasnt been made
        //cards flip back over if no match
        //if either match or no match, clear the cards chosen array so they can continue flipping
        //display score when a match has been made
        //if the cards matches equals to the full cards array length then the game has been won



    //flip card function
        //identify cards chosen
        //push to the cards to a chosen array
        //set timeout for time of card display