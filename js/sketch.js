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

MidlelinePx = 450; //Pixel wehre the midle Line is
LineHight = 100; //Hight of line in px
DayWith = 50;

  //Generate Daylines
  for (let i = 1; i < (((yDate() - oDate()) / 86400000)+15); i++) {
    $(".D").append( '<div class="DayLines"></div>' );
  }


  //Generate Lines
  for (var o = 0; o < Lines.length; o++) {
    if (Lines[o]["Position"] < 100){
      var ypostion = MidlelinePx + ((Lines[o]["Position"] - 100)*LineHight);
    } else if (Lines[o]["Position"] > 100) {
      var ypostion = MidlelinePx - ((100 - Lines[o]["Position"])*LineHight);
    }  else if (Lines[o]["Position"] = 100) {
      var ypostion = MidlelinePx;
    } else {
      Errorfunction("We have got e problem with one Dot. We cant finde the Line wehre he has to go.");
    }
    //Conteiner
    $(".L").append( '<div id="LineC_'+Lines[o]["LineId"]+'" class="LinesContainer" style="margin-top: '+ypostion+'px;"></div>' );
    //BackgroundColor
    $('#LineC_'+Lines[o]["LineId"]+'').append( '<div id="'+Lines[o]["LineId"]+'" class="LineColor" style="background: #'+Lines[o]["BackgroundColor"]+'"></div>' );
  }


  //Dates top
  var ts = new Date(oDate());
  let p = 1;
$( ".DayLines" ).each(function() {
    $(".DayLines:nth-child("+p+")").append( '<div class="DayDatesTop">'+ts.toLocaleDateString()+'</div>' );
    ts = addDays(ts, 1);
    p++;
});



//Dysplay dots at days
for (var i = 0; i < Data.length; i++) {
  //Y Position and Lines
  for (var o = 0; o < Lines.length; o++) {
    //Finde the corect line
    if (Data[i]["LineId"] == Lines[o]["LineId"]) {
      //Test if the line is up or down from normal
      if (Lines[o]["Position"] < 100) {
        var ypostion = MidlelinePx - ((Lines[o]["Position"] - 100)*LineHight);
      } else if (Lines[o]["Position"] > 100) {
        var ypostion = MidlelinePx + ((100 - Lines[o]["Position"])*LineHight);
      }  else if (Lines[o]["Position"] = 100) {
        var ypostion = MidlelinePx;
      } else {
        Errorfunction("We have got e problem with one Dot. We cant finde the Line wehre he has to go.");
      }
    }
  }
  //X Position start Point
  let d = Data[i]["StartDate"] - OldestDate;
  d = d/1000/60/60/24;

  //X Position end Point
  let e = Data[i]["EndDate"] - OldestDate;
  e = e/1000/60/60/24;

  // //Connection line
  // stroke("#"+ProjectTimeSpanColor);
  // strokeWeight(ProjectTimeSpan);
  // line((e*DayWith+(DayWith/2)), ypostion, (d*DayWith+(DayWith/2)), ypostion);
  // noStroke();
  // strokeWeight(1);

  $("#LineC_"+Lines[i]["LineId"]+"").append('<div id="ConnectionLineID_'+Data[i]["ObjectId"]+'" class="LineE Dot_connecting_Line" style="margin-left: '+ (d*DayWith+(DayWith/2)) +'px; width: '+ ((e*DayWith+(DayWith/2)) - (d*DayWith+(DayWith/2))) +'px;"></div>');




  //
  // noStroke();
  // fill("#"+ProjectStartpointColor);
  // ellipse((d*DayWith+(DayWith/2)), ypostion, ProjectStartpointWith, ProjectStartpointWith);
  $("#LineC_"+Lines[i]["LineId"]+"").append('<div id="StartPointLineID_'+Data[i]["ObjectId"]+'" class="LineE Dot_StartingPoint" style="margin-left: '+ (d*DayWith+(DayWith/2)) +'px;"></div>');



  $("#LineC_"+Lines[i]["LineId"]+"").append('<div id="EndPointLineID_'+Data[i]["ObjectId"]+'" class="LineE Dot_EndPoint" style="margin-left: '+ (e*DayWith+(DayWith/2)) +'px;"></div>');


  // //Get second Dot of Time Spans if not Milestone
  // if (Data[i]["StartDate"] != Data[i]["EndDate"]) {
  //   noStroke();
  //   fill("#"+ProjectEndpointColor);
  //   ellipse((e*DayWith+(DayWith/2)), ypostion, ProjectEndpointWith, ProjectEndpointWith);
  // }
}



//https://github.com/CodingTrain/website/tree/master/Tutorials/P5JS/p5.js/07/7.6_p5.js_checking_objects_intersection_1
