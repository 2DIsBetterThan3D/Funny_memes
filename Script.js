var fname = [
  'stinky',
  'jon',
  'he',
  'noob'
]
function newName() {
  var randomNumber = Math.floor(Math.random() * (fname.length));
  document.getElementById('funnyName').innerHTML = fname[randomNumber];
}
