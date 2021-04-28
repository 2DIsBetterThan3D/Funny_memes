var fquote = [
  'E.... Thats all',
  'Robux -All roblox n00bs',
  'PINGAS',
  'U stinky'
]
function newQuote() {
  var randomNumber = Math.floor(Math.random() * (fquote.length));
  document.getElementById('funnyQuote').innerHTML = fquote[randomNumber];
}
