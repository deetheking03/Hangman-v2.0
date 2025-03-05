import './App.css';
import React from 'react';
import LetterBox from './LetterBox';
import SingleLetterSearchbar from './SingleLetterSearchBar';

const pics = ['noose.png', 'upperBody.png', 'upperandlower.png', '1arm.png', 'botharms.png'];
const words = ["Morehouse", "Spelman", "Basketball", "Table", "Museum", "Excellent", "Fun", "React"];
class HangmanGame extends React.Component {
  state = {
    wordList: words,
    curWord:  words[Math.floor(Math.random() * words.length)].toUpperCase(),
    lifeLeft: 0,
    usedLetters: [],
    correctGuesses: new Set(),
    playerName: "",
  };

  componentDidMount() {  
    console.log(words);
    this.setState({
      wordList: words
    });
    this.getPlayerName();
  }

  getPlayerName = () => {
    const name = prompt("Enter your name");
    this.setState({
      playerName: name || "Player"
    });
  }

  startNewGame = () => {
    this.setState({
      curWord:  words[Math.floor(Math.random() * words.length)].toUpperCase(),
    lifeLeft: 0,
    usedLetters: [],
    correctGuesses: new Set(),
    });
  }

  handleGuess = (letter) => {
    const upperLetter = letter.toUpperCase();
    const { curWord, usedLetters, lifeLeft, correctGuesses } = this.state;

    if (usedLetters.includes(upperLetter)) return;

    let newLifeLeft = lifeLeft;
    let newCorrectGuesses = new Set(correctGuesses);

    if (curWord.includes(upperLetter)) {
      newCorrectGuesses.add(upperLetter);
    } else {
      newLifeLeft = Math.min(pics.length - 1, lifeLeft + 1);
    }

    this.setState({
      usedLetters: [...usedLetters, upperLetter],
      lifeLeft: newLifeLeft,
      correctGuesses: newCorrectGuesses,
    });
  };

  displayWord = () => {
    return this.state.curWord
      .split("")
      .map((letter) => (this.state.correctGuesses.has(letter) ? letter : "_"))
      .join(" ");
  };

  render(){
    const word = this.displayWord();
    return(
      <div>
        <h1>Hangman Game</h1>
        <h2>Welcome, {this.state.playerName}!</h2>
        <img src={pics[this.state.lifeLeft]} alt="Hangman Stage" />
        <button onClick={this.startNewGame}>New Game</button>
        <p>Word: {word}</p>
        <SingleLetterSearchbar onSearch={this.handleGuess} />

        <LetterBox 
          letter="A"
          isVisible={true}
          boxStyle={{ backgroundColor: 'lightblue' }}
          letterStyle={{ color: 'white', fontSize: '30px' }}
        ></LetterBox>
      </div>
    )
  }

}



export default HangmanGame;
