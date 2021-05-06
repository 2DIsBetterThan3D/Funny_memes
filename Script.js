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
  

randomMeme[0] = "https://img.buzzfeed.com/buzzfeed-static/static/2019-04/25/21/campaign_images/buzzfeed-prod-web-02/the-showing-my-mom-a-funny-meme-meme-is-so-pure-a-2-6299-1556240861-0_dblbig.jpg?resize=1200:*";  
randomMeme[1] = "https://static.thehoneycombers.com/wp-content/uploads/sites/4/2020/03/Best-funny-Coronavirus-memes-2020-Honeycombers-Bali-221.jpg";  
randomMeme[2] = "https://winkgo.com/wp-content/uploads/2019/05/funny-memes-best-01-720x527.jpg";  
randomMeme[3] = "https://www.albawaba.com/sites/default/files/styles/d08_standard/public/2021-01/ErKWvu5W4AE3sSt_0.jpg?h=5e2c3b87&itok=6x3TLl8U&mrf-size=m";  
randomMeme[4] = "http://static.demilked.com/wp-content/uploads/2019/10/5da8209a0da15-8-5cac5c63d855a__700.jpg";  
randomMeme[5] = "https://bestlifeonline.com/wp-content/uploads/2020/07/Hello-This-Is-Dog.jpg"; 
randomMeme[6] = "https://i1.wp.com/memesrush.com/wp-content/uploads/2019/02/funny-meme-picture-1549355360.jpg?fit=662%2C857&ssl=1";
  

var number = Math.floor(Math.random()*randomMeme.length);   
return document.getElementById("randomMeme").innerHTML = '<img src="'+randomMeme[number]+'" width="500px" height="350px" />';  
}  

