let namechampion = document.querySelector('#champion')

if (localStorage.getItem('championsName')) {
  namechampion.innerText = localStorage.getItem('championsName')
} else {
  location.href = '/html/'
}
