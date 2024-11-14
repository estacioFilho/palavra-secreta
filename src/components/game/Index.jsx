import { useEffect, useState, useRef } from 'react';
import './Style.css'

const Game = ({
    gameOver,
    pickedCategory,
    pickedWord,
    latters,
    guessedLatters,
    wrongLatters,
    guesses,
    score,
    verifyLetter
}) => {

    const [letter, setLetter] = useState('')
    const inputRef = useRef(null)

    const handleSubmit = (e)=>{
        e.preventDefault();

        verifyLetter(letter);
        setLetter('')
        inputRef.current.focus();
    }

console.log(letter)
    return (
        <div className='Game'>
            <p className="point">
                <span>Potuação: {score}</span>
            </p>
            <h1>Adivinhe a palavra: </h1>
            <h3 className="tip">
                Dica sobre a palavra: <span>{pickedCategory}</span>
            </h3>
            <p>Você ainda tem {guesses} tentativa(s).</p>
            <div className="wordContainer">
                {

                    latters.map((latter, i)=>{
                    return(
                        guessedLatters.includes(latter) ? (<span className="latter" key={i} >{latter}</span>) :  <span  className="branckSquare" key={i}></span>
                    )
                    })
                }
            </div>
            <div className="latterContainer">
                <p>Tente adivinhar a letra da palavra: </p>
                <form onSubmit={handleSubmit}>
                    <input type="text" name='letter' maxLength='1' value={letter} required onChange={(e) => setLetter(e.target.value)} ref={inputRef} />
                    <button >Jogar!</button>
                </form>
            </div>
            <div className="wongLatterContainer">
                <p>Letras já ultilizadas:</p>
               { wrongLatters && wrongLatters.map((latter, i) => {
                    return(
                        (<span key={i}>{latter}, </span>)
                    )
                })}
            </div>
        </div>

    )
}

export default Game;