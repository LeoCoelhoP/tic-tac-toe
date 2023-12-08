// Gameboard
const gameBoard = (function () {
    let gameboard = [0, 1, 2, 3, 4, 5, 6, 7, 8]

    return {
        displayGameBoard() {
            return gameboard;
        },

        validPositionChecker(position) {
            return (typeof gameboard[position] === "number");
        },

        markGameBoard(position, playerMark) {
            gameboard[position] = playerMark
        },
        resetGameBoard() {
            gameboard = [0, 1, 2, 3, 4, 5, 6, 7, 8];
        }
    }

})();

const displayControler = (function () {
    let firstScore = 0;
    let secondScore = 0;

    return {
        updateScore(newFirstScore, newSecondScore) {
            firstScore = newFirstScore;
            secondScore = newSecondScore;
        }
    }
})();

class Player {
    constructor (name, mark){
        this.playerName = name;
        this.playerMark = mark;
        this.points = 0;
    }
    getPlayerMark() {
        return this.playerMark;
    };
    
    getPlayerScore() {
        return this.points;
    };
    score() {
        this.points++;
    };
    resetScore() {
        this.points = 0;
    };
}

// Game

const game = (function() {
    round = 0;
    return {
        updateScoreBoard() {
            scoreboard = document.querySelector(".Scoreboard");
            scoreboard.textContent = `Player one ${playerOne.getPlayerScore()} VS ${playerTwo.getPlayerScore()} Player Two`
        },
        roundWinMessge(winner) {
            winnerDisplay = document.querySelector("h1");
            
            if (winner === "Draw") {
                winnerDisplay.textContent = `Draw!`;

            } else {
                winnerDisplay.textContent = `${winner} win the round!`;

            }
        },
        isGameOver() {
            round++;
            console.log(round);
            winnerDisplay = document.querySelector("h1");

            if (round === 3){
                if (playerOne.getPlayerScore() > playerTwo.getPlayerScore()) {
                    winnerDisplay.textContent = "Player One win the game!"

                } else {
                    winnerDisplay.textContent = "Player Two win the game!"

                }

                playerOne.resetScore();
                playerTwo.resetScore();
            }
        },
        resetRound() {
            const gridPieces = document.querySelectorAll("a");

            gridPieces.forEach((piece) => {
                piece.innerHTML = "";
            });

            gameBoard.resetGameBoard();

            gridPieces.forEach((piece) => {
                piece.setAttribute("style", "background: transparent");
            });
        },

        startRound() {
            
            const gridPieces = document.querySelectorAll("a");
            let turn = "Player One"
            let clicks = 0;
            gridPieces.forEach((piece) => {
                piece.addEventListener(("click" || "touchstart"), () => {
                    this.updateScoreBoard();

                    position = piece.className;
                    gameBoard.validPositionChecker(position) ? isValidPosition = true : isValidPosition = false;
                    if(isValidPosition) {
                        clicks++;
                        isValidPosition = true;

                        if (turn === "Player One") {
                            turn = "Player two";
                            gameBoard.markGameBoard(position, playerOne.getPlayerMark());
                            piece.innerHTML = "X";
                            piece.setAttribute("Style", "background: red; color: -webkit-box-shadow:0px 0px 105px 30px rgba(255,0,0,0.9); -moz-box-shadow: 0px 0px 105px 30px rgba(255,0,0,0.9); box-shadow: 0px 0px 105px 30px rgba(255,0,0,0.9); text-shadow: rgba(255,0,0,1) 0px 0px 136px;");
                        } else {
                            turn = "Player One"
                            gameBoard.markGameBoard(position, playerTwo.getPlayerMark());
                            piece.innerHTML = "O";
                            piece.setAttribute("Style", "background: purple; -webkit-box-shadow:0px 0px 105px 30px rgba(255,0,238,0.9); -moz-box-shadow: 0px 0px 105px 30px rgba(255,0,238,0.9);  box-shadow: 0px 0px 105px 30px rgba(255,0,238,0.9);");


                        }  
                        let isAGameWinner = this.checkWin()
                        if (typeof isAGameWinner === "number"){
                            let winner = this.getWinner(isAGameWinner);
                            winner === "Player One" ? playerOne.score() : playerTwo.score() ;
                            this.resetRound();
                            this.updateScoreBoard();
                            clicks = 0;
                            this.roundWinMessge(winner);                            
                            this.isGameOver()

                        }

                        if (clicks === 9) {
                            this.resetRound();
                            clicks = 0;
                            this.roundWinMessge("Draw");

                            this.isGameOver()

                        }
                    }
                    

                });
            });

        },

        startGame() {
            playerOne = new Player("Player 1", "X");
            playerTwo = new Player("Player 2", "O");  
            this.startRound()





 
        },

        checkWin() {
            const positions = gameBoard.displayGameBoard(); 
            let WinnerPosition;
            if (positions[0] === positions[1] && positions[1] === positions[2]) {
                return 0;
                
            } else if (positions[3] === positions[4] && positions[4] === positions[5]) {
                return 3;

            } else if (positions[6] === positions[7] && positions[7] === positions[8]) {
                return 6;

            } else if (positions[0] === positions[4] && positions[4] === positions[8]) {
                return 0;

            } else if (positions[2] === positions[4] && positions[4] === positions[6]) {
                return 2;

            } else if (positions[0] === positions[3] && positions[3] === positions[6]) {
                return 0;
            
            } else if (positions[1] === positions[4] && positions[4] === positions[7]) {
                return 1;
            
            } else if (positions[2] === positions[5] && positions[5] === positions[8]) {
                return 2;
            
            }
        },

        getWinner(WinnerPosition) {
            const positions = gameBoard.displayGameBoard(); 
            return (positions[WinnerPosition] === "X") ? "Player One" : "Player Two";
        }
    }
})();

game.startRound();

