import './Style.css'

const GameOver = ({retry, score}) =>{
    return(
        <div className='retry'>
            <h1>Fim de jogo</h1>
            <h2>Sua potuação foi: <span>{score}</span></h2>
            <button onClick={retry}>Reiniciar jogo</button>
        </div>
    )
}

export default GameOver;