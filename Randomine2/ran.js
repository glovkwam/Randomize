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
  let count = 0;
  
  let animating = true;
  function setup() {
     createCanvas(600,600);
    background(200, 50, 7);
    textSize(35);
    text("Potential 3x Crypto Projects", 50, 50);
  }
  function draw() {
    if (animating == true){  
      medTri();
  
    }
    
  }
  function randomizer() {
    animating = false;
     if (dogs[0]){
     background (random(200,225));
     randomIndex = int(random(dogs.length));
     text(`${dogs[randomIndex].name}'s Ticker Symbol is
      ${dogs[randomIndex].color}`,50,50);
     dogs.splice(randomIndex, 1); 
     } else {
     background(random(200, 225));
     text ("not financial advice", 50, 50);
    }
  }
   
  function mousePressed(){
    animting = true;
    setTimeout (randomizer, 2000);
    // if dogs[0]{
    // background (random(200,225));
    // randomIndex = int(random(dogs.length));
    // text(dogs[randomIndex].name, 50, 50);
    // dogs.splice(randomIndex, 1); 
    // } else {
    // background(random(200, 225));
    // text ("nothing left", 50, 50);
    //}
  }
  function medTri(){
    push();
    translate(width / 2, height / 2);
    rotate(count);
    translate(width * -0.5, height * -0.5);
    fill(random(225),random(225),random(225));
    beginShape();
    vertex(width * 0.2, height * 0.4);
    vertex(width * 0.3, height * 0.3);
    vertex(width * 0.7, height * 0.9);
    vertex(width * 0.8, height * 0.2);
    vertex(width * 0.4, height * 0.6);
    endShape(CLOSE);
    pop();
  }