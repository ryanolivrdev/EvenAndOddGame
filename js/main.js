const home = document.querySelector('.sectionHomeContainer')
const game = document.querySelector('.sectionGameContainer')
const player1 = document.querySelector('#inputplayer1')
const player2 = document.querySelector('#inputplayer2')
const nameplayer1 = document.querySelector('#nameplayer1')
const nameplayer2 = document.querySelector('#nameplayer2')
const choicePlayer1 = document.querySelector('#choicePlayer1')
document.querySelector('#startButton').addEventListener('click', start)

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
