var c;
var $c;


function setup() {
  createCanvas(windowWidth, windowHeight);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}


function draw() {
   var c = document.getElementById("defaultCanvas0");

   $c = c.getContext("2d");
   background(255, 0, 200);
   $c.beginPath();
   $c.moveTo(20, 20);
   $c.bezierCurveTo(20, 100, 200, 100, 200, 20);
   $c.stroke();

}
