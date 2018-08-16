//Variables
var c; //Canvas
var $c; //Type of canvas
var DayWith; //Pixel per day
var LineHight; //Hight of line in px
var tempc;
var OldestDate;
var oldestDateIndifier;



//Default Setings
var DayWith = 50;
var LineHight = 20;


function setup() {
  createCanvas(windowWidth, windowHeight);
  var c = document.getElementById("defaultCanvas0");
  $c = c.getContext("2d");

  //Generate Daylines
  for (var i = 1; i < windowWidth/DayWith; i++) {
    line((i*DayWith), 0, (i*DayWith), windowHeight);
  }


  //Get oldest date
  OldestDate = Infinity;
  for (var i = 0; i < Data.length; i++) {
    if (Data[i]["StartDate"] < OldestDate) {
      OldestDate = Data[i]["StartDate"];
      oldestDateIndifier = i;
    }
  }

  //Dates top
  var ts = new Date(OldestDate);
  for (var p = 0; p < windowWidth/DayWith; p++) {
    // console.log(ts.toLocaleDateString());
    textSize(10);
    textAlign(CENTER);
    fill(0, 102, 153);
    text(ts.toLocaleDateString(), (p*DayWith+(DayWith/2)), 30);
    ts = addDays(ts, 1);
  }


  //Dysplay dots
  for (var i = 0; i < Data.length; i++) {
    let d = Data[i]["StartDate"] - OldestDate;
    d = d/1000/60/60/24;
    ellipse((d*DayWith+(DayWith/2)), 200, 30, 30);
    // Date[i]["EndDate"]
  }

}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function draw() {

}
