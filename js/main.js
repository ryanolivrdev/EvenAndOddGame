const home = document.querySelector('.sectionHomeContainer')
const game = document.querySelector('.sectionGameContainer')
const player1 = document.querySelector('#inputplayer1')
const player2 = document.querySelector('#inputplayer2')
const nameplayer1 = document.querySelector('#nameplayer1')
const nameplayer2 = document.querySelector('#nameplayer2')
const results = document.querySelector('.resultsContainer')
let points_player1 = document.getElementById('points_player1')
let points_player2 = document.getElementById('points_player1')
let round = document.getElementById('round')
document.querySelector('#startButton').addEventListener('click', start)
document.querySelector('.playGame').addEventListener('click', rounds)

function start() {
  if (player1.value == '' || player2.value == '') {
    alert('Write your name!')
    return
  } else {
    home.style.display = 'none'
    game.style.display = 'flex'
    nameplayer1.innerText = player1.value
    nameplayer2.innerText = player2.value
  }
}

function rounds() {
  results.style.display = 'flex'

  const playerChoice = Math.floor(Math.random() * 10)
  const cpuChoice = Math.floor(Math.random() * 10)

  const isEvens = (playerChoice + cpuChoice) % 2 == 0

  const choice = document.getElementById('test').value

  // if (isEvens) {
  //   if (choice === 'Evens') console.log('Win 1')
  //   else console.log('Win 2')
  // } else {
  //   if (choice === 'Odds') console.log('Win 1')
  //   else console.log('Win 2')
  // }

  if (choice === 'Evens') {
    if (isEvens === true) {
      round.innerHTML = Number(round.innerText) + 1
      points_player1.innerHTML = Number(points_player1.innerText) + 1
      console.log(points_player1)
    } else if (isEvens === false) {
      console.log(isEvens)
    } else {
      console.log('error')
    }

    // console.log(isEvens) Number(points_player1.innerText)
  }
  if (choice === 'Odds') {
    if (isEvens === false) {
      console.log(isEvens)
    } else if (isEvens === true) {
      console.log(isEvens)
    } else {
      console.log('error')
    }
  }
}
