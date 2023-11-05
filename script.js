// Adding Players

let name1
let name2 

document.addEventListener('DOMContentLoaded', (event) => {
  name1 = prompt("Enter name for Player 1:");
  name2 = prompt("Enter name for Player 2:");

  if (name1) document.querySelector('.p1').innerHTML = name1;
  if (name2) document.querySelector('.p2').innerHTML = name2;
});


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
  newSquare.classList.add('b' + index);
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
// Locking game if theres a winner
let gameLock = false
const winnerText = document.querySelector('.winner')



let changeSquare = function(self) {
  if (playerTurn === 0 && self.style.backgroundColor === 'green' && gameLock === false) { 
    self.style.backgroundColor = 'red'
    let x = document.createElement('img')
    x.setAttribute('src', 'images/x.svg')
    x.setAttribute('alt', 'an X!')
    self.appendChild(x)
    GameState.moveMade()
    checkWin()
  } else if (playerTurn === 1 && self.style.backgroundColor === 'green' && gameLock === false) {
    self.style.backgroundColor = 'blue'
    let o = document.createElement('img')
    o.setAttribute('src', 'images/o.svg')
    o.setAttribute('alt', 'an O!')
    self.appendChild(o)
    GameState.moveMade()
    checkWin()
  }
  console.log(playerTurn)
}

// Tracking if 3 x's or o's line up or if it is a tie game
const box0 = document.querySelector('.b0')
const box1 = document.querySelector('.b1')
const box2 = document.querySelector('.b2')
const box3 = document.querySelector('.b3')
const box4 = document.querySelector('.b4')
const box5 = document.querySelector('.b5')
const box6 = document.querySelector('.b6')
const box7 = document.querySelector('.b7')
const box8 = document.querySelector('.b8')

const checkWin = function() {
  if (box0.style.backgroundColor === 'blue' && box1.style.backgroundColor === 'blue' && box2.style.backgroundColor === 'blue') {
    winnerText.innerHTML = `${name2} Wins!`
    winnerText.style.backgroundColor = 'blue'
    gameLock = true
  } else if (box3.style.backgroundColor === 'blue' && box4.style.backgroundColor === 'blue' && box5.style.backgroundColor === 'blue') {
    winnerText.innerHTML = `${name2} Wins!`
    winnerText.style.backgroundColor = 'blue'
    gameLock = true
  } else if (box6.style.backgroundColor === 'blue' && box7.style.backgroundColor === 'blue' && box8.style.backgroundColor === 'blue') {
    winnerText.innerHTML = `${name2} Wins!`
    winnerText.style.backgroundColor = 'blue'
    gameLock = true
  } else if (box0.style.backgroundColor === 'blue' && box3.style.backgroundColor === 'blue' && box6.style.backgroundColor === 'blue') {
    winnerText.innerHTML = `${name2} Wins!`
    winnerText.style.backgroundColor = 'blue'
    gameLock = true
  } else if (box1.style.backgroundColor === 'blue' && box4.style.backgroundColor === 'blue' && box7.style.backgroundColor === 'blue') {
    winnerText.innerHTML = `${name2} Wins!`
    winnerText.style.backgroundColor = 'blue'
    gameLock = true
  } else if (box2.style.backgroundColor === 'blue' && box5.style.backgroundColor === 'blue' && box8.style.backgroundColor === 'blue') {
    winnerText.innerHTML = `${name2} Wins!`
    winnerText.style.backgroundColor = 'blue'
    gameLock = true
  } else if (box0.style.backgroundColor === 'blue' && box4.style.backgroundColor === 'blue' && box8.style.backgroundColor === 'blue') {
    winnerText.innerHTML = `${name2} Wins!`
    winnerText.style.backgroundColor = 'blue'
    gameLock = true
  } else if (box2.style.backgroundColor === 'blue' && box4.style.backgroundColor === 'blue' && box6.style.backgroundColor === 'blue') {
    winnerText.innerHTML = `${name2} Wins!`
    winnerText.style.backgroundColor = 'blue'
    gameLock = true
  } else if (box0.style.backgroundColor === 'red' && box1.style.backgroundColor === 'red' && box2.style.backgroundColor === 'red') {
    winnerText.innerHTML = `${name1} Wins!`
    winnerText.style.backgroundColor = 'red'
    gameLock = true
  } else if (box3.style.backgroundColor === 'red' && box4.style.backgroundColor === 'red' && box5.style.backgroundColor === 'red') {
    winnerText.innerHTML = `${name1} Wins!`
    winnerText.style.backgroundColor = 'red'
    gameLock = true
  } else if (box6.style.backgroundColor === 'red' && box7.style.backgroundColor === 'red' && box8.style.backgroundColor === 'red') {
    winnerText.innerHTML = `${name1} Wins!`
    winnerText.style.backgroundColor = 'red'
    gameLock = true
  } else if (box0.style.backgroundColor === 'red' && box3.style.backgroundColor === 'red' && box6.style.backgroundColor === 'red') {
    winnerText.innerHTML = `${name1} Wins!`
    winnerText.style.backgroundColor = 'red'
    gameLock = true
  } else if (box1.style.backgroundColor === 'red' && box4.style.backgroundColor === 'red' && box7.style.backgroundColor === 'red') {
    winnerText.innerHTML = `${name1} Wins!`
    winnerText.style.backgroundColor = 'red'
    gameLock = true
  } else if (box2.style.backgroundColor === 'red' && box5.style.backgroundColor === 'red' && box8.style.backgroundColor === 'red') {
    winnerText.innerHTML = `${name1} Wins!`
    winnerText.style.backgroundColor = 'red'
    gameLock = true
  } else if (box0.style.backgroundColor === 'red' && box4.style.backgroundColor === 'red' && box8.style.backgroundColor === 'red') {
    winnerText.innerHTML = `${name1} Wins!`
    winnerText.style.backgroundColor = 'red'
    gameLock = true
  } else if (box2.style.backgroundColor === 'red' && box4.style.backgroundColor === 'red' && box6.style.backgroundColor === 'red') {
    winnerText.innerHTML = `${name1} Wins!`
    winnerText.style.backgroundColor = 'red'
    gameLock = true
  }
}


// Retarting game
const restart = document.querySelector('#reset')
const square = document.querySelectorAll('.square')
restart.addEventListener('click', function() {
  square.forEach((item) => {
    item.style.backgroundColor = 'green'
    item.innerHTML = ''
  })
  winnerText.innerHTML = ''
  winnerText.style.backgroundColor = 'black'
  gameLock = false
})


const reloadPage = document.querySelector('#new-players')
reloadPage.addEventListener('click', function() {
  location.reload()
})


// class AddPerson {
//   constructor(name) {
//     this.playerName = name
//   }

//   // This is another way to add a function to an objects prototype
//   giveName() {
//     return this.playerName
//   }
// }


// player1 = new AddPerson("Brandon")

// console.log(player1.giveName())

addNames()