// 最終課題を制作しよう
let c, d, e, vc, vd, ve;

function setup(){
  createCanvas(windowWidth, windowHeight);
  c = width / 2;
  d = height / 2;
  e = width / 3;
  vc = 2;
  vd = 2;
  ve = 2;
}

function draw(){
  background(154, 205, 50);
  URIBO(c, d, e);

  c += vc;
  d += vd;
  e += ve;

  if(c < 0 || c > width){ vc = -1 * vc; }
  if(d < 0 || d > height){ vd = -1 * vd; }
  if(e < 0 || e > height){ ve = -1 * ve; }

  c = constrain(c, 0, width);
  d = constrain(d, 0, height);
  e = constrain(e, 0, height);

}

function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}

function URIBO(x, y, r){

  noStroke();

  fill(184, 134, 11);
  ellipse(x - r / 3, y + r / 2.4, r / 10, r / 6);
  ellipse(x + r / 3, y + r / 2.4, r / 10, r / 6);
//legs

  fill(222, 184, 135);
  ellipse(x, y, r);
//outline




  fill(255);
  arc(x - r / 6, y + r / 3.5, r / 4, r / 5, QUARTER_PI, HALF_PI * 1.1 + QUARTER_PI);
  arc(x + r / 6, y + r / 3.5, r / 4, r / 5, QUARTER_PI * 0.9, HALF_PI + QUARTER_PI);
//teeth

  fill(218, 165, 32);
  ellipse(x, y + r / 3.5, r / 3, r / 4);
  fill(184, 134, 11);
  ellipse(x - r / 20, y + r / 3.5, r / 14, r / 8);
  ellipse(x + r / 20, y + r / 3.5, r / 14, r / 8);
//nose

  fill(184, 134, 11);
  arc(x - r / 2.3, y + r / 8, r / 2.5, r / 2.5, PI + QUARTER_PI + HALF_PI / 10, PI + HALF_PI + QUARTER_PI + HALF_PI / 10);
  arc(x + r / 2.3, y + r / 8, r / 2.5, r / 2.5, PI + QUARTER_PI - HALF_PI / 10, PI + HALF_PI + QUARTER_PI - HALF_PI / 10);
//ears

  fill(240, 128, 128);
  ellipse(x - r / 3,  y + r / 3.5, r / 6, r / 10);
  ellipse(x + r / 3,  y + r / 3.5, r / 6, r / 10);
//cheek

  fill(0);
  ellipse(x - r / 6, y + r / 7, r / 12, r / 9);
  ellipse(x + r / 6, y + r / 7, r / 12, r / 9);

  if(keyIsDown("S".charCodeAt(0))){
    fill(222, 184, 135);
    ellipse(x - r / 6, y + r / 7, r / 10, r / 7);
    ellipse(x + r / 6, y + r / 7, r / 10, r / 7);
    stroke(0);
    strokeWeight(5);
    line(x - r / 7, y + r / 7, x - r / 4.5, y + r / 7);
    line(x + r / 7, y + r / 7, x + r / 4.5, y + r / 7);
  }
  if(keyIsDown("A".charCodeAt(0))){
    fill(222, 184, 135);
    ellipse(x - r / 6, y + r / 7, r / 10, r / 7);
    ellipse(x + r / 6, y + r / 7, r / 10, r / 7);

    fill(0);
    triangle(x - r / 9, y + r / 10, x - r / 3.5, y + r / 10, x - r / 6, y + r / 6);
    triangle(x + r / 9, y + r / 10, x + r / 3.5, y + r / 10, x + r / 6, y + r / 6);
    fill(255);
    arc(x - r / 20, y + r / 3.5, r, r, QUARTER_PI * 1.9, HALF_PI * 1.1);
    arc(x + r / 20, y + r / 3.5, r, r, QUARTER_PI * 1.9, HALF_PI * 1.1);

    ellipse(x - r / 20, y + r / 1.5, r / 6);
    ellipse(x - r / 20, y + r / 1.2, r / 6);
    ellipse(x, y + r / 1.3, r / 2.5, r / 6);
    ellipse(x + r / 20, y + r / 1.5, r / 6);
    ellipse(x + r / 20, y + r / 1.2, r / 6);

    stroke(255, 0, 0);
    strokeWeight(5);
    line(x + r / 10, y - r / 9, x + r / 10, y - r / 13);
    line(x + r / 7, y - r / 9, x + r / 7, y - r / 13);
    line(x + r / 10, y - r / 25, x + r / 10, y);
    line(x + r / 7, y - r / 25, x + r / 7, y);
    line(x + r / 15, y - r / 13, x + r / 10, y - r / 13);
    line(x + r / 7, y - r / 13, x + r / 5.5, y - r / 13);
    line(x + r / 15, y - r / 25, x + r / 10, y - r / 25);
    line(x + r / 7, y - r / 25, x + r / 5.5, y - r / 25);
  }
  if(keyIsDown("W".charCodeAt(0))){
    fill(222, 184, 135);
    ellipse(x - r / 6, y + r / 7, r / 10, r / 7);
    ellipse(x + r / 6, y + r / 7, r / 10, r / 7);

    fill(255);
    stroke(0);
    strokeWeight(4);
    ellipse(x - r / 6, y + r / 7, r / 12, r / 9);
    ellipse(x + r / 6, y + r / 7, r / 12, r / 9);
  }
//eyes

  stroke(184, 134, 11);
  strokeWeight(r / 30);
  line(x, y - r / 2.2, x, y - r / 5);
  line(x + r / 10, y - r / 2.4, x + r / 10, y - r / 4);
  line(x - r / 10, y - r / 2.4, x - r / 10, y - r / 4);
//line



}
