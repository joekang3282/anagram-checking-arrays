// Compares and determine for each pair if it’s an anagram or not

firstWords = ['grints', 'aba', 'cinema', 'host', 'train'];
secondWords = ['string', 'abb', 'iceman', 'shot', 'rain'];
for (i=0; i<firstWords.length; i++){
    for (j=0; j<secondWords.length; j++) {
        if (i === j) {
            // console.log(i + " " + j);
            checkAnagrams(firstWords[i],secondWords[j]);
        }
    }
}

function checkAnagrams(first_words, second_words) {
    analyzeFirstArray = first_words.split("").sort().join("");
    analyzeSecondArray = second_words.split("").sort().join("");
   
        if (analyzeFirstArray === analyzeSecondArray) {
            console.log(firstWords[i] + " and " + secondWords[j] + " are anagrams");
        }
        else {
            console.log(firstWords[i] + " and " + secondWords[j] + " are NOT anagrams");
        }
}
