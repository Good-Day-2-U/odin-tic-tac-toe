


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
  container.appendChild(newSquare)
});

Gameboard.logIt();
console.log(Gameboard.titleName)



// Gameloop/Update

const GameState = {
  playerTurn : 0,

  moveMade: function() {
    if (this.playerTurn === 0) {
      this.playerTurn = 1
    } else {
      this.playerTurn = 0
    }
  }
}

GameState.moveMade()
console.log(GameState.playerTurn)





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