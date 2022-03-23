const home = document.getElementById('sectionHomeContainer')
const game = document.getElementById('game')
const player1 = document.getElementById('inputplayer1')
const player2 = document.getElementById('inputplayer2')
const nameplayer1 = document.getElementById('nameplayer1')
const nameplayer2 = document.getElementById('nameplayer2')
document.getElementById('startButton').addEventListener('click', start)

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

function hidden1() {
  home.style.display = 'none'
  game.style.display = 'flex'
}

//faca amor nao faca guerra
