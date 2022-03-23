const home = document.querySelector('.sectionHomeContainer')
const game = document.querySelector('.sectionGameContainer')
const player1 = document.querySelector('#inputplayer1')
const player2 = document.querySelector('#inputplayer2')
const nameplayer1 = document.querySelector('#nameplayer1')
const nameplayer2 = document.querySelector('#nameplayer2')
const results = document.querySelector('.resultsContainer')
let points_player1 = document.getElementById('points_player1')
let points_player2 = document.getElementById('points_player2')
let round = document.getElementById('round')
var wonTheRound = document.getElementById('won_the_round')
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

  const choice = document.getElementById('choices').value

  if (choice === 'Odds') {
    if (isEvens) {
      round.innerHTML = Number(round.innerText) + 1
      points_player1.innerHTML = Number(points_player1.innerText) + 1
      wonTheRound.innerText = `${player1.value} Won The Round`
    } else if (!isEvens) {
      round.innerHTML = Number(round.innerText) + 1
      points_player2.innerHTML = Number(points_player2.innerText) + 1
      wonTheRound.innerText = `${player2.value} Won The Round`
    } else {
      console.log('error')
    }
  }

  if (choice === 'Evens') {
    if (isEvens) {
      round.innerHTML = Number(round.innerText) + 1
      points_player1.innerHTML = Number(points_player1.innerText) + 1
      wonTheRound.innerText = `${player1.value} Won The Round`
    } else if (!isEvens) {
      round.innerHTML = Number(round.innerText) + 1
      points_player2.innerHTML = Number(points_player2.innerText) + 1
      wonTheRound.innerText = `${player2.value} Won The Round`
    } else {
      console.log('error')
    }
  }

  if (points_player1.textContent == 3) {
    localStorage.setItem('championsName', nameplayer1.textContent)
    location.href = '/html/champions.html'
  } else if (points_player2.textContent == 3) {
    localStorage.setItem('championsName', nameplayer2.textContent)
    location.href = '/html/champions.html'
  }
}
