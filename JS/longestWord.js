function findLongestWordLength(str) {
    let longestWord = 0;
    
    const words = str.split(' ');
  
    for(let i = 0; i < words.length; i++){
        if(longestWord === 0){
            longestWord = words[i].length;
        }

        console.log(`LongestWord is ${longestWord}`)
      
        if(words[i].length > longestWord){
        longestWord = words[i].length;
        }
    }
    return longestWord;
  }
  
findLongestWordLength("The quick brown fox jumped over the lazy dog");
  