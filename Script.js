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
  "'ONIONS'-SHREK",
  "'ITS NO USE'-Silver the hedgehog(If you like sonic you will get it.)"
  
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
randomMeme[7] = "https://i.pinimg.com/originals/3f/c0/18/3fc0180052b6c25be5f98284535716e0.jpg";
randomMeme[8] = "https://i.pinimg.com/564x/e5/c5/30/e5c530bf8a437062ec4a9ac340c3c6fc.jpg";
randomMeme[10] = "https://lh3.googleusercontent.com/proxy/xc6_0qdUsV51SAT5JKOL3TN_bdd9nj3VyDU9lD5z6wbdKIlR7nNaRwSgBYiIN867DCquVWJMvaTQ-LBT0VjC9hMGNK1z7d-1Rlb_O1FA9iX1CqWcOcsqchVIvA=w1200-h630-p-k-no-nu";
randomMeme[11] = "http://images3.memedroid.com/images/UPLOADED63/5ec21e16d0e00.jpeg";
randomMeme[12] = "https://th.bing.com/th/id/R861a327fa9445e15b1512bc696446010?rik=3scS0%2bjRsxhlwg&pid=ImgRaw";
randomMeme[13] = "https://th.bing.com/th/id/R24ea78dd7bd0d0eb245421abebe40f72?rik=FIN3VNE6eCmsvQ&pid=ImgRaw";

var number = Math.floor(Math.random()*randomMeme.length);   
return document.getElementById("randomMeme").innerHTML = '<img src="'+randomMeme[number]+'" width="500px" height="350px" />';  
}  

