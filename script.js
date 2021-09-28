// let array = [1,2,3,4,5,6,7,8,9,10];
// let n = 0;
// let element = 0 ;
// for (let I = 0; I < array.length; I++) {
//     let element = array[I];
//     console.log(element , array.indexOf(I-1));
// }
// console.log(element);
// array.forEach(element => {
//     console.log(element);
// });
// let j = 0 ;
// while (j < array.length) {
//     console.log(array[j]);
//     j ++;
// }

// let arr = ["fan","camera",null,true,34];
// console.log(arr.length);
// arr.pop();
// console.log(arr);
// arr.push("vaibhav");
// console.log(arr);
// arr.shift();
// console.log(arr);
// arr.unshift("vab");
// console.log(arr);
// cgj



// var obj = {
//   firstName: "vaibhav",
//   greet: function () {
//     console.log(this);
//     console.log("Hello", this.firstName);
//   },
// };

// obj.greet();

// console.log(this);

// "Question : We have an object storing salaries of our team:

// let salaries = {
//   John: 100,
//   Smith: 150,
// }
// Write the code to sum all salaries and store in the variable sum. Should be 250 in the example above.

// If salaries is empty, then the result must be 0."


// let salaries = {
//       John: 100,
//       Smith: 150,
//     }

function Counter() {
    var counter = 0;

    function IncreaseCounter() {
        counter = 0;
        return counter += 1;
    };

    return IncreaseCounter;
}

 const counter = Counter();
alert(counter()); 
alert(counter()); 
alert(counter());
alert(counter());
