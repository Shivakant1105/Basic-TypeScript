
function isPalindrome(str){
    if( str===str.split('').reverse().join("")
    )
{console.log("Palidrome");}
else{
console.log("not palidrome");
}

}
isPalindrome("shiva")
isPalindrome("lel")

// revser string
function revString(str){
    return str.split("").reverse().join("");
}
console.log(revString("shiva"));

// an array of numbers and returns a new array with only the even numbers
function filterEvenNumbers(numbers) { 

    return numbers.filter(num => num % 2 === 0); 
  
  }
  console.log(filterEvenNumbers([1,2,3,4,4,5,556,]));

//   factorial of a given number. 
function factorial(number) { 

    if (number === 0 || number === 1) { 
  
      return 1; 
  
    } else { 
  
      return number * factorial(number-1); 
  
    } 
  
  } 
  console.log(factorial(5));

//  check if a given number is prime. 
function isPrime(num) { 

    if (num <= 1) return false; 
  
    for (let i = 2; i <= Math.sqrt(num); i++) { 
  
      if (num % i === 0) return false; 
  
    } 
  
    return true; 
  
  }
console.log(isPrime(10));
console.log(isPrime(7));


// an array of objects and a key, and returns a new array sorted based on the values of that key in ascending order. 
function sortByKey(arr, key) { 
    return arr.sort((a, b) => a[key] - b[key]); 
  } 
  const data = [
    { name: "John", age: 30 },
    { name: "Alice", age: 25 },
    { name: "Bob", age: 35 }
  ];
  
  const sortedData = sortByKey(data, "age");
  console.log(sortedData);
    