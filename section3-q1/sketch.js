// 練習問題：吹き出し
// 吹き出しの位置、背景色 etc. を関数 balloon の引数で指定できるようにしてみよう
// 吹き出しにしっぽを付けてみよう
function setup(){
  createCanvas(400, 400);
  background(255);
  balloon("I love keyakizaka46", 50, 50, 0, 128, 0);
}

function balloon(t, l1, l2, c1, c2, c3){
  let w = textWidth(t);
  let h = textAscent() + textDescent();
  let p = 2;

  fill(c1, c2, c3);
  rect(l1, l2, w + p * 2, h + p * 2);

  line(l1 - 15, l2, l1, l2);
  line(l1 - 15, l2, l1, h / 3 + p + l2);


  fill(255);
  text(t, l1 + p, l2 + 20);
}
