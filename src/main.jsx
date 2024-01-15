let array = [1,2,3,4,5,6,7,8,9,10];
console.log(array.map((value) => value*2));
let wordArray =["hallo","du","was","wer","Wie gehts dir?","Paulaner","deineMutterStinkt"];
console.log(wordArray.filter(value => value.length > 5));
console.log(array.reduce((firstValue, currentValue)=> firstValue +currentValue));
console.log(array.some(value => value > 10))

const list = [15, 6, 3213, 9, 0, 12, 8464 , 1, 1264, 481, 186, 1031, 194];
const sortedList = list.sort((previousValue,currentValue)=> currentValue-previousValue);
console.log(sortedList);
let updatedList = list.map(value => value*value);
console.log(updatedList);
updatedList.splice(0,4);
updatedList.sort((previousValue, currentValue) => previousValue- currentValue).splice(0,2);
console.log(updatedList);
const division=updatedList.filter(value => value%4 !== 0);
console.log(division);
console.log(division.reduce((firstValue,currentValue) => firstValue + currentValue));
