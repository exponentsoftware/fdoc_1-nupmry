// ------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// 1A
const countWords = (paragraph, first, second) => {
    var words = paragraph.split(/[\s.]+/);
    // console.log(words);
    countFirst = 0;
    countSecond = 0;
    for (var i = 0; i < words.length; i++) {
        if (words[i] === first) {
            countFirst++;
        }
        if (words[i] === second) {
            countSecond++;
        }
    }
    // console.log(`paragraph: ${paragraph}\narray of words: ${words}\n${first} was used ${countFirst} times and ${second} was used ${countSecond} times.`);
    return (countFirst > countSecond ? first : second)
}
const paragraph =
    'I love teaching. If you do not love teaching what else can you love. I love JavaScript if you do not love something which can give life to your application what else can you love.';
console.log(countWords(paragraph, 'love', 'you'))

// ------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// 1B
const sentence = `%I $am@% a %tea@cher%, &and& I lo%#ve %tea@ching%;. There $is nothing; &as& mo@re rewarding as educa@ting &and& @emp%o@wering peo@ple. ;I found tea@ching m%o@re interesting tha@n any other %jo@bs. %Do@es thi%s mo@tivate yo@u to be a tea@cher!?`;

const cleanText = (text) => text.replace(/[%$@&#;!]/g, '')
console.log(cleanText(sentence));

// ------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// 1C
const countWordsExceptOneLetter = (sentence) => {
    var words = sentence.split(/[\s.]+/)
    var count = 0;
    words.forEach(word => { if (word.length > 1) { count++ } })
    return count;
}

console.log(countWordsExceptOneLetter(cleanText(sentence)));

// ------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//  1D
const varietyOfWords = (sentence) => {
    var words = sentence.split(/[\s.,?]+/)
    var uniqueWords = [];
    words.forEach(word => {
        if (!uniqueWords.includes(word) && word.length > 0) { uniqueWords.push(word) }
    })
    console.log(uniqueWords);
    return uniqueWords.length;
}

console.log(varietyOfWords(cleanText(sentence)))

// ------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// 2A
var printSymbol = "#"
var count = 0;
while (count < 7) {
    console.log(printSymbol);
    printSymbol += "#";
    count++;
}

// ------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// 2B
const sevenRandomNumbers = () => {
    var array = [];
    while (array.length < 7) {
        var randomNumber = Math.floor(Math.random() * 10);
        if (!array.includes(randomNumber)) { array.push(randomNumber) }
    }
    return array;
}

console.log(sevenRandomNumbers())

// ------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// 2C
const reverseArray = (array) => {
    var reversed = [];
    array.forEach(element => { reversed.unshift(element) });
    // This can have multiple solutions; iterating the array backwards and pushing the elements to the new array. In place of forEach we can use "for".
    return reversed;
}

console.log(reverseArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]))

// ------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// 2D
const checkUniqueness = (array) => {
    // This can have multiple solutions; using an Object, running a nested for loop, and checking against each element.
    const set = new Set(array);
    return set.size === array.length;
}

console.log(checkUniqueness([1, 4, 6, 2, 1])); // This should return false.
console.log(checkUniqueness([1, 4, 6, 2, 3])); // This should return true.

// ------------------------------------------------------------------------------------------------------------------------------------------------------------------------