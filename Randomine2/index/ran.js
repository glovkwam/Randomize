let dogs = [{
  name: "Api3",
  color: "$Api3"
}, {
  name: "Quant",
  color: "$QNT"
}, {
  name: "Shina Inu",
  color: "$shib"  
},{ 
  name: "Crypto.com",
  color: "$CRO" 
},{
  name: "JasmyCoin",
  color: "$Jasmy"
},{
  name:"Kadena",
  color: "$KDA"
},{
  name:"Saitama",
  color:"$Saitama"
}];
let randomIndex;
let animating = true;
let logos = [];
let imageCounter = 0;
function preload(){
  
  for (let i = 0; i <= 7; i++){
    logos[i] = loadImage (`logo${i}.JPG`)
  }
}
function setup() {
   createCanvas(600,600);
  background(200, 50, 7);
  textSize(35);
  imageMode(CENTER);
  frameRate(4);
  text("Potential 3x Crypto Projects", 50, 50);
  console.log(logos);
}
function draw() {
  if (animating == true){  
    image(logos[imageCounter], width/2, height/1.5);
    if (imageCounter < logos.length-1){
      imageCounter++;
      console.log(imageCounter);
    }
    else{

   imageCounter = 0;
    }
  
}
  function mousePressed(){
  animating = true;
  setTimeout (randomizer, 2000);
}
  function changeBG() {
  let val = random(255);
  background(val);
}

function randomizer() {
  animating = false;
   if (dogs[0]){
   background (random(200,225));
   randomIndex = int(random(dogs.length));
     text(`${dogs[randomIndex].name}'s Ticker Symbol is
    ${dogs[randomIndex].color}`,50,50);
     image(random(logos), width/4, height/2);
     
   dogs.splice(randomIndex, 1); 
   } else {
   background(random(200, 225));
   text ("not financial advice", 50, 50);
  }
}
}