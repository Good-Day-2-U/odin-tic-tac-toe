




const Gameboard = {
  gameboard : ["A","A","A","A","A","A","A","A","A"],
  logIt: function() {
    console.log(this.gameboard)
  },
  titleName : 'This is Tic Tac Toe!',
}

Gameboard.logIt();
console.log(Gameboard.titleName)



// function addPlayer(name) {
//   this.playerName = name
// }

// addPlayer.prototype.giveName = function() {
//   return this.playerName
// }

class AddPerson {
  constructor(name) {
    this.playerName = name
  }

  // This is another way to add a function to an objects prototype
  giveName() {
    return this.playerName
  }
}

const container = document.querySelector('.container')

Gameboard.gameboard.forEach(newSquare => {
  newSquare = document.createElement("div")
  container.appendChild(newSquare)
});


player1 = new AddPerson("Brandon")

console.log(player1.giveName())