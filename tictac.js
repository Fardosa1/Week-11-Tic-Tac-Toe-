// Define variables
// This portion o the code has the cell elements
// Initializes a variable called current player to X and a variable end game
// to false. Its to keep track of whos turn it is and if the game started.
const cells = document.querySelectorAll('.cell');
const turn = document.querySelector('#turn');
const reset = document.querySelector('#reset');
let currentPlayer = 'X';
let gameEnded = false;



// Function to check if a player has won
// This portion of the code includes functions to see who won
// It checks all the rows and all the coloums! It has all the possible 
// winning combinations. If there isn't it returns false
function checkWin(player) {
  if (
    // Rows
    (cells[0].textContent === player && cells[1].textContent === player && cells[2].textContent === player) ||
    (cells[3].textContent === player && cells[4].textContent === player && cells[5].textContent === player) ||
    (cells[6].textContent === player && cells[7].textContent === player && cells[8].textContent === player) ||
    // Columns
    (cells[0].textContent === player && cells[3].textContent === player && cells[6].textContent === player) ||
    (cells[1].textContent === player && cells[4].textContent === player && cells[7].textContent === player) ||
    (cells[2].textContent === player && cells[5].textContent === player && cells[8].textContent === player) ||
    // Diagonals
    (cells[0].textContent === player && cells[4].textContent === player && cells[8].textContent === player) ||
    (cells[2].textContent === player && cells[4].textContent === player && cells[6].textContent === player)
  ) {
    return true;
  }
  return false;
}

// Function to check if the game is a draw
// This portion of the code includes a lopp that checks to see if the game is over!
// If the cells are empty it comes back false because the game isn't over yet
// If the cells have been filled but no winner? returns false because of a draw
function checkDraw() {
  for (let i = 0; i < cells.length; i++) {
    if (cells[i].textContent === '') {
      return false;
    }
  }
  return true;
}

// Function to handle player's move
// This portion checks to see if the game has ended. it checks to see if the
// curent player has won by calling checkwin, if they have it sets
// game ended to true. If the game has not ended it but a draw? it does the same
// If not the function switches the current player and updates the turning heading to
// the new players turn. 
function handleMove() {
  if (gameEnded) {
    return;
  }
  if (this.textContent === '') {
    this.textContent = currentPlayer;
    if (checkWin(currentPlayer)) {
      turn.textContent = `${currentPlayer} has won!`;
      gameEnded = true;
    } else if (checkDraw()) {
      turn.textContent = 'The game is a draw';
      gameEnded = true;
    } else {
      currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
      turn.textContent = `It's ${currentPlayer}'s turn`;
    }
  }
}

// Add event listeners to the cells
// This portion of the code the forEach method uses a loop through the cell
// and this allows the players to make a move by clickingon an empty cell,
// and the game will repsond to either adding aN X OR O to he cell and udpdates the game.
cells.forEach(cell => {
  cell.addEventListener('click', handleMove);
});

// Add event listener to the reset button
// This portion if the code allows for the reset of the fame board when a new game starts. 
reset.addEventListener('click', () => {
  cells.forEach(cell => {
    cell.textContent = '';
  });
  currentPlayer = 'X';
  gameEnded = false;
  turn.textContent = `It's ${currentPlayer}'s turn`;
});
