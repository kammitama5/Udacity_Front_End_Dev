var education = "no high school diploma";

// set the value of this based on a person's education
var salary;

switch(education){
  case "no high school diploma":
    salary = 25636;
    break;
  case "high school diploma":
    salary = 35256;
    break;
  case "Associate's degree":
    salary = 41496;
    break;
  case "Bachelor's degree":
    salary = 59124;
    break;
  case "Master's degree":
    salary = 69732;
    break;
  case "Professional degree":
    salary = 89960;
    break;
  case "Doctoral degree":
    salary = 84396;
    break;
}

// your code goes here
var sentence = "In 2015, a person with " + education +  " earned an average of " + "$"+(salary.toLocaleString("en-US")) + "/year.";

console.log(sentence);