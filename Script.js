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
  "'Dont cheat on your wife, cheat on your husband'-albert(flamingo AKA.Mr.flimflam)",
  "'ONIONS'-SHREK"
  
]
function newQuote() {
  var randomNumber = Math.floor(Math.random() * (fquote.length));
  document.getElementById('funnyQuote').innerHTML = fquote[randomNumber];
}
function newMeme() {  
var randomMeme = new Array();  
  

randomMeme[0] = "https://images.pexels.com/photos/858115/pexels-photo-858115.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500";  
randomMeme[1] = "http://www.petsworld.in/blog/wp-content/uploads/2014/09/running-cute-puppies.jpg";  
randomMeme[2] = "https://images.pexels.com/photos/142497/pexels-photo-142497.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500";  
randomMeme[3] = "https://images.unsplash.com/photo-1543877087-ebf71fde2be1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60";  
randomMeme[4] = "https://wi.wallpapertip.com/wsimgs/156-1565522_puppies-desktop-wallpaper-desktop-background-puppies.jpg";  
randomMeme[5] = "https://images.unsplash.com/photo-1501265976582-c1e1b0bbaf63?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60";  
  

var number = Math.floor(Math.random()*randomImage.length);   
return document.getElementById("randomMeme").innerHTML = '<img src="'+randomImage[number]+'" />';  
}  

