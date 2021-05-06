var fquote = [
  "'E.... That's all'",
  "'Robux' -All roblox n00bs",
  "'PINGAS' -Dr. EGGMAN",
  "'U stinky' -Unknown",
  "'YA like jazz'-Berry BEE Benson",
  "'Do you are is have Robux' -nobbman104g",
  "'ZOINKS'-You know who he is, You know",
  "'Do u r is have stupid'-sdfvajsdfakj, he will not be forgotten...",
  "'hmmm the floor here seams to be made of floor'-Buzzlightyear",
  "'What An Incredible Smell You've Discovered!' -Han Solo",
  "'arrrrgr ahhurha hwaaaagr haeeaaaaaaa' -Cewbaca",
  "'HELLO There!'-obi-wan",
  "'general kenobi, you are a bold one'-grievous(did u get this after hello there? did you? its funnier if you did.)",
  "'What if the dryer has been stealing our cloths this whole time but we only notice the socks because they come in pairs?' -UNKNOWN",
  "'what if the princes whats to be with Bowser but Mario kidnaps her?' -UNKNOWN",
  "'Dont cheat on your wife, cheat on your husband'-albert(flamingo AKA.Mr.flimflam)"
  
]
function newQuote() {
  var randomNumber = Math.floor(Math.random() * (fquote.length));
  document.getElementById('funnyQuote').innerHTML = fquote[randomNumber];
}
