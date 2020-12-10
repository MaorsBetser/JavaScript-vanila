function largestOfFour(arr) {
    let largestNumbers = [0,0,0,0];
    for(let i = 0; i < arr.length; i++){
        let biggestInArray = 0;
        for(let j = 0; j < arr.length; j++){
            if(biggestInArray === 0){
                biggestInArray = arr[i][j];
            }
            if(arr[i][j] > biggestInArray){
                biggestInArray = arr[i][j];
            }
        }
        
        largestNumbers[i] = biggestInArray;
    }
    return largestNumbers;

    }
  
    largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
  