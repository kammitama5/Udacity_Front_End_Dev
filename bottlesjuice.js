var num = 99;

while (num > 0) {
    // check value of num
    // print lyrics using num
    console.log(num.toString() + (num == 1 ? " bottle" : " bottles") + " of juice on the wall! " + num.toString() + (num == 1 ? " bottle" : " bottles") + " of juice! Take one down, pass it around... " + (num-1).toString() + ((num-1 == 1 ? " bottle" : " bottles")) + " of juice on the wall!")
    // don't forget to check pluralization on the last line!
    // decrement num
    num = num - 1
}


/*
99 bottles of juice! Take one down, pass it around... 98 bottles of juice on the wall!
*/
