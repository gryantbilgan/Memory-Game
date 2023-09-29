/*----- constants -----*/
// the amount of guess the player has
const INITIAL_GUESSES = 12;
// score needed to win
const WINNING_SCORE = 6;
// id of the gameboard arena elment
const GAMEBOARD_ID = 'game-board';
// id of the start button element
const INIT_BUTTON_ID = 'init-button';
// id of the guesses remaining element
const GUESSES_DISPLAY_ID = 'guesses';
// id of the score display element
const SCORE_DISPLAY_ID = 'score';
// an array of all cards
const CARD_ARRAY = [
  {
    name: 'scorpion',
    img: 'images/scorpion.png'
  },
  {
    name: 'scorpion',
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
    img: 'images/liukang.png'
  },
  {
    name: 'liu kang',
    img: 'images/liukang.png'
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
let guesses;
let cardsMatched = [];
let score;
let shuffledCards;
let firstPickedCard = null;



/*----- cached elements  -----*/
// the start button element
const initButton = document.getElementById(INIT_BUTTON_ID);
// arena element
const gameBoard = document.getElementById(GAMEBOARD_ID);
// guesses element
const guessDisplay = document.getElementById(GUESSES_DISPLAY_ID);
// score display element
const scoreDisplay = document.getElementById(SCORE_DISPLAY_ID);


  
/*----- event listeners -----*/
// event listener to begin game
initButton.addEventListener('click', initializeGame);
// event listener for player choice of cards
gameBoard.addEventListener('click', handleCardClick);


  
/*----- functions -----*/
// game initialize function
function initializeGame() {
  //set score to 0
  score = 0;
  //set guesses to 0
  guesses = INITIAL_GUESSES;
  //have an empty array because no cards have been matched
  cardsMatched = [];
  //set blank gameboard
  gameBoard.innerHTML = '';
  //disable start button
  initButton.disabled = true;
  //hide start button
  initButton.style.display = 'none';
  //call shuffle cards function
  shuffleCards();
  //call render function
  renderGameText();
  //call render cards function
  renderCards();
}

// game render function
function renderGameText () {
  // set guesses display to current guess remaining
  guessDisplay.innerText = `Guesses Left: ${guesses}`;
  // set score display to current score
  scoreDisplay.innerText = `Score: ${score}`;
}

// render cards function
function renderCards () {
  // iterate over cards array
  for (let i = 0; i < CARD_ARRAY.length; i++) {
    // create an element to display cards on gameboard
    let card = document.createElement('img');
    // set an attribute for back of cards
    card.setAttribute('src', 'images/mklogo.png');
    // set attribute to a 'data-id' for the repeating elements
    card.setAttribute('data-id', i);
    // append the cards to the parent gameboard
    gameBoard.appendChild(card);
  }
}

// handle card click function
function handleCardClick (event) {
  // get the card clicked element
  const clickedCardEl = event.target;
  // check if card clicked is matched or not
  if (cardsMatched.includes(clickedCardEl)) {
    // if it is, do nothing
    return;
  }

  // changing the id into a number and store it into a variable
  const clickedCardIdx = parseInt(clickedCardEl.getAttribute('data-id'));
  // get the card object from the shuffled cards array using index and store that into a variable
  const clickedCardObj = shuffledCards[clickedCardIdx];
  // check if there has already been a card selected
  if (firstPickedCard === null) {
    // assigning the clicked card object and element as first card that is picked
    firstPickedCard = {cardEl: clickedCardEl, cardObj: clickedCardObj}
    // flip the card to show its image by grabbing it by its property
    clickedCardEl.setAttribute('src', clickedCardObj.img);
  } else {
    // flip the second card
    clickedCardEl.setAttribute('src', clickedCardObj.img);
    // if the first card object I've picked matches with the curent clicked card
    if (firstPickedCard.cardObj.name === clickedCardObj.name) {
    // card matched
      // increment score by one
      score += 1;
      // push the two matched cards into the matched array
      cardsMatched.push(firstPickedCard.cardEl, clickedCardEl);
      // return the first card picked value to null
      firstPickedCard = null;
    } else {
      // if they don't match, remove a guess and guess again
      guesses -= 1;

      // delay for .5 seconds before flip back
      setTimeout(() => {
        // after a short delay, flip unmatched cards back
        firstPickedCard.cardEl.setAttribute('src', 'images/mklogo.png');
        // in this case the clicked card element is the current picked card
        clickedCardEl.setAttribute('src', 'images/mklogo.png');
        // return the first card picked value to null
        firstPickedCard = null;
      }, 300);
    }

    // update game text
    renderGameText();
    if (score === WINNING_SCORE || guesses === 0) {
      checkWin();
    }
  }
}
  
// check if game is over
function checkWin() {
  // if the state score increments to the set score game won
  if (score === WINNING_SCORE) {
    scoreDisplay.innerText = "Victory!";
  } 
  // if the guesses decrements to 0 then game over
  if (guesses === 0) {
    guessDisplay.innerText = "Defeat!"
  }

  // press start button is replaced with rematch button
  initButton.innerText = "Rematch?"
  // button is re-enabled at end of game
  initButton.disabled = false;
  // re-display the button
  initButton.style.display = "inline-block";
  // reset the game board
  gameBoard.innerHTML = "";
}
  
// shuffle card function
function shuffleCards() {
  // modify the the card array and assign it to a new array using rest operator
  shuffledCards = [...CARD_ARRAY];
  // shuffle cards through by giving it a positive or negative value
  shuffledCards.sort(() => .5 - Math.random());
}
