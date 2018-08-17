//Variables
var c; //Canvas
var $c; //Type of canvas
var DayWith; //Pixel per day
var LineHight; //Hight of line in px
var tempc;
var OldestDate;
var oldestDateIndifier;
var MidlelinePx; //Pixel wehre the midle Line is



//Default Setings
DayWith = 50;
LineHight = 20;
MidlelinePx = 400;


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


  //Dysplay dots at days
  for (var i = 0; i < Data.length; i++) {
    let d = Data[i]["StartDate"] - OldestDate;
    d = d/1000/60/60/24;
    noStroke();
    ellipse((d*DayWith+(DayWith/2)), 200, 30, 30);
    // Date[i]["EndDate"]
  }

  //Dysplay dots at LINE
  for (var i = 0; i < Data.length; i++) {
    for (var o = 0; o < Lines.length; o++) {
      //Finde the corect line
      if (Data[i]["LineId"] == Lines[o]["LineId"]) {

        if (Lines[o]["Position"] < 100){
          var output = MidlelinePx - ((Lines[o]["Position"] - 100)*LineHight);
        } else if (Lines[o]["Position"] > 100) {
          var output = MidlelinePx + ((100 - Lines[o]["Position"])*LineHight);
        }  else if (Lines[o]["Position"] = 100) {
          var output = MidlelinePx;
        } else {
          Errorfunction("We have got e problem with one Dot. We cant finde the Line wehre he has to go.");
        }

      }
    }
  }

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function draw() {

}
