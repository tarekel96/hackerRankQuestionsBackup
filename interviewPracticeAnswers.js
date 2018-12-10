function vowelsAndConsonants(s) {
  for (let i = 0; i <= s.length; i++) {
    if (
      s[i] == "a" ||
      s[i] == "e" ||
      s[i] == "i" ||
      s[i] == "o" ||
      s[i] == "u"
    ) {
      console.log("vowels " + s[i]);
    } else {
      console.log("constants " + s[i]);
    }
  }
}

/*
 * Complete the vowelsAndConsonants function.
 * Print your output using 'console.log()'.
 */

// alt way to do it
function vowelsAndConsonants(s) {
  let consonents = [];
  for (let x in s) {
    if ("aeiou".includes(s[x])) {
      console.log(s[x]);
    } else {
      consonents.push(s[x]);
    }
  }
  for (let nV in consonents) {
    console.log(consonents[nV]);
  }
}
// final correct way of doing it
function vowelsAndConsonants(s) {
  let consonents = [];
  for (let l in s) {
    if ("aeiou".includes(s[l])) {
      console.log(s[l]);
    } else {
      consonents.push(s[l]);
    }
  }
  for (let nV in consonents) {
    console.log(consonents[nV]);
  }
}

//factorial

function factorial(n) {
  for (var i = 1, m = 1; i <= n; i++) {
    m = i * m;
  }
  // must use return because the function will not stop executing with console.log
  return (n = m);
}

// factorial alternatives
// O(n), O(1)
function factorial(n) {
  for (var i = n - 1; i > 1; n *= i, i--) {}
  return n;
}

// O(n), O(n)
function factorial(n) {
  return n > 1 ? n * factorial(n - 1) : n;
}

function factorial(n, facto = arguments[0]) {
  return n > 1 ? factorial(n - 1, facto * (n - 1)) : facto;
}

// STUDY MORE
// Complete the function in the editor below by returning a RegExp object, , that matches any string  s
//that begins and ends with the same vowel. Recall that the English vowels are a, e, i, o, and u.
function regexVar(str) {
  //  ^ => first item matches:
  // () => stores matching value captured within
  // [aeiou] => matches any of the characters in the brackets
  // . => matches any character:
  // + => for 1 or more occurrances (this ensures str length > 3)
  // \1 => matches to previously stored match.
  // \2 looks for matched item stored 2 instances ago
  // \3 looks for matched item stored 3 ago, etc

  //  $ ensures that matched item is at end of the sequence

  let re = /^([aeiou]).+\1$/;
  return re;
}

/* Declare a constant variable, , and assign it the value Math.PI. 
You will not pass this challenge unless the variable is declared as a constant and named PI (uppercase).
Read a number, , denoting the radius of a circle from stdin.
Use  and  to calculate the  and  of a circle having radius .
Print  as the first line of output and print  as the second line of output.
 */
//answer
// Write your code here. Read input using 'readLine()' and print output using 'console.log()'.
const PI = Math.PI;
const r = +readLine();

// Print the area of the circle:
console.log(PI * r * r);

// Print the perimeter of the circle:
console.log(2 * PI * r);
