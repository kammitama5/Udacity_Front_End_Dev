/* shirt size 
where:
S => width : 18", length : 28", sleeve : 8.13"
M => width : 20", length : 29", sleeve : 8.38"
L => width : 22", length : 30", sleeve : 8.63"
XL => width : 24", length : 31", sleeve : 8.88"
2XL => width : 26", length : 33", sleeve : 9.63"
3XL => width : 28", length : 34", sleeve : 10.13"
*/



if (((shirtWidth >= 18) && (shirtLength >= 28) && (shirtSleeve >= 8.13))
&& ((shirtWidth < 20) && (shirtLength < 29) && (shirtSleeve < 8.38))){
  console.log("S")
}
else if (((shirtWidth >= 20) && (shirtLength >= 29) && (shirtSleeve >= 8.38))
&& ((shirtWidth < 22) && (shirtLength < 30) && (shirtSleeve < 8.63)))
{
  console.log("M")
}
else if (((shirtWidth >= 22) && (shirtLength >= 30) && (shirtSleeve >= 8.63))
&& ((shirtWidth < 24) && (shirtLength < 31) && (shirtSleeve < 8.88)))
{
  console.log("L")
}
else if (((shirtWidth >= 24) && (shirtLength >= 31) && (shirtSleeve >= 8.88))
&& ((shirtWidth < 26) && (shirtLength < 33) && (shirtSleeve < 9.63)))
{
  console.log("XL")
}
else if (((shirtWidth >= 26) && (shirtLength >= 33) && (shirtSleeve >= 9.63))
&& ((shirtWidth < 28) && (shirtLength < 34) && (shirtSleeve < 10.13)))
{
  console.log("2XL")
}
else if ((shirtWidth === 28) && (shirtLength === 34) && (shirtSleeve === 10.13))
{
  console.log("3XL")
}
else{
  console.log("N/A")
}

