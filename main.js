  /*----- constants -----*/
  //the amount of guess the player has
  const INITIAL_GUESSES = 12;
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
  //initial lifebar
  let guesses;
  //matched cards
  //stashed in initialize as an array
  let cardsMatched = [];
  //win message
  //score
  let score;
  let shuffledCards;
  let cardsSelected = [];





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
    renderText();
    //call render cards function
    renderCards();
  }

  //game render function
  function renderText () {
    //set guesses display to current guess remaining
    guessDisplay.innerText = `Guesses Left: ${guesses}`;
    //set score display to current score
    scoreDisplay.innerText = `Score: ${score}`;
  }

  //render cards function
  function renderCards () {
    //iterate over cards array
    for (let i = 0; i < CARD_ARRAY.length; i++) {
      //create an element to display cards on gameboard
      let card = document.createElement('img');
      //set an attribute for back of cards
      card.setAttribute('src', 'images/mklogo.png');
      //set attribute to a 'data-id' for the repeating elements
      card.setAttribute('data-id', i);
      // card.addEventListener('click', handleCardClick);
      //append the cards to the parent gameboard
      gameBoard.appendChild(card);
    }
  }

  //handle card click function
  function handleCardClick (event) {
    //get the card clicked element
    
    const clickedCard = event.target;
    
    //check if card clicked is matched or not
    if (cardsMatched.includes(clickedCard)) {
      //if it is, do nothing
      
      return;
    }
    //changing the id into a string
    const clickedCardIdx = parseInt(clickedCard.getAttribute('data-id'));
    //get the card object from the shuffled cards array using index
    
    const clickedCardObj = shuffledCards[clickedCardIdx];
    
    //check if there are already two cards selected
    if (selectedCard.length < 2) {
      //add the clicked card to the selected cards array by assigning and element and an object
      cardsSelected.push({cardEl: clickedCard, cardObj: clickedCardObj});
      
      //flip the card to show its image by grabbing it by its property
      clickedCard.setAttribute('src', clickedCardObj.img);
      
    }
    //check if two cards have been selected
    if (cardsSelected.length === 2) {
      //compare the two cards to see if there is a through their index an property
      if (cardsSelected[0].cardObj.name === cardsSelected[1].cardObj.name) {
        //increment score if matched
        score += 1;
        //push the two matched cards into an array
        // cardsMatched.push(cardsSelected[0].cardEl, cardsSelected[1].cardEl);
        //clear cards selected array
        cardsSelected = [];
      } else {
        //if they don't match, remove a guess
        guesses -= 1;
        setTimeout(() => {
          //after a short delay, flip unmatched cards back
          cardsSelected[0].cardEl.setAttribute('src', 'images/mklogo.png');
          cardsSelected[1].cardEl.setAttribute('src', 'images/mklogo.png');
          cardsSelected = [];
          //clear cards selected array
          //delay for .5 seconds before flip back
        }, 500);
      }
      //update game display
      renderText();
      if (score === WINNING_SCORE || guesses === 0) {
        checkWin();
      }
    }
  }
  
  //check if game is over
  function checkWin() {
    //if the state score increments to the set score
    if (score === WINNING_SCORE) {
      // debugger
      scoreDisplay.innerText = "Victory";
      console.log("Victory!");
    } else if (guesses === 0) {
      guessDisplay.innerText = "You Lose!"
      console.log("You lose!");
    }
    //press start button is replaced with rematch button
    initButton.innerText = "Rematch?"
    //button is re-enabled at end of game
    initButton.disabled = false;
    //button is returned to the display at end of game
    initButton.style.display = "block";
    gameBoard.innerHTML = "";
}
  
  //shuffle card function
  function shuffleCards() {
    //modify the the card array and assign it to a new array using rest operator
    shuffledCards = [...CARD_ARRAY];
    //shuffle cards through by giving it a positive or negative value
    shuffledCards.sort(() => .5 - Math.random());
  }
