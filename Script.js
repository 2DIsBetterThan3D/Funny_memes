var fquote = [
  "'E.... That's all',
  "'Robux' -All roblox n00bs",
  "'PINGAS' -Dr. EGGMAN",
  "'U stinky' -Unknown",
  "'YA like jazz'-Berry BEE Benson",
  "'Do you are is have Robux' -nobbman104g",
  "'ZOINKS'-You know who he is, You know",
  "'Do u r is have stupid'-sdfvajsdfakj, he will not be forgotten...",
  "'hmmm the floor here seams to be made of floor'-Buzzlightyear"
]
function newQuote() {
  var randomNumber = Math.floor(Math.random() * (fquote.length));
  document.getElementById('funnyQuote').innerHTML = fquote[randomNumber];
}
