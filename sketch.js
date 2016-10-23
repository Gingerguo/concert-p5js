var value=255;

function preload() {
  mySound1 = loadSound('AlarmDrum.mp3');
  mySound2 = loadSound('Tick.mp3');
  mySound3 = loadSound('Pan.mp3');
}

function setup() {
  createCanvas(900,900);
  background(0);
  mySound1.setVolume(0.1);

}

function draw() {
  background(0);
  fill(value);
  rect(10, 10, 200, 200);
  rect(210, 210, 200, 200);
}

function touchStarted() {
  mySound1.play();
}

function deviceMoved() {
  mySound2.play();        
}

function deviceShaken() {
  mySound3.play();        
}