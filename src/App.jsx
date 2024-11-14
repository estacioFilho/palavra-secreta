//css
import './App.css'
//data
import { category } from './data/data.js'
//hooks
import { useCallback, useState, useEffect } from 'react';
//components
import StartScreen from './components/startScreen/Index.jsx'
import Game from './components/game/Index.jsx';
import GameOver from './components/gameOver/Index.jsx';

const stage = [
  { id: 1, name: 'start' },
  { id: 2, name: 'game' },
  { id: 3, name: 'end' }
]

function App() {

  const [gameStage, setGameStage] = useState(stage[0].name);
  const [wordList] = useState(category);
  const [pickedWord, setPickedWord] = useState('');
  const [pickedCategory, setPickedCategory] = useState('');
  const [latters, setLatters] = useState([]);
  

  const [guessedLatters, setGuessedLatters] = useState([]);
  const [wrongLatters, setWrongLatters] = useState([]);
  const [guesses, setGuesses] = useState(3);
  const [score, setScore] = useState(0);
  console.log(wrongLatters)
  const pickedWordAndCategory = () => {
    const categories = Object.keys(wordList)
    const randomCategory = categories[Math.floor(Math.random() * categories.length)]

    const randomWord = wordList[randomCategory][Math.floor(Math.random() * wordList[randomCategory].length)]
    return { randomCategory, randomWord };
  }


  const startGame = () => {
    const { randomCategory, randomWord } = pickedWordAndCategory();


    let wordLatter = randomWord.split("")
    wordLatter = wordLatter.map((l) => l.toLowerCase())
   

    setPickedCategory(randomCategory);
    setPickedWord(randomWord);
    setLatters(wordLatter);




    setGameStage(stage[1].name)
  }

  const verifyLetter = (letter) =>{
    const normalizeLetter = letter.toLowerCase();
    if(guessedLatters.includes(letter) || wrongLatters.includes(letter)){
      return;
    }
    
    if(latters.includes(normalizeLetter)){
      setGuessedLatters((actualGuessedLetters)=>[
        ...actualGuessedLetters,
        normalizeLetter
        
      ])
      console.log(`Normalize: ${normalizeLetter}`)
    }else{
      setWrongLatters((actualWrongLetters)=>[
        ...actualWrongLetters,
        normalizeLetter
      ])
    }
  }
  
  
  const gameOver = () => {
    setGameStage(stage[2].name)
  }

  const retry = () => {
    setGameStage(stage[0].name)
  }


  return (
    <div className='App'>
      {gameStage == 'start' && <StartScreen startGame={startGame} />}
      {gameStage == 'game' && (<Game
        gameOver={gameOver}
        pickedCategory={pickedCategory}
        pickedWord={pickedWord}
        latters={latters}
        guessedLatters={guessedLatters}
        wrongLatters={wrongLatters}
        guesses={guesses}
        score={score}
        verifyLetter={verifyLetter}
      />
      )}
      {gameStage == 'end' && <GameOver retry={retry} />}

    </div>
  )
}

export default App
