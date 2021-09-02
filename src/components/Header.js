export default function Header(props) {
    const { currentScore, bestScore, gameOver } = props;
    return (
        <div className='header'>
            <div className='instructions'>
                <h1>Flag Memory Game</h1>
                <p>Get points by clicking on any flag that you haven't yet clicked on! 
                Your score resets if you forget and click and flag a second time! </p>
            </div> 
            <div className='scoreboard-and-status'>
                <div className='scoreboard'>
                    <div>{`Score: ${currentScore}`}</div>
                    <div>{`Best Score: ${bestScore}`}</div>
                </div>  
                {gameOver ?
                    <div className='status'>GAME OVER! CLICK ON A CARD TO START A NEW ROUND!</div>
                    : null}
            </div>   
           
        </div>
    );
}