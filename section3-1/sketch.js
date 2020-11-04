// テキスト「関数を使う」
// 練習問題：このプログラムを改造してEUの旗を描いてみよう
function setup(){
  createCanvas(400, 300);
  background(0, 0, 255);
  for(let p = 0; p < 12; p++){
    let theta1 = TWO_PI * p / 12;
    let x1 = 200 + cos(theta1) * 100;
    let y1 = 150 + sin(theta1) * 100;
    star(x1, y1, 20);
  }
}

function star(cx, cy, r){
  beginShape();
  for(var i = 0; i < 5; i++){
    let theta = TWO_PI * i * 2 / 5 - HALF_PI;
    let x = cx + cos(theta) * r;
    let y = cy + sin(theta) * r;
    vertex(x,y);
  }
  fill(255, 255, 0);
  noStroke();
  endShape(CLOSE);
}
