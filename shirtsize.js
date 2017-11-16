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

