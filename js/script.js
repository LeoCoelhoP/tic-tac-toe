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
// Player

const player = function (name, mark) {
    playerName =  name;
    playerMark = mark;
    points = 0;

    return {
        getPlayerMark() {
            return mark;
        },
        getPlayerScore() {
            return points;
        },
        score() {
            points++;
        }
    }
};

// Game

const game = (function() {
    let round = 0;
    return {

        startRound() {
            
            playerOne = player("Player 1", "X");
            playerTwo = player("Player 2", "O");

            let turn = "Player One";
            // for (let i = 0; i <= 8; i++) {

            //     let position;
            //     let isValidPosition = false;
            //     while (!isValidPosition) {
            //         position = prompt("Type the position you want to mark");
            //         gameBoard.validPositionChecker(position) ? isValidPosition = true : isValidPosition = false;
            //     }
                
            //     if (turn === "Player One") {
            //         turn = "Player two";

            //         gameBoard.markGameBoard(position, playerOne.getPlayerMark());
            //     } else {
            //         turn = "Player One"
            //         gameBoard.markGameBoard(position, playerTwo.getPlayerMark());

            //     }
            //     console.log(gameBoard.displayGameBoard());

            //     let isAGameWinner = this.checkWin()
            //     if (typeof isAGameWinner === "number"){
            //         let winner = this.getWinner(isAGameWinner);
            //         winner === "Player One" ? playerOne.score() : playerTwo.score() ;
            //         console.log("Winner is " + winner)
            //         console.log("score" + playerOne.getPlayerScore());
            //         break;
            //     }
            // }
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

