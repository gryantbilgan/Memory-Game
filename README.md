<div align='center'>

<img width="1440" alt="Screenshot 2023-09-28 at 10 52 48 AM" src="https://github.com/gryantbilgan/Memory-Game/assets/125223778/f8d9dc5b-d802-4f65-ab4e-46b3f0ae79c2">

# Test Your Mind

### Built by: **[Bryant Gilgan](https://www.linkedin.com/in/bryant-gilgan/)**

[![Maintenance](https://img.shields.io/badge/Maintained%3F-yes-green.svg)](https://GitHub.com/Naereen/StrapDown.js/graphs/commit-activity)

![JS badge](https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E)
![HTML badge](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS badge](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)
![Visual Studio Code](https://img.shields.io/badge/Visual_Studio_Code-0078D4?style=for-the-badge&logo=visual%20studio%20code&logoColor=white)

**_Click the following link to be redirected to the live version of the code!_**

## [MEMORY KOMBAT](https://gryantbilgan.github.io/Memory-Game/)

### Description:

**_MEMORY KOMBAT_** is a fully functional web game that utilizes Javascript, HTML, and CSS to test how good your memory is. GET OVER HERE! The battle for the Cerebral Realm has begun. Players will have to use their cognitive and recall abilities to match the unique set of cards displayed before them. Delve into the pit and test your mind. I have nothing further to teach you. You possess the knowledge. All that is lacking now is the will...

## :link: Associated Links:

Click the following link to be redirected to the Wireframe and Design Inspiration for this project! [Lucid](https://lucid.app/lucidchart/invitations/accept/inv_d5daea5c-ccd6-4b16-abc6-cf8668f00257)


### 👊 Main Menu

<img width="1440" alt="Screenshot 2023-09-28 at 12 32 37 PM" src="https://github.com/gryantbilgan/Memory-Game/assets/125223778/41eeb8ea-3cf3-483c-aebf-78a915d8e0b7">

Memory Kombat is ready to begin. Press start to begin the round.

### The Match is Ready to Begin

<img width="1440" alt="Screenshot 2023-09-28 at 1 43 45 PM" src="https://github.com/gryantbilgan/Memory-Game/assets/125223778/d4d939f0-d556-4769-b2d8-b85fd836f2c8">

Once you press start the cards are loaded onto the page to begin matching.

### Begin Matching

<img width="1440" alt="Screenshot 2023-09-28 at 1 49 29 PM" src="https://github.com/gryantbilgan/Memory-Game/assets/125223778/777a1727-0321-452f-9abc-2ec144e1effd">

When two cards have been clicked they will flip back over after .3 seconds. How good is your memory?


### Matches Made

<img width="1440" alt="Screenshot 2023-09-28 at 1 53 30 PM" src="https://github.com/gryantbilgan/Memory-Game/assets/125223778/034b2260-ca06-471c-af9f-721bab8b8f8f">

 If two cards have been matched they will remain displayed, so you know how many cards you have left. Your score will increase the more matches you get, but if you guess incorrectly your number of guesses will decrease.


### End of Game

<img width="1440" alt="Screenshot 2023-09-28 at 1 55 33 PM" src="https://github.com/gryantbilgan/Memory-Game/assets/125223778/e292a145-b70a-4203-9b81-3d103be01bb2">

As soon as all of the matches have been made, the cards will disappear and you will be declared Victorious or Defeated. Do you dare to try again?

## 💻 Technologies Used:

- ![JS badge](https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E)
- ![HTML badge](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
- ![CSS badge](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
- ![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)
- ![Visual Studio Code](https://img.shields.io/badge/Visual_Studio_Code-0078D4?style=for-the-badge&logo=visual%20studio%20code&logoColor=white)

## 🪤 The Code Behind the Shuffle

</div>

```js
// shuffle card function
function shuffleCards() {
  shuffledCards = [...CARD_ARRAY];
  shuffledCards.sort(() => .5 - Math.random());
}
```
<div align='center'>

#### The code block above was not the most important function in my program, but it was valuable. There are other ways to shuffle items from an array, and I decided to use this one because it seemed most simple for me at the time. I was able to assign my array of a set of cards to a variable that had no value yet by using the rest operator as my type of reference. Then I was able to sort through this array and shuffle the cards with Math.random(). Because Math.random returns a value that is greater than or equal to zero and less than one. When I subtracted that random value by .5 I am able to get a positive or negative value which the sort method would arrange the cards in a different way each time based off of their value.

## 📈 Plans for the future:

</div>

This memory game was challenging but a lof of fun to build. My mind was definitely tested throughout. Here are some things that I would like to add as I work further on the game:
- [ ] Add audio for that is unique to each of the characters when they have been matched.
- [ ] Add audio to the main menu, when the game is loaded, and when the game has been ended(victory or defeat).
- [ ]Replace guess counter with an animated lifebar that will decrease when incorrect guesses happen and hit sound effects.
- [ ] Replace score counter with a combos counter and hit sound effects.
- [ ] Add more characters.
- [ ] Increase number of cards flipped and needed to be matched.
- [ ] Add more levels that will increase diffculty pertaining to more cards needing to be matched.
- [ ] Increase over all user interaction and user experience by making the game more dynamic.
