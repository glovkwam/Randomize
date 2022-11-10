let crypto = [];
let randomIndex;
let animating = false;
let logos = [];
let imageCounter = 0;
let startRandomizerbutton;
let addMoreButton;
let cnv;
let nameInputs = [];
let firstTime = true;
function preload() {
  for (let i = 0; i <= 7; i++) {
    logos[i] = loadImage(`logo${i}.JPG`);
  }
}

function setup() {
  cnv = createCanvas(600, 600);
  cnv.parent("#canvasDiv")
  background(200);
  textSize(32);
  imageMode(CENTER);
  frameRate(8);

  text("Potential 3x Cryptos", 50, 50);
  
  //button = createButton("Randomize");
  startRandomizerbutton = select("#randButton")
  startRandomizerbutton.mousePressed(buttonPressed);
  
  addMoreButton = select("#addMoreButton")
  addMoreButton.mousePressed(addAnotherInput);
  
  for (let i = 0; i < 3; i++){
  nameInputs.push(createInput());
  nameInputs[nameInputs.length -1].parent("#inputFields");
  }
  //console.log(logos);
  // console.log([randomIndex].name);
}

function draw() {
  if (animating == true) {
    clear();
    image(logos[imageCounter], width / 2, height / 1.5);

    if (imageCounter < logos.length - 1) {
      imageCounter++;
      console.log(imageCounter);
    } else {
      imageCounter = 0;
    }
    //ellipse(random(width),random(height), random(50,));
  }
}
function addAnotherInput(){
  nameInputs.push(createInput());
  nameInputs[nameInputs.length -1].parent("#inputFields");
}
function randomizer() {
  animating = false;
  if (crypto[0]) {
    background(random(225), random(225), random(225));
    randomIndex = int(random(crypto.length));


    text(crypto[randomIndex],50,50);

     image(random(logos), width / 2, height / 1.5);

    crypto.splice(randomIndex, 1);
  } else {
    background(random(225), random(225), random(225));
    text("Not Finacial Advice", 50, 50);
  }
}

function buttonPressed() {
  if (firstTime == true){
  for (let i = 0; i < nameInputs.length; i++){
    crypto.push(nameInputs[i].value());
   }
    firstTime = false;
  } 
  animating = true;
  setTimeout(randomizer, 2000);

  //if (crypto[0]){
  //background(random(225),random(225),random(225))
  //randomIndex = int(random(crypto.length));
  //text(crypto[randomIndex].name, 50, 50);
  //crypto.splice(randomIndex, 1);
  //} else {
  //background(random(225),random(225),random(225))
  //text ("Not Finacial Advice", 50, 50);
  //}
}
