// Compares and determine for each pair if it’s an anagram or not

firstWordsArray = ['grints', 'aba', 'cinema', 'host', 'train'];
secondWordsArray = ['string', 'abb', 'iceman', 'shot', 'rain'];
for (i=0; i<firstWordsArray.length; i++){
    for (j=0; j<secondWordsArray.length; j++) {
        if (i === j) {
            // console.log(i + " " + j);
            checkAnagrams(firstWordsArray[i],secondWordsArray[j]);
        }
    }
}

function checkAnagrams(firstWords, secondWords) {
    analyzeFirstArray = firstWords.split("").sort().join("");
    analyzeSecondArray = secondWords.split("").sort().join("");
   
        if (analyzeFirstArray === analyzeSecondArray) {
            console.log(firstWordsArray[i] + " and " + secondWordsArray[j] + " are anagrams");
        }
        else {
            console.log(firstWordsArray[i] + " and " + secondWordsArray[j] + " are NOT anagrams");
        }
}
