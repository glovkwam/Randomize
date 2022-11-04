let dogs = [{
  name: "Api3",
  color: "Blockchain1"
}, {
  name: "Quant",
  color: "Blockchain2"
}, {
  name: "RSR",
  color: "Blockchain3"  
},{ 
  name: "CRO",
  color: "Blockhain4" 
},{
  name: "Jasmy",
  color: "Blockhain5"
},{
  name:"Kadena",
  color: "Blockchain6"
},{
  name:"Saitama",
  color:"Blockchain7"
}];
let randomIndex;

function setup() {
   createCanvas(600,600);
  background(200);
  textSize(35);
  text("click to Randomize", 50, 50);

}
function draw() {
  
}
function mousePressed(){

if (dogs [0]){
background (random(200, 255));
randomIndex = int( random(dogs.length));
text(dogs [randomIndex].name, 50, 50);
dogs.splice(randomIndex, 1);
} else {
  background (random(200, 255));

  text("Subscribe to CryptoKwam", 50, 50);
}
}
