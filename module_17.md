# Variable Declaration (17.3)

- Variable declare with `var` keyword than a variable name proceeding by a equal sign (=) than a value at last a semi colon (;).

  `var age = 21;`

- Variable value can be Numeric, String and Boolean.
- String value are declared inside a double quote("") or a single quote (''). only one should be used.

```
  var name = "Maksudur Rahman";
  or
  var name = 'Maksudur Rahman';
```

- There are only 2 value for Boolean Data type. 'true' and 'false'.

  `var open = true;`

# Variable Keyword, Variable Name and Naming Convention (17.4)

- Variable keyword `var` should be declare in all lowercase letter.
- Can't use JS keyword/reserved word as variable name.
- Name should be only one word, can't have quote.
- Best practice is to use camel case letter for variable naming.

  `var myName = 'Maksud'`

- Name can't have number in first letter,
- Variable name are case sensitive.

# Mathematical Operation (17.5)

- Similar like mathematics. 😋
- Operation can be stored in another variable.
- " +(add) -(subtractions) /(division) (Multiplication) "
- Modulus operation (%) means Reminder after Division.

# Mathematical Operation Advanced (17.6)

- shorthand of mathematical operation

```
var price1 = 20;
var price2 = 40;

price1 += 5; // same as price1 + 5
price1 -= 5; // same as price1 + 5

```

- if want to add only 1 with the numeric variable then the shorthand will be

```
var age = 27;
age++; // output 28 similar like age + 1
age--; // output 27 similar like age - 1
```

# Type Conversion, Concatenation,Integer, Float, parseInt, parseFloat Advanced (17.6)

- JS convert string numeric value into Number when we do Mathematical operation between two string numeric value.
- To convert a numeric string to a integer we can use `parseInt` and to convert numeric decimal string value to a float no we can use `parseFloat`.

# Variable Types

- `typeof` keyword can be used to know any variable value's data type.
- 2 type of data type _Primitive Data Type_ and _Non-primitive Data Type_.
- 5 Primitive Data types are `Number, String, Boolean, Null and Undefined`
- 3 Non-primitive data types are `Object, Function, Array`.
- `toFixed` number of digits after the decimal points and convert the number in a string numeric value.
