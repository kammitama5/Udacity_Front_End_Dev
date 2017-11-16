var seconds = 60;

while(seconds > 0){
  //console.log(seconds)
  console.log("T-"+ seconds + " seconds")
  if (seconds == 51){
    console.log("Orbiter transfers from ground to internal power")
    seconds = seconds - 1
  }
  else if (seconds === 32){
    console.log("Ground launch sequencer is go for auto sequence start")
    seconds = seconds - 1
  }
  else if (seconds === 17){
    console.log("Activate launch pad sound suppression system")
    seconds = seconds - 1 
  }
  else if (seconds === 11){
    console.log("Activate main engine hydrogen burnoff system")
    seconds = seconds - 1
  }
  else if (seconds === 7){
    console.log("Main engine start")
    seconds = seconds - 1
  }
  else if (seconds === 1){
    console.log("Solid rocket booster ignition and liftoff!")
  }
  else if (seconds <= 0)
  {
    break;
  }
  seconds = seconds - 1
  
}
