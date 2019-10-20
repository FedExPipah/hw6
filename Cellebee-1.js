var hit;
let llo;


function preload() {
  cellebee1 = loadImage('HA.png'); // Load the image
  cellebee3 = loadImage('LLO.png');
  cellebee2 = loadImage('hit.png');
  soundFormats("ogg");
  hit = loadSound("ahhhh.ogg");
}

function setup() {
  createCanvas(720, 600);
  var cellebee1= 10;
var cellebee1Speed =1;
  hello = createAudio('Hello!.wav');
  intro = createAudio('My name.m4a');
  hello.autoplay(true);
}

function draw() {
  background(250);
  
  if (hello.play) {
    image(cellebee1, 130, height / 8, cellebee1.width / 4, cellebee1.height / 4);
    textSize(25);
    stroke(0);
    text('Hello!', 250, 100);

  }

  //image(cellebee3, 400, height / 8, cellebee3.width / 4, cellebee3.height / 4);
 // intro.play();
  //   }

  if (mouseIsPressed) {
    background(255);
    image(cellebee2, 200,height / 8, cellebee2.width / 4, cellebee2.height / 4);
    hit.play();
  }
}
