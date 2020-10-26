// チェッカー
function setup() {
  createCanvas(200, 200);
  let size = width / 8;
  noStroke();
  for(let i = 0; i < 8; i++){
    for(let j = 0; j < 8; j++){
      console.log(i, j);
      if(i % 2 == 0 && j % 2 == 1){
        fill(128, 128, 128);
      }
      else if(i % 2 == 1 && j % 2 == 0){
        fill(128, 128, 128);
      }
      else{
        noFill();
      }
      rect(size * i, size * j, size, size);

      if(j < 3 && i % 2 == 0 && j % 2 == 1){
        fill(255,0, 0);
      }
      else if(i % 2 == 1 && j % 2 == 0 && j < 3 ){
        fill(255, 0, 0);
      }
      else{
        noFill();
      }
      ellipse(size * i + 12.5, size * j + 12.5, size, size);

      if(j > 4 && i % 2 == 0 && j % 2 == 1){
        fill(0, 0, 0);
      }
      else if(i % 2 == 1 && j % 2 == 0 && j > 4 ){
        fill(0, 0, 0);
      }
      else{
        noFill();
      }
      ellipse(size * i + 12.5, size * j + 12.5, size, size);






      // BLANK[1] (hint: rectのx座標は size * i, y座標はsize * j)
    }
  }



}
