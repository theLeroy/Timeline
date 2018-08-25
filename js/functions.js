
function addDays(date, days) {
  var result = new Date(date);
  result.setDate(result.getDate() + days);
  return result;
}


//Error functions
function Errorfunction(text) {
  alert(text);
}


//oldest date
function oDate() {
  //Get oldest date
  OldestDate = Infinity;
  for (var i = 0; i < Data.length; i++) {
    if (Data[i]["StartDate"] < OldestDate) {
      OldestDate = Data[i]["StartDate"];
      oldestDateIndifier = i;
    }
  }
  return OldestDate;
}

//youngestDate date
function yDate() {
  //Get youngest date
  youngestDate = 0;
  for (var i = 0; i < Data.length; i++) {
    if (Data[i]["EndDate"] > youngestDate) {
      youngestDate = Data[i]["EndDate"];
      youngestDateIndifier = i;
    }
  }
  if (youngestDate != 0) {
    return youngestDate;
  } else {
    //Fall back
    for (var i = 0; i < Data.length; i++) {
      if (Data[i]["StartDate"] > youngestDate) {
        youngestDate = Data[i]["StartDate"];
        youngestDateIndifier = i;
      }
    }
  }
  return youngestDate;
}
