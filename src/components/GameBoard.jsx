import { useState } from "react";



export default function GameBoard( {onSelectSquare, board}) {

/* let gameBoard = initialGameBoard; 

for(const turn of turns){
    const {square, player } = turn;
    const {row, col} = square; 

    gameBoard[row][col] = player;
} */
//pomereno u app.js
/* const [gameBoard, setGameBoard] = useState(initialGameBoard);

// NE SMEMO MUTIRATI OBJEKTE - bolje je kreirati kopiju objekta i nju izmeniti. 
function handleSelectSquare(rowIndex, colIndex){
    setGameBoard((previousGameBoard) => {
        //kopiranje
        const updatedBoard = [...previousGameBoard.map(innerArray => [...innerArray])];
    updatedBoard[rowIndex][colIndex]= activePlayerSymbol;
    return updatedBoard;
    });

    onSelectSquare();
}
 */

    return <ol id="game-board">
       {board.map((row, rowIndex)=> <li key={rowIndex}>
        <ol>
            {row.map((playerSymbol, colIndex)=> 
            <li key = {colIndex}> <button onClick={() => onSelectSquare(rowIndex, colIndex)} disabled={playerSymbol!==null}>{playerSymbol}</button></li>)}
        </ol>
       </li>)}
    </ol>;
}