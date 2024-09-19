let tick = 0,
  stars = [],
  containerRain,
  snowContainer,
  bg_full,
  table,
  main_monitor,
  second_monitor,
  people,
  light_dog,
  pc_case,
  air_conditioner,
  window_line,
  wall_mid,
  wall_mid_active,
  wall_right,
  wall_right_active,
  cloud,
  dog,
  big_dog,
  city,
  small_dog,
  dog_tail,
  brown_build,
  brown_build_active,
  purple_build,
  purple_build_active,
  train_line,
  train,
  fan,
  dot_green,
  dot_yellow,
  dot_black,
  clock,
  dot_clock,
  dot_music,
  btn_play,
  btn_stop,
  coffee_cup,
  music,
  disk,
  radio,
  radio_speaker,
  drops = [];

let = clouds = [];

let ratio = window.innerWidth / window.innerHeight

let width = window.innerWidth

let height = width / 1.77;

console.log({ width, height, ratio });

let changeWallMid = true;
let changeWallRight = true;
let changeBrownBuild = true;
let changePurpleBuild = true;
let currentDot = 0;
let intervalDot = 30;
let scaleFactorDog = 1;
let zoomSpeedDog = 2;
let changeDotClock = true;

let scaleFactorRadio = 1;
let zoomSpeedRadio = 7;
let scaleFactorRadio2 = 1;
let zoomSpeedRadio2 = 6;

let arrDotPcCase = [false, false, false];


let angle = 0;
let angleDisk = 0;
let weather = 3;

let opacity = 225;

let trainX = -421;

let dotMusicX = width * 0.35;

let amplitude = 50;
let frequency = 15;
let waveSpeed = 6;
let phase = 0;
let waveX = width * 0.824;
let waveY = height * 0.409;
let waveWidth = width * 0.05;
let waveHeight = height * 0.006;


function setup () {
  createCanvas(width, height);
  angleMode(DEGREES);

  stars.push(new Star(width * 0.026, height * 0.185, 360, width * 0.005, height * 0.009));
  stars.push(new Star(width * 0.33, height * 0.138, 360, width * 0.005, height * 0.009));
  stars.push(new Star(width * 0.15625, height * 0.1, 360, width * 0.005, height * 0.009));
  stars.push(new Star(width * 0.0625, height * 0.13, 300, width * 0.005, height * 0.009));
  stars.push(new Star(width * 0.119, height * 0.16, 200, width * 0.005, height * 0.009));
  stars.push(new Star(width * 0.18, height * 0.27, 200, width * 0.005, height * 0.009));
  stars.push(new Star(width * 0.15625, height * 0.21, 200, width * 0.005, height * 0.009));
  stars.push(new Star(width * 0.234375, height * 0.23, 200, width * 0.005, height * 0.009));
  stars.push(new Star(width * 0.3, height * 0.18, 200, width * 0.005, height * 0.009));
  stars.push(new Star(width * 0.276, height * 0.1, 200, width * 0.005, height * 0.009));
}

function preload () {
  bg_full = loadImage("./images/bg-full.png");
  window_line = loadImage("./images/window-line.png");
  air_conditioner = loadImage("./images/air-conditioner.png");
  people = loadImage("./images/people.png");
  table = loadImage("./images/table.png");
  main_monitor = loadImage("./images/main-monitor.png");
  pc_case = loadImage("./images/case-pc.png");
  cloud = loadImage("./images/cloud.png");
  wall_mid = loadImage("./images/wall-mid-up.png");
  wall_mid_active = loadImage("./images/wall-mid-down.png");
  wall_right = loadImage("./images/wall-right-up.png");
  wall_right_active = loadImage("./images/wall-right-down.png");
  brown_build = loadImage("./images/brown-build-up.png");
  brown_build_active = loadImage("./images/brown-build-down.png");
  purple_build = loadImage("./images/purple-build-up.png");
  purple_build_active = loadImage("./images/purple-build-down.png");
  dog = loadImage("./images/dog.png");
  big_dog = loadImage("./images/big-dog.png");
  dog_tail = loadImage("./images/dog-tail.png");
  small_dog = loadImage("./images/small-dog.png");
  light_dog = loadImage("./images/light-dog.png");
  city = loadImage("./images/city.png");
  train_line = loadImage("./images/train-line.png");
  train = loadImage("./images/train.png");
  fan = loadImage("./images/fan.png");
  second_monitor = loadImage("./images/screen-2.png");
  dot_green = loadImage("./images/dot-green.png");
  dot_yellow = loadImage("./images/dot-yellow.png");
  dot_black = loadImage("./images/dot-black.png");
  clock = loadImage("./images/clock.png");
  dot_clock = loadImage("./images/dot-clock.png");
  dot_music = loadImage("./images/dot-music.png");
  btn_play = loadImage("./images/btn-play.png");
  btn_stop = loadImage("./images/btn-stop.png");
  radio = loadImage("./images/radio.png");
  radio_speaker = loadImage("./images/radio-speaker.png")
  disk = loadImage("./images/disk.png")
  coffee_cup = loadImage("./images/coffee-cup.png")
  currentPlay = btn_stop;
  music = loadSound("/music.mp3", function () { });

  containerRain = new ContainerRain(0, height * 0.074, width * 0.5, height * 0.65);

  snowContainer = new SnowContainer(0, height * 0.074, width * 0.5, height * 0.65);


  clouds.push(new Cloud(width * 0.1, height * 0.26, width * 0.134, height * 0.07, false));

  clouds.push(new Cloud(width * 0.2, height * 0.15, width * 0.083, height * 0.046, false));

  clouds.push(new Cloud(-(width * 0.3), height * 0.29, width * 0.134375, height * 0.074, true));

  for (let i = 0; i <= 40; i++) {
    containerRain.addDrop(new Drop(containerRain));
  }
}


function draw () {
  background('#000a23');

  if (weather === 3) {
    push()
    for (let cloud of clouds) {
      cloud.update();
      cloud.display();
    }
    pop()

    push();
    for (let star of stars) {
      star.update();
      star.display();
    }
    pop()
  }


  push()
  if (frameCount % 120 == 0) {
    changeBrownBuild = !changeBrownBuild;
  }
  image(changeBrownBuild ? brown_build : brown_build_active, width * 0.054, height * 0.28, width * 0.06, height * 0.25);
  pop()



  image(city, 0, height * 0.36, width * 0.384, height * 0.25);

  push()
  image(train, trainX, height * 0.535, width * 0.2, height * 0.05)
  trainX += 3;

  if (trainX >= width * 0.3) {
    trainX = -420;
  }
  pop()

  image(train_line, 0, height * 0.51, width * 0.26, height * 0.225)

  push()
  if (frameCount % 110 == 0) {
    changePurpleBuild = !changePurpleBuild;
  }
  image(changePurpleBuild ? purple_build : purple_build_active, width * 0.2, height * 0.51, width * 0.19, height * 0.23);
  pop()

  image(light_dog, width * 0.16, height * 0.63, width * 0.07, height * 0.11);

  // Weather
  push()
  if (weather === 1) {
    containerRain.updateDrops();
  }
  if (weather === 2) {
    snowContainer.update();
    snowContainer.display();
  }
  pop()

  image(bg_full, 0, 0, width, height);
  image(air_conditioner, width * 0.535, 0, width * 0.46, height * 0.535);
  image(clock, width * 0.72, height * 0.2, width * 0.08, height * 0.068);

  image(radio, width * 0.8, height * 0.369, width * 0.113, height * 0.115);
  if (currentPlay === btn_play) {
    push()
    scaleFactorRadio = 1 + sin(frameCount * zoomSpeedRadio) * 0.13;
    let imgWidthRadio = width * 0.026 * scaleFactorRadio;
    let imgHeightRadio = height * 0.0472 * scaleFactorRadio;
    imageMode(CENTER);
    image(radio_speaker, width * 0.874, height * 0.449, imgWidthRadio, imgHeightRadio);
    pop()

    push()
    scaleFactorRadio2 = 1 + sin(frameCount * zoomSpeedRadio2) * 0.13;
    let imgWidthRadio2 = width * 0.026 * scaleFactorRadio2;
    let imgHeightRadio2 = height * 0.0472 * scaleFactorRadio2;
    imageMode(CENTER);
    image(radio_speaker, width * 0.822, height * 0.449, imgWidthRadio2, imgHeightRadio2);
    pop()

    push()
    stroke(255);
    strokeWeight(2);
    noFill();
    beginShape();
    for (let x = 0; x < waveWidth; x++) {
      let y = waveY + sin(x * frequency + phase) * waveHeight;
      vertex(waveX + x, y);
    }
    endShape();
    phase += waveSpeed;
    pop()
  }

  if (currentPlay === btn_stop) {
    image(radio_speaker, width * 0.809, height * 0.425, width * 0.026, height * 0.0472);
    image(radio_speaker, width * 0.861, height * 0.425, width * 0.026, height * 0.0472);
  }

  push()
  if (frameCount % 30 == 0) {
    changeDotClock = !changeDotClock;
  }
  if (changeDotClock) {
    opacity = 225;
  } else {
    opacity = 0;
  }

  tint(255, opacity);
  image(dot_clock, width * 0.755, height * 0.229, width * 0.005, height * 0.018);
  pop()

  push()
  if (frameCount % 80 == 0) {
    changeWallMid = !changeWallMid;
  }
  image(changeWallMid ? wall_mid : wall_mid_active, width * 0.415, height * 0.125, width * 0.19, height * 0.21);
  pop()

  push()
  if (frameCount % 100 == 0) {
    changeWallRight = !changeWallRight;
  }
  image(changeWallRight ? wall_right : wall_right_active, width * 0.865, height * 0.548, width * 0.108, height * 0.24);
  pop()

  image(window_line, 0, height * 0.046, width * 0.4, height * 0.71);

  image(dog_tail, width * 0.265, height * 0.743, width * 0.014, height * 0.0259);

  push()
  scaleFactorDog = 1 + sin(frameCount * zoomSpeedDog) * 0.09;

  let imgWidth = width * 0.048 * scaleFactorDog;

  let imgHeight = height * 0.069 * scaleFactorDog;
  imageMode(CENTER);
  image(small_dog, width * 0.252, height * 0.775, imgWidth, imgHeight);
  pop()

  image(dog, width * 0.17, height * 0.74, width * 0.125, height * 0.083);

  image(table, width * 0.089, height * 0.759, width * 0.9, height * 0.24);

  image(pc_case, width * 0.684, height * 0.375, width * 0.16, height * 0.45);
  image(second_monitor, width * 0.32, height * 0.34, width * 0.22, height * 0.485);
  image(main_monitor, width * 0.472, height * 0.496, width * 0.22, height * 0.33);
  image(coffee_cup, width * 0.398, height * 0.757, width * 0.0390625, height * 0.0694);

  push()
  imageMode(CENTER);
  translate(width * 0.395, height * 0.56);
  rotate(angleDisk);
  image(disk, 0, 0, width * 0.099, height * 0.177);
  if (currentPlay === btn_play) {
    angleDisk += 1;
  }
  if (angleDisk >= 360) {
    angleDisk = 0;
  }
  pop()

  push()

  image(currentPlay, width * 0.38, height * 0.695, width * 0.029, height * 0.05);
  image(dot_music, dotMusicX, height * 0.667, width * 0.0083, height * 0.0129)

  if (currentPlay === btn_play) {
    dotMusicX += 0.3;
  }


  if (dotMusicX >= width * 0.433) {
    dotMusicX = width * 0.35;
  }
  pop()

  push()

  if (frameCount % intervalDot == 0) {
    if (currentDot >= 3) {
      currentDot = -1;
      for (let i = 0; i < arrDotPcCase.length; i++) {
        arrDotPcCase[i] = false;
      }
    }
    currentDot = (currentDot % 3) + 1;

    arrDotPcCase[currentDot - 1] = true;

  }

  image(arrDotPcCase[0] ? dot_green : dot_black, width * 0.717, height * 0.577, width * 0.0083, height * 0.0148);
  image(arrDotPcCase[1] ? dot_yellow : dot_black, width * 0.728, height * 0.577, width * 0.0083, height * 0.0148);
  image(arrDotPcCase[2] ? dot_yellow : dot_black, width * 0.739, height * 0.577, width * 0.0083, height * 0.0148);

  pop()

  push()
  imageMode(CENTER);
  translate(width * 0.816, height * 0.628);
  rotate(angle);
  image(fan, 0, 0, width * 0.03697916666666667, height * 0.06574074074074074);
  angle += 2;
  if (angle >= 360) {
    angle = 0;
  }
  pop()

  push()
  imageMode(CENTER);
  translate(width * 0.816, height * 0.699);
  rotate(angle);
  image(fan, 0, 0, width * 0.03697916666666667, height * 0.06574074074074074);
  angle += 2;
  if (angle >= 360) {
    angle = 0;
  }
  pop()

  push()
  imageMode(CENTER);
  translate(width * 0.816, height * 0.77);
  rotate(angle);
  image(fan, 0, 0, width * 0.03697916666666667, height * 0.06574074074074074);
  angle += 2;
  if (angle >= 360) {
    angle = 0;
  }
  pop()

  image(people, width * 0.43, height * 0.61, width * 0.18, height * 0.39);

}

class SnowContainer {
  constructor(x, y, w, h) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.snowflakes = [];
  }

  update () {
    let t = frameCount / 60;

    if (frameCount % 5 === 0) {
      this.snowflakes.push(new Snowflake(this.x, this.y, this.w, this.h));
    }

    for (let flake of this.snowflakes) {
      flake.update(t);
    }
  }

  display () {
    push();
    translate(this.x, this.y);
    for (let flake of this.snowflakes) {
      flake.display();
    }
    pop();
  }
}

class Snowflake {
  constructor(x, y, w, h) {
    this.posX = random(w);
    this.posY = random(-50, 0);
    this.size = random(4, 7);
    this.speed = random(1, 3);
    this.angle = random(TWO_PI);
    this.dir = random(0.01, 0.05);
    this.w = w;
    this.h = h;
  }

  update () {
    this.angle += this.dir;
    this.posY += this.speed;
    this.posX += sin(this.angle);

    if (this.posY > this.h) {
      this.posY = random(-50, 0);
      this.posX = random(this.w);
    }
  }


  display () {
    ellipse(this.posX, this.posY, this.size);
  }
}

function keyPressed () {
  if (key === 'W' || key === 'w') {
    if (music.isPlaying()) {
      currentPlay = btn_stop
      music.stop();
    } else {
      currentPlay = btn_play
      music.loop();
    }
  }

  if (key === 'S' || key === 's') {

    weather = 2;
  }

  if (key === 'D' || key === 'd') {

    weather = 1;
  }

  if (key === 'A' || key === 'a') {

    weather = 3
  }
}

class Drop {
  constructor(container) {
    this.pos = createVector(random(container.x, container.x + container.width), container.y); // Random x within container
    this.vel = createVector(0, random(8, 11)); // Velocity
    this.length = random(10, 15); // Length of the drop
    this.strength = random(255); // Opacity strength
    this.container = container;  // Reference to the container
  }

  show () {
    stroke(255, this.strength);
    line(this.pos.x, this.pos.y, this.pos.x, this.pos.y - this.length);
  }

  update () {
    this.pos.add(this.vel);

    // Constrain the drops to stay within the container's width and height
    this.pos.x = constrain(this.pos.x, this.container.x, this.container.x + this.container.width);


    // Reset drop when it reaches the bottom of the container
    if (this.pos.y > this.container.y + this.container.height) {
      this.pos.y = this.container.y;  // Reset y position to the top of the container
      this.pos.x = random(this.container.x, this.container.x + this.container.width); // Randomize x within the container
    }
  }
}

class ContainerRain {
  constructor(x, y, width, height) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.drops = [];
  }


  addDrop (drop) {

    this.drops.push(drop);
  }

  updateDrops () {
    strokeWeight(2);
    for (let drop of this.drops) {
      drop.update();
      drop.show();
    }
  }
}


class Star {
  constructor(x, y, angle, w, h) {
    this.x = x;
    this.y = y;
    this.angle = angle;
    this.width = w;
    this.height = h;
    this.zoomSpeed = random(0.008, 0.01)
  }

  update () {
    let zoomFactor = sin(frameCount * this.zoomSpeed * 360);
    this.currentWidth = this.width + zoomFactor * (this.width / 2);
    this.currentHeight = this.height + zoomFactor * (this.height / 2);
  }
  display () {
    fill(255, 204, 0);
    noStroke();

    push();
    translate(this.x, this.y);
    rotate(this.angle);
    this.drawStar(0, 0, this.currentWidth, this.currentHeight / 2, 5);
    pop();
  }

  drawStar (x, y, radius1, radius2, npoints) {
    let angle = 360 / npoints;
    let halfAngle = angle / 2.0;

    beginShape();
    for (let a = 0; a < 360; a += angle) {
      let sx = x + cos(a) * radius1;
      let sy = y + sin(a) * radius1;
      vertex(sx, sy);
      sx = x + cos(a + halfAngle) * radius2;
      sy = y + sin(a + halfAngle) * radius2;
      vertex(sx, sy);
    }
    endShape(CLOSE);
  }
}


class Cloud {
  constructor(x, y, width, height, flipX) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.flipX = flipX
    this.height = height;
    this.yOffset = random(100, 150);
  }
  update () {
    this.y += sin(frameCount + this.yOffset) * 0.2;
  }

  display () {
    imageMode(CENTER);
    if (this.flipX) {
      scale(-1, 1);
      image(cloud, this.x, this.y, this.width, this.height);
    } else {
      image(cloud, this.x, this.y, this.width, this.height);
    }

  }
}