function makeLine(length) {
    var line = "";
    for (var j = 1; j <= length; j++) {
        line += "* ";
    }
    return line + "\n";
}

// doesn't pass tests, but I like it the same :)
function buildTriangle(x){
  var triange = "";
  for (var i = 1; i <= x; i++)
  console.log(makeLine(i)) + "\n"
  
  return
}
/*

* 

* * 

* * * 

* * * * 

* * * * * 

* * * * * * 

* * * * * * * 

* * * * * * * * 

* * * * * * * * * 

* * * * * * * * * * 

*/