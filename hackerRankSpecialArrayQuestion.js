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

// 40 total individual strings
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
let moreSplitArray = [];
let stringToArray = [];
let endOfStringToArray = [];
// let array1 = []

function MergeStrings(strings) {
  //step 1 - remove array elements within the exampleArray array, so that there are only individual strings there
  for (var i = 0; i < strings.length; i++) {
    var split = strings[i].split(""); // just split once
    //     console.log(split);
    for (let j = 0; j < split.length; j++) {
      //       console.log(split[j]);
      if (split[j].length >= 1) {
        stringToArray.push(split[j]);
        // console.log("stringToArray" + stringToArray);
      }
      //       console.log("stringToArray" + stringToArray);
      //       console.log(stringToArray.length); //confirmed i have 40 elements
      //       console.log(stringToArray[stringToArray.length - 1]); // HERE is the exampleArray with all of its string elements sorted out individually
      let endOfStringToArray = stringToArray[stringToArray.length - 1];
      console.log(endOfStringToArray);
      console.log(endOfStringToArray.length);
      //       endOfStringToArray = stringToArray[stringToArray.length - 1];
      //       console.log("endOfStringToArray" + endOfStringToArray);
      //       moreSpitArray = split[j].concat(split[j + 1]);
      //       console.log("moreSplitArray" + moreSplitArray);
    }
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
