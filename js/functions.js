
function addDays(date, days) {
  var result = new Date(date);
  result.setDate(result.getDate() + days);
  return result;
}


//Error functions
function Errorfunction(text) {
  alert(text);
}
