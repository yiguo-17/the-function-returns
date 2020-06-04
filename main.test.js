/******************
 * YOUR CODE HERE *
 ******************/





/*********************************************************************************************************************

 * CODE BELOW HERE IS FOR INTERNAL USE ONLY! IT ENSURES THAT THE TESTING *
 * CAN READ AND EVALUATE YOUR CODE. *
 * DON'T CHANGE ANYTHING BELOW HERE, PLEASE! *

 *********************************************************************************************************************/

if (typeof greeting === 'undefined') {
  greeting = undefined;
}

if (typeof sum === 'undefined') {
  sum = undefined;
}

if (typeof prod === 'undefined') {
  prod = undefined;
}

if (typeof greet === 'undefined') {
  greet = undefined;
}

if (typeof sumOfTwo === 'undefined') {
  sumOfTwo = undefined;
}

if (typeof multiply === 'undefined') {
  multiply = undefined;
}

if (typeof sayHi === 'undefined') {
  sayHi = undefined;
}

if (typeof returnWhatISay === 'undefined') {
  returnWhatISay = undefined;
}

if (typeof divide === 'undefined') {
  divide = undefined;
}

if (typeof remainder === 'undefined') {
  remainder = undefined;
}

describe('greet', () => {
  it(`Adds hello to the parameter name and puts it in greeting'`, () => {
    greet('mess')
    expect(greeting).toBe('Hello mess')
  })
});

describe('sumOfTwo', () => {
  it(`adds the two parameters and puts the result in sum`, () => {
    sumOfTwo(2, 4);
    expect(sum).toEqual(6);
  })
});

describe('multiply', () => {
  it(`multiplies the three parameters and puts the result in prod`, () => {
    multiply(2, 2, 2);
    expect(prod).toBe(8);
  })
});

describe('returnWhatISay', () => {
  it(`returns the given string unchanged`, () => {
    const returnValue1 = returnWhatISay('Colin');
    expect(returnValue1).toEqual('Colin');
    const returnValue2 = returnWhatISay('Mesuara');
    expect(returnValue2).toEqual('Mesuara');
  })
});

describe('sayHi', () => {
  it(`takes the given parameter and adds 'Hello ' before it (note the space!), returning the result`, () => 
    const returnValue1 = sayHi('Colin')
    expect(returnValue1).toEqual(`Hello Colin!`);
    const returnValue2 = sayHi('Mesuara')
    expect(returnValue2).toEqual(`Hello Mesuara!`);
  })
});

describe('divide', () => {
  it(`divides the first parameter by the second parameter and returns the result`, () => {
    const returnValue1 = divide(10, 5)
    expect(returnValue1).toEqual(2);
    const returnValue2 = divide(84, 7)
    expect(returnValue2).toEqual(12);
  })
});

describe('remainder', () => {
  it(`returns the remainder you get when you divide the first parameter by the second parameter`, () => {
    const returnValue1 = remainder(10, 3)
    expect(returnValue1).toEqual(1);
    const returnValue2 = remainder(10, 4)
    expect(returnValue2).toEqual(2);
    const returnValue3 = remainder(10, 5)
    expect(returnValue3).toEqual(0);
    const returnValue4 = remainder(13, 5)
    expect(returnValue4).toEqual(3);
  })
});
