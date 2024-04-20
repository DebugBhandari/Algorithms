var mergeAlternately = function(word1, word2) {
    longerWord = word1.length > word2.length ? word1 : word2;
    w1Array = [...word1];
    w2Array = [...word2];
    w3Array = [];
    for (let i = 0; i < longerWord.length; i++) {
        w3Array.push(w1Array[i]);
        w3Array.push(w2Array[i]);
    }
    return w3Array.join('');
};



mergeAlternately("abc", "pqr"); // Output: "apbqcr"
mergeAlternately("ab", "pqrs"); // Output: "apbqrs"
mergeAlternately("abcd", "pq"); // Output: "apbqcd"

/*
submitted solution:
var mergeAlternately = function(word1, word2) {
    word3 = '';
    for (let i = 0; i < Math.max(word1.length, word2.length); i++) {
         if (i < word1.length) word3 += word1[i];
         if (i < word2.length) word3 += word2[i];
    }
    return word3;
};

*/