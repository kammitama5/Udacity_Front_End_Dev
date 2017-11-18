for (var i = 0; i < numbers.length; i++){
    for (j = 0; j < numbers.length; j++){
        if (numbers[j][i] % 2 === 0){
            numbers[j][i] = "even"
        }
        else{
            numbers[j][i] = "odd"
        }
    }
}
//console.log(numbers)
