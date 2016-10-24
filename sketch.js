var key1;
var key2;
var key3;

var dif1;
var dif2;
var dif3;

var isOverKey1;
var isOverKey2;
var isOverKey3;

var val = 0;

function preload() {
  flute1 = loadSound('assets/flute/flute_01.mp3');
  flute2 = loadSound('assets/flute/flute_02.mp3');
  flute3 = loadSound('assets/flute/flute_03.mp3');

//   tabla1 = loadSound('assets/tabla/tablaloops_01.mp3');
//   tabla2 = loadSound('assets/tabla/tablaloops_02.mp3');

//   ukulele1 = loadSound('assets/ukulele/baroza_01.mp3');
}

function setup() {
  createCanvas(600,960);
  background(val);
}

function draw() {
  background(0);
  
  textSize(32);
  fill(255); 
  textAlign(CENTER);
  text("let's play flute", width/2, 50);
  fill(255);
  
  key1 = ellipse(340, 330, 200, 200);  // Draw rect at new 0,0
  key2 = ellipse(340, 530, 200, 200); 
  key3 = ellipse(340, 730, 200, 200); 

  
  dif1 = dist(340, 330, mouseX, mouseY);
  dif2 = dist(340, 530, mouseX, mouseY);
  dif3 = dist(340, 730, mouseX, mouseY);
  
  if(dif1<100){
      isOverKey1 = true;
    } else {
      isOverKey1 = false;
    }
  
   if(dif2<100){
      isOverKey2 = true;
    } else {
      isOverKey2 = false;
    }
  
   if(dif3<100){
      isOverKey3 = true;
    } else {
      isOverKey3 = false;
    }
 }

function mousePressed() {
  if(isOverKey1 == true){
     flute1.play();
     console.log("key1 clicked");
  }else if(isOverKey2 == true){
     flute2.play();
     console.log("key2 clicked");
  }else if(isOverKey3 == true){
     flute3.play();
     console.log("key3 clicked");
  }else{
            
  }
}
