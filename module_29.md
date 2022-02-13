## String comparison using toLowerCase toUpperCase (Module 29.1)

- anyString.toLowerCase() - converts all letters in the string to lowercase.
- anyString.toUpperCase() - converts all letters in the string to uppercase.

## Apply Search includes, indexOf, startswith, endswith, and contains (Module 29.2)

- includes(searchValue) - returns true if the string contains the search value.
- startsWith(searchValue) - returns true if the string starts with the search value.
- endsWith(searchValue) - returns true if the string ends with the search value.
- indexOf(searchValue) - returns the index of the first occurrence of the search value.
- contains(searchValue) - returns true if the string contains the search value.

## split, slice, substr, substring, concat, join (Module 29.3)

- split(separator) - splits the string into an array of substrings where its find the separator.
  - The separator is not included in the resulting array.
- slice(start, end) - extracts a section of the string and returns it as a new string.
  - start means the index of the first character to include in the result.
  - end means the index of the first character to exclude from the result.
- substr(start, length) - extracts a section of the string and returns it as a new string.
  - start means the index of the first character to include in the result.
  - length means the number of characters to include in the result.
- subString(start, end) - extracts a section of the string and returns it as a new string.
  - start means the index of the first character to include in the result.
  - end means the index of the first character to exclude from the result.
- concat(string1, string2) - concatenates two strings and returns the result as a new string.
  > strings are immutable, so the result is a new string.
- join(separator) - joins all elements of an array into a string and returns the result as a new string.
  - The separator is placed between each element of the array.
  - The separator is not included in the resulting string.
  - The separator is optional.
  - If the separator is omitted, the array elements are separated by commas.
  - If the separator is an empty string, the array elements are joined without any separator.

## Check an Array using isArray, indexOf, includes, concat (Module 29.4)

## Checking if the provided value is an array

- isArray(array) - returns true if the value is an array.
  - used this to check if the value is an array.
- concat(array1, array2) - concatenates two arrays and returns the result as a new array.
  - The result is an array that contains all the elements of the two arrays.

## Get part of an array and insert elements using slice, splice (Module 29.5)

- array can use a slice to get a part of the array. slice does not change the original array or string.

- array splice(start, deleteCount, item1, item2, ...) - removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements.
- start means the index of the first element to remove.
- deleteCount means the number of elements to remove. it can be 0.
- item1, item2, ... are the elements to insert into the array. they can be any value. if you don't want to insert any elements, you can omit them.

## Have fun with sort and reverse a javascript array (Module 29.6)

- sort() - sorts the elements of an array in place and returns the array. the default sort order is ascending, built upon converting the elements into strings, then comparing their sequences of UTF-16 code units values.
- reverse() - reverses the order of the elements in the array and returns the array. the first array element becomes the last and the last becomes the first.
- sort().reverse() - returns a new array with the elements of the sorted array in reverse order.

- sort(compareFunction) - sorts the elements of an array in place and returns the array.
  - compareFunction is a function that defines the sort order.
  - If a and b are elements in the array, then:
    - If compareFunction(a, b) is less than 0, sort a to an index lower than b,
    - If compareFunction(a, b) is greater than 0, sort b to an index lower than a,
    - Otherwise, leave a and b unchanged with respect to each other, but sorted with respect to all different elements.

## Unlimited parameters to a function using arguments (Module 29.7)

- arguments is an array-like object containing the arguments passed to a function.
- arguments is not a true JavaScript array, it is an object.
- using arguments.length to get the number of arguments passed to a function.
- using arguments[index] to get the value of an argument passed to a function.
- You can't use push, pop, shift, unshift, or splice on arguments.

## Different types of Error object and explore Try-catch (Module 29.8)

- Error object is a JavaScript object that represents an error.
  - Error object is a subtype of object.
- try-catch block is a block of code that you can use to execute statements and catch errors.
  - try-catch block is used to catch errors that occur in a function.
- finally block is a block of code that is always executed after the try-catch block.

  - finally block is used to clean up after the try-catch block.

  > simple idea given need to learn more about try-catch block.

## A simple introduction to Date object in JavaScript (Module 29.9)

- in javaScript, Date object is a built-in object that represents a point in time.
- time is created in milliseconds since January 1, 1970, 00:00:00 UTC. UTC means Coordinated Universal Time. UTC is the time standard used by the Internet. UTC is also called Greenwich Mean Time.
- moment.js is a JavaScript library that provides a way to work with dates and times.
- need to learn to compare between two dates.
- need to learn to convert between different date formats.
