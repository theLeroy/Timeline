//Variables
var DayWith; //Pixel per day
var LineHight; //Hight of line in px
var tempc;
var OldestDate;
var oldestDateIndifier;
var MidlelinePx; //Pixel wehre the midle Line is
var DayLinesColor;
var DayLinesWith;
//Project Dots and Lines Config
var ProjectTimeSpanWith; //Whith from Project/Timespan stroke in px
var ProjectTimeSpanColor; //Colro from Project/Timespan stroke in hex
var ProjectStartpointWith; //With from Project Point in px
var ProjectStartpointColor;
var ProjectEndpointColor;
var ProjectEndpointWith;


  //Generate Daylines
  for (let i = 1; i < 100; i++) {
    $(".C").append( '<div class="DayLines"></div>' );
  }
  //
  // //Generate Lines
  // for (var o = 0; o < Lines.length; o++) {
  //   if (Lines[o]["Position"] < 100){
  //     var ypostion = MidlelinePx + ((Lines[o]["Position"] - 100)*LineHight);
  //   } else if (Lines[o]["Position"] > 100) {
  //     var ypostion = MidlelinePx - ((100 - Lines[o]["Position"])*LineHight);
  //   }  else if (Lines[o]["Position"] = 100) {
  //     var ypostion = MidlelinePx;
  //   } else {
  //     Errorfunction("We have got e problem with one Dot. We cant finde the Line wehre he has to go.");
  //   }
  //
  // }
  //
  // //Get oldest date
  // OldestDate = Infinity;
  // for (var i = 0; i < Data.length; i++) {
  //   if (Data[i]["StartDate"] < OldestDate) {
  //     OldestDate = Data[i]["StartDate"];
  //     oldestDateIndifier = i;
  //   }
  // }
  //
  // //Dates top
  // var ts = new Date(OldestDate);
  // for (var p = 0; p < 100/DayWith; p++) {
  //   // console.log(ts.toLocaleDateString());
  //   noStroke();
  //   textSize(10);
  //   textAlign(CENTER);
  //   fill(0, 102, 153);
  //   text(ts.toLocaleDateString(), (p*DayWith+(DayWith/2)), 30);
  //   ts = addDays(ts, 1);
  // }
  //
  //
  // //Dysplay dots at days
  // for (var i = 0; i < Data.length; i++) {
  //   //Y Position and Lines
  //   for (var o = 0; o < Lines.length; o++) {
  //     //Finde the corect line
  //     if (Data[i]["LineId"] == Lines[o]["LineId"]) {
  //       //Test if the line is up or down from normal
  //       if (Lines[o]["Position"] < 100) {
  //         var ypostion = MidlelinePx - ((Lines[o]["Position"] - 100)*LineHight);
  //       } else if (Lines[o]["Position"] > 100) {
  //         var ypostion = MidlelinePx + ((100 - Lines[o]["Position"])*LineHight);
  //       }  else if (Lines[o]["Position"] = 100) {
  //         var ypostion = MidlelinePx;
  //       } else {
  //         Errorfunction("We have got e problem with one Dot. We cant finde the Line wehre he has to go.");
  //       }
  //     }
  //   }
  //   //X Position start Point
  //   let d = Data[i]["StartDate"] - OldestDate;
  //   d = d/1000/60/60/24;
  //
  //   //X Position end Point
  //   let e = Data[i]["EndDate"] - OldestDate;
  //   e = e/1000/60/60/24;
  //
  //   //Connection line
  //   stroke("#"+ProjectTimeSpanColor);
  //   strokeWeight(ProjectTimeSpan);
  //   line((e*DayWith+(DayWith/2)), ypostion, (d*DayWith+(DayWith/2)), ypostion);
  //   noStroke();
  //   strokeWeight(1);
  //
  //
  //   noStroke();
  //   fill("#"+ProjectStartpointColor);
  //   ellipse((d*DayWith+(DayWith/2)), ypostion, ProjectStartpointWith, ProjectStartpointWith);
  //
  //
  //   //Get second Dot of Time Spans if not Milestone
  //   if (Data[i]["StartDate"] != Data[i]["EndDate"]) {
  //     noStroke();
  //     fill("#"+ProjectEndpointColor);
  //     ellipse((e*DayWith+(DayWith/2)), ypostion, ProjectEndpointWith, ProjectEndpointWith);
  //   }
  // }



//https://github.com/CodingTrain/website/tree/master/Tutorials/P5JS/p5.js/07/7.6_p5.js_checking_objects_intersection_1
