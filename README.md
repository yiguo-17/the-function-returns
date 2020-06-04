# The Function Returns

### Setup

1. Navigate to this directory in your terminal.
2. Run `npm install` to install the testing library. (This is unnecessary if you have `jest` installed globally, but in case you don't...)
3. Preferably in a full-screen terminal, run `jest --watch-all` to start testing.


### Workflow

You'll be working in **`main.test.js`**, creating the variables needed with the values asked for, according to the specifications given in the tests. Check your terminal for feedback on which aspect of the problem you have yet to complete, and read the specifications' actual code implementation for extra help; it makes explicit exactly what outputs are expected given the test inputs.

There are three parts to this exercise:

1. Setting up global variables.
2. Writing functions that take parameters and use them to modify the global variables.
3. Writing functions that take parameters and return new values.


### Guidelines:

* Please do **not** call the non-returning functions; just declare them! You can call them to check for your own testing purposes, but then either delete or comment out the line. We'll be using our own functions soon enough!
* You CAN call the returning functions, as they can be called as often as we want without changing any global variables. (P.S. they should not have to change any global variables!)


### Tasks


* Create a variable named `greeting` and assign to it the value 'Hello'.
* Create a variable named `sum` and assign to it the value of 0.
* Create a variable named `prod` and assign to it the value of 0.


* Create a function named  `greet` that will take one parameter (a string) and the function will change the value of `greeting` to 'Hello ' plus whatever the value of the parameter is going to be.
* Create a function named  `sumOfTwo` that will take two parameters (which will be numbers). The function will change the value of `sum` to be equal to the sum of the two parameters.
* Create a function named  `multiply` that will take three parameters (which will be numbers). The function will change the value of `prod` to be equal to the product of the three parameters.


Let's RETURN stuff!

* Create a function named  `returnWhatISay` that will take a string sentence and returns that sentence unchanged.

* Create a function named  `sayHi` that will take one parameter and return a personalized greeting like these examples:

   INPUT:  sayHi("Charlotte"); 

   OUTPUT:  "Hello Charlotte!";

   INPUT:  sayHi("Colin"); 

   OUTPUT:  "Hello Colin!";


* Create a function named  `divide` that will take two parameters and return the result of dividing the first by the second.

* Create a function named `remainder` that takes two parameters and return the remainder that we get when those two numbers get divided.
