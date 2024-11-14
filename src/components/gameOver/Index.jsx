import './Style.css'

const GameOver = ({retry}) =>{
    return(
        <div className='retry'>
            <h1>Fim de jogo</h1>
            <button onClick={retry}>Reiniciar jogo</button>
        </div>
    )
}

export default GameOver;