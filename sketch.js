// Get a specific text to pop up - "Every day is a fresh start!"

let words = ["You are doing great!", "You are good enough!", "Good Luck on everything!!", "Take a break!", "You can do this!", "Every day is a fresh start!", "You are full of potential!", "Keep pushing forward!", "Your efforts are paying off!", "Stay positive!", "You are worthy of happiness!", "You grow stronger every day!", "Your dreams are within reach!", "You are making progress!", "Trust the journey!", "You have the power to change!", "Be proud of how far you’ve come!", "You inspire those around you!", "Your kindness matters!", "You are capable of amazing things!"];
let randomWord;
let showWord = false;
let imageX = 10, imageY = 10, imageWidth = 160, imageHeight = 180;
let image1X = 180, image1Y = 10, image1Width = 160, image1Height = 180;
let image2X = 10, image2Y = 210, image2Width = 160, image2Height = 180;
let image3X = 180, image3Y = 210, image3Width = 160, image3Height = 180;
let image4X = 350, image4Y = 300, image4Width = 50, image4Height = 100;
let x, y;
let input;
let man, walking, mural, ladder, speaker, despacito, jewels, hunger, wundersmith, star;

// Arrays to store different circles and stars with different properties
let circles = [];
let stars = [];

function preload() {
  speaker = loadImage('Speaker.jpg');
  despacito = loadSound('Despacito.mp3');
  jewels = loadSound('Family Jewels.mp3');
  hunger = loadSound('Catching Fire.mp3');
  wundersmith = loadSound('Wundersmith.mp3');
  man = loadImage('Man.png');
  walking = loadImage('Walking.png');
  mural = loadImage('Mural.png');
  ladder = loadImage('Ladder.png');
  star = loadImage('Star.png');
}

function setup() {
  createCanvas(400, 400);
  background(255);

  // Create an Audio input
  input = new p5.AudioIn();
  input.start();
}

function draw() {
  background('#bbbbbb');
  image(speaker, image4X, image4Y, image4Width, image4Height);
  image(mural, imageX, imageY, imageWidth, imageHeight);
  image(man, image1X, image1Y, image1Width, image1Height);
  image(walking, image2X, image2Y, image2Width, image2Height);
  image(ladder, image3X, image3Y, image3Width, image3Height);

  if (showWord) {
    fill('#ffeb00');
    stroke('#ffeb00');
    textSize(15);
    text(randomWord, x, y);
  }

  // Draw and filter circles (keep only those < 2.5 seconds old)
  circles = circles.filter(c => {
    if (millis() - c.born < 2500) {
      stroke(0);
      fill(100, 100);
      ellipse(c.x, c.y, c.d, c.d);
      return true;
    }
    return false;
  });

  // Draw and filter stars (keep only those < 2.5 seconds old)
  stars = stars.filter(s => {
    if (millis() - s.born < 2500) {
      image(star, s.x, s.y, s.w, s.h);
      return true;
    }
    return false;
  });

  // Get the overall volume (between 0 and 1.0)
  let volume = input.getLevel();
  let threshold = 0.03;

  // If the volume > threshold, add a new circle and star to the arrays
  if (volume > threshold) {
    let diameter = volume * 300;
    let radius = diameter / 2;
    let x1 = random(radius, width - 20 - radius);
    let y1 = random(radius, height - radius);
    circles.push({ x: x1, y: y1, d: diameter, born: millis() });

    let starW = volume * 370;
    let starH = volume * 370;
    let x2 = random(0, width - 20 - starW);
    let y2 = random(0, height - starH);
    stars.push({ x: x2, y: y2, w: starW, h: starH, born: millis() });
  }

  // Map volume and threshold to the top half of the canvas
  let halfHeight = height / 2;
  let y3 = map(volume, 0, 1, halfHeight, 0);
  let ythreshold = map(threshold, 0, 1, halfHeight, 0);

  stroke(0);
  fill(175);
  rect(width - 20, 0, 20, halfHeight);
  fill(0);
  rect(width - 20, y3, 20, halfHeight - y3);
  stroke(0);
  line(width - 20, ythreshold, width - 1, ythreshold);
}

function mouseClicked() {
  // Handle speaker image click for audio playback
  if (mouseX > image4X && mouseX < image4X + image4Width &&
      mouseY > image4Y && mouseY < image4Y + image4Height) {
    if (despacito.isPlaying()) {
      despacito.pause();
      jewels.play();
    } else if (jewels.isPlaying()) {
      jewels.pause();
      hunger.play();
    } else if (hunger.isPlaying()) {
      hunger.pause();
      wundersmith.play();
    } else if (wundersmith.isPlaying()) {
      wundersmith.pause();
    } else {
      despacito.play();
    }
  }

  // Handle image clicks to show specific text
  if (mouseX > imageX && mouseX < imageX + imageWidth &&
      mouseY > imageY && mouseY < imageY + imageHeight) {
    randomWord = "Every day is a fresh start!";
    let tw = textWidth(randomWord);
    let th = textAscent() + textDescent();
    x = random(0, width - tw);
    y = random(th, height - th);
    showWord = true;
  } else if (mouseX > image1X && mouseX < image1X + image1Width &&
             mouseY > image1Y && mouseY < image1Y + image1Height) {
    randomWord = "Every day is a fresh start!";
    let tw = textWidth(randomWord);
    let th = textAscent() + textDescent();
    x = random(0, width - tw);
    y = random(th, height - th);
    showWord = true;
  } else if (mouseX > image2X && mouseX < image2X + image2Width &&
             mouseY > image2Y && mouseY < image2Y + image2Height) {
    randomWord = "Every day is a fresh start!";
    let tw = textWidth(randomWord);
    let th = textAscent() + textDescent();
    x = random(0, width - tw);
    y = random(th, height - th);
    showWord = true;
  } else if (mouseX > image3X && mouseX < image3X + image3Width &&
             mouseY > image3Y && mouseY < image3Y + image3Height) {
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
