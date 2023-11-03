


// Gameboard Logic

const Gameboard = {
  gameboard : ["A","A","A","A","A","A","A","A","A"],
  logIt: function() {
    console.log(this.gameboard)
  },
  titleName : 'This is Tic Tac Toe!',
}

const container = document.querySelector('.container')

Gameboard.gameboard.forEach((item, index) => {
  let newSquare = document.createElement("div");
  newSquare.classList.add('square');
  newSquare.classList.add(index);
  newSquare.style.backgroundColor = 'green';
  newSquare.addEventListener('click', function() {
    changeSquare(this);
  });
  container.appendChild(newSquare);
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
  if (playerTurn === 0 && self.style.backgroundColor === 'green') { 
    self.style.backgroundColor = 'red'
    let x = document.createElement('img')
    x.setAttribute('src', 'images/x.svg')
    x.setAttribute('alt', 'an X!')
    self.appendChild(x)
    GameState.moveMade()
  } else if (playerTurn === 1 && self.style.backgroundColor === 'green') {
    self.style.backgroundColor = 'blue'
    let o = document.createElement('img')
    o.setAttribute('src', 'images/o.svg')
    o.setAttribute('alt', 'an O!')
    self.appendChild(o)
    GameState.moveMade()
  }
  checkWin()
  console.log(playerTurn)
}

// Tracking if 3 x's or o's line up or if it is a tie game
const box0 = document.querySelector('.square0')
const box1 = document.querySelector('.square1')
const box2 = document.querySelector('.square2')
const box3 = document.querySelector('.square3')
const box4 = document.querySelector('.square4')
const box5 = document.querySelector('.square5')
const box6 = document.querySelector('.square6')
const box7 = document.querySelector('.square7')
const box8 = document.querySelector('.square8')

const checkWin = function() {
  if (box0.style.backgroundColor === 'blue' && box1.style.backgroundColor === 'blue' && box2.style.backgroundColor === 'blue') {
    console.log('Player 2 Wins!')
  } else {
    return null
  }
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