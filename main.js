  /*----- constants -----*/
  //the amount of guess the player has
  const INITIAL_GUESSES = 15;
  //score needed to win
  const WINNING_SCORE = 6;
  //id of the gameboard arena elment
  const GAMEBOARD_ID = 'game-board';
  //id of the start button element
  const INIT_BUTTON_ID = 'init-button';
  //id of the guesses remaining element
  const GUESSES_DISPLAY_ID = 'guesses';
  //id of the score display element
  const SCORE_DISPLAY_ID = 'score';
  //id of the cards
  // const CARDS_ID = 'cards';
  //id of loss display
  const GAME_LOSS_ID = 'fatality';
  //id of no mistakes win
  const FLAWLESS_SCORE_ID = 'flawless-victory';
  //an array of all cards
  const CARD_ARRAY = [
    {
        name: 'scoprion',
        img: 'images/scorpion.png'
    },
    {
        name: 'scoprion',
        img: 'images/scorpion.png'
    },
    {
        name: 'subzero',
        img: 'images/subzero.png'
    },
    {
        name: 'subzero',
        img: 'images/subzero.png'
    },
    {
        name: 'sonya',
        img: 'images/sonya.png'
    },
    {
        name: 'sonya',
        img: 'images/sonya.png'
    },
    {
        name: 'liu kang',
        img: 'images/liu kang.png'
    },
    {
        name: 'liu kang',
        img: 'images/liu kang.png'
    },
    {
        name: 'raiden',
        img: 'images/raiden.png'
    },
    {
        name: 'raiden',
        img: 'images/raiden.png'
    },
    {
        name: 'johnnycage',
        img: 'images/johnnycage.png'
    },
    {
        name: 'johnnycage',
        img: 'images/johnnycage.png'
    }
];







  /*----- state variables -----*/
  //initial lifebar
  let guesses;
  //matched cards
  //stashed in initialize as an array
  let cardsMatched = [];
  //win message
  //score
  let score;
  let shuffledCards;
  let cardsSelected;





  /*----- cached elements  -----*/
  //the start button element
  const initButton = document.getElementById(INIT_BUTTON_ID);
  //arena element
  const gameBoard = document.getElementById(GAMEBOARD_ID);
  //lifebar element
  // const lifebarDisplay = document.getElementById(LIFEBAR_ID);
  //cards element
  // const cards = document.getElementById(CARDS_ID);
  //guesses element
  const guessDisplay = document.getElementById(GUESSES_DISPLAY_ID);
  //score display element
  const scoreDisplay = document.getElementById(SCORE_DISPLAY_ID);


  /*----- event listeners -----*/
  //event listener to begin game
  initButton.addEventListener('click', initializeGame);
  //event listener to indicate hover
  // fighters.addEventListener('mouseover', fighterCombo);
  //event listener for player choice of cards
  gameBoard.addEventListener('click', handleCardClick);




  /*----- functions -----*/
  //game initialize function
    //random shuffle of cards function
  function initializeGame() {
    score = 0;
    guesses = INITIAL_GUESSES;
    cardsMatched = [];
    gameBoard.innerHTML = '';
    initButton.disabled = true;
    initButton.style.display = 'none';
    shuffleCards();
    render();
    renderCards();
  }

  //game render function
  function render () {
    guessDisplay.innerText = `Guesses Left: ${guesses}`;
    scoreDisplay.innerText = `Score: ${score}`;
    renderCards();
  }

  //render cards function
  function renderCards () {
    for (let i = 0; i > CARD_ARRAY.length; i++) {
      let card = document.createElement('img');
      card.setAttribute()

    }
    shuffleCards();
  }

  //matching choices function
  function checkForMatches () {

  }

  function flipCard () {

  }
    //sound alert for correct matches
    //sound alert for incorrect matches
    //check if a card has been clicked and there is a match add card to a matched cards array(or disable click on matched elements)
    //check if a match has been made
    //check if a match hasn't been made
    //if a card has not been clicked then add card to an array of clicked cards
    //loss of lifebar(incorrect choices) function
  
  //   function handleCardClick(event) {
  //     if ()
  // }


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

//shuffle card function
function shuffleCards() {
  shuffledCards = [...CARD_ARRAY];
  shuffledCards.sort(() => .5 - Math.random());
}