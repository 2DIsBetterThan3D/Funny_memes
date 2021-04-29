var fface=[
     new Image();
            img.src = 'https://i.pinimg.com/originals/f4/cd/b0/f4cdb0f288f3f46186a2366cb3fb9b31.jpg',
]   
function newFace() {
  var randomNumber = Math.floor(Math.random() * (fface.length));
  document.getElementById('funnyFace').innerHTML = fface[randomNumber];
}
