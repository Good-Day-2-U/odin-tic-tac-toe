


// Gameboard Logic

const Gameboard = {
  gameboard : ["A","A","A","A","A","A","A","A","A"],
  logIt: function() {
    console.log(this.gameboard)
  },
  titleName : 'This is Tic Tac Toe!',
}

const container = document.querySelector('.container')

Gameboard.gameboard.forEach(newSquare => {
  newSquare = document.createElement("div")
  newSquare.classList.add('square')
  newSquare.style.backgroundColor = 'green'
  newSquare.addEventListener('click', function() {
    changeSquare(this);
  })
  container.appendChild(newSquare)
});

// Gameboard.logIt();
// console.log(Gameboard.titleName)



// Gameloop/Update

let playerTurn = 0

const GameState = {
  moveMade: function() {
    if (playerTurn === 0) {
      return playerTurn = 1
    } else {
      return playerTurn = 0
    } 
  } 
}

// GameState.moveMade()
console.log(GameState.playerTurn)



// Adding a shape / color and changing turn
let changeSquare = function(self) {
  if (playerTurn === 1 && self.style.backgroundColor === 'green') { 
    self.style.backgroundColor = 'red'
    GameState.moveMade()
  } else if (playerTurn === 0 && self.style.backgroundColor === 'green') {
    self.style.backgroundColor = 'blue'
    GameState.moveMade()
  }
  console.log(playerTurn)
}




// Adding Players

class AddPerson {
  constructor(name) {
    this.playerName = name
  }

  // This is another way to add a function to an objects prototype
  giveName() {
    return this.playerName
  }
}


player1 = new AddPerson("Brandon")

console.log(player1.giveName())