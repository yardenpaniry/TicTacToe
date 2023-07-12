// Importing the required components
import Board from "./Board";
import Info from "./Info";

// Importing the CSS File
import "./css/TicTacToe.css";

// Importing the useState hook
import { useState, useEffect } from "react";

function TicTacToe() {
  const [reset, setReset] = useState(false);

  const [turn, setTurn] = useState(0);

  const [winner, setWinner] = useState(-1);
  const [oWins, setoWins] = useState(0);
  const [xWins, setxWins] = useState(0);
  const [ties, setTies] = useState(0);

  const [restart, setRestart] = useState(false);

  const resetBoard = () => {
    setReset(true);
  };
  const restartBoard = () => {
    setRestart(false);
    setReset(true);
    setWinner(-1);
    setoWins(0);
    setxWins(0);
    setTies(0);
  };

  useEffect(() => {
    if (winner === 0) {
      setTies((ties) => ties + 1);
    } else if (winner === 1) {
      setxWins((xWins) => xWins + 1);
    } else if (winner === 2) {
      setoWins((oWins) => oWins + 1);
    }
  }, [winner]);

  return (
    <div className="TicTacToe">
      {winner !== -1 && (
        <div>
          <div className="winner">
            <div className="winner-text">
              {winner === 0 && <div>ROUND TIED</div>}
              {winner === 1 && <div>PLAYER 1 WINS!</div>}
              {winner === 2 && <div>PLAYER 2 WINS!</div>}
            </div>
            {winner === 1 && (
              <div className="big-winner-text x">
                <div className="big-winner">X</div>
                <div className="big-winner-text-x"> TAKES THE ROUND</div>
              </div>
            )}
            {winner === 2 && (
              <div className="big-winner-text o">
                <div className="big-winner">O</div>
                <div className="big-winner-text-o"> TAKES THE ROUND</div>
              </div>
            )}
            <div className="buttonsWins">
              <button className="quitButton" onClick={() => resetBoard()}>
                QUIT
              </button>
              <button className="nextButton" onClick={() => resetBoard()}>
                NEXT ROUND
              </button>
            </div>
          </div>
        </div>
      )}

      {restart && (
        <div className="restart">
          <div className="restartText">RESTART GAME?</div>
          <div className="buttonsWins">
            <button className="quitButton" onClick={() => setRestart(false)}>
              NO, CANCEL
            </button>
            <button className="nextButton" onClick={() => restartBoard()}>
              YES, RESTART
            </button>
          </div>
        </div>
      )}

      <div className="topButtons">
        <div className="XOdisplay">
          <div style={{ color: "#ffc860" }}>O</div>
          <div style={{ color: "#31C3BD" }}>X</div>
        </div>
        <div className="turn">
          <p className="turnXo">{turn === 0 ? "X" : "O"}</p>
          <p className="turnText">TURN</p>{" "}
        </div>
        <div className="reset" onClick={() => setRestart(true)}>
          <span>&#x21bb;</span>
        </div>
      </div>
      <Board
        reset={reset}
        setReset={setReset}
        winner={winner}
        setWinner={setWinner}
        resetBoard={resetBoard}
        turn={turn}
        setTurn={setTurn}
        setoWins={setoWins}
        setxWins={setxWins}
        setTies={setTies}
        ties={ties}
      />
      <Info ties={ties} xWins={xWins} oWins={oWins} />
    </div>
  );
}

export default TicTacToe;
