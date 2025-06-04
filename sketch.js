let words = ["You are doing great!", "Every day is a fresh start!"];
let randomWord;
let showWord = false;
let x, y;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background('#bbbbbb');
  // Draw a rectangle to represent the mural (top-left)
  fill(200);
  rect(10, 10, 160, 180);
  // Show text if clicked
  if (showWord) {
    fill('#ffeb00');
    stroke('#ffeb00');
    textSize(15);
    text(randomWord, x, y);
  }
}

function mouseClicked() {
  // Mural area (10,10,160,180)
  if (mouseX > 10 && mouseX < 170 && mouseY > 10 && mouseY < 190) {
    randomWord = "Every day is a fresh start!";
    let tw = textWidth(randomWord);
    let th = textAscent() + textDescent();
    x = random(0, width - tw);
    y = random(th, height - th);
    showWord = true;
  } else {
    showWord = false;
  }
}
