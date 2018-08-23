//Dysplay dots at LINE
for (var i = 0; i < Data.length; i++) {
  for (var o = 0; o < Lines.length; o++) {
    //Finde the corect line
    if (Data[i]["LineId"] == Lines[o]["LineId"]) {

      if (Lines[o]["Position"] < 100){
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
}
