// let filtered = [];

// function MergeStrings(strings) {
//   let str = strings;
//   // code filters out the numbers
//   filtered = str.filter(function(item) {
//     return !(parseInt(item) == item);
//   });
//   // test 1
//   console.log("should be no numbers here: " + filtered);

//   for (let i = 0; i < str.length; i++) {
//     var split = str[i].replace(/ /g, "").split("");
//     console.log(split);
//     var merged = [].concat.apply([], split);
//     console.log("merged " + merged);
//     // res = str[i].match(/\S/g);
//     // console.log(res);
//   }

//   // var sorted = [];
//   // for (var i = 0; i < str.length; i++) {
//   //     sorted.push(str[i].toLowerCase());
//   // }
//   // sorted.sort();
//   // console.log("should be ordered alphabetically and no numbers: " + sorted);
// }

let exampleArray = [
  "fnaaAfa",
  "a",
  "2",
  "ads",
  "2891hdnja",
  "G",
  "djiaf",
  "FMNA531",
  "FNAKSJ"
];
// goal - output the elements of the example Array in alphabetical order, all lower-case, no numbers

let filtered = [];
let array1 = [];
let array2 = [];
// let array1 = []

function MergeStrings(strings) {
  //step 1 - remove array elements within the exampleArray array, so that there are only individual strings there
  for (var i = 0; i < strings.length; i++) {
    var split = strings[i].split(""); // just split once
    console.log(split);
    //     array1.push(split[i]); // before the dot
    //     array2.push(split[1]); // after the dot
  }
  //   console.log("array1", array1);
  //   console.log("array2", array2);
}

MergeStrings(exampleArray);

// var array = ["a.READ", "b.CREATE"]
// var array1 = []; // better to define using [] instead of new Array();
// var array2 = [];

// for (var i = 0; i < array.length; i++) {
//     var split = array[i].split(".");  // just split once
//     array1.push(split[0]); // before the dot
//     array2.push(split[1]); // after the dot
// }
// console.log("array1", array1);
// console.log("array2", array2);
