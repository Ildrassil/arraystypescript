let array = [1,2,3,4,5,6,7,8,9,10];
console.log(array.map((value) => value*2));
let wordArray =["hallo","du","was","wer","Wie gehts dir?","Paulaner","deineMutterStinkt"];
console.log(wordArray.filter(value => value.length > 5));
console.log(array.reduce((firstValue, currentValue)=> firstValue +currentValue));
console.log(array.some(value => value > 10))