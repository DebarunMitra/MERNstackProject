const functions=require('./functions');

it('add 2+2 to equal 4',()=>{
  expect(functions.add(2,2)).toBe(4);
});

it('add 2.2+2.2 to equal 4.4',()=>{
  expect(functions.add(2.2,2.2)).toBe(4.4);
});

//CHECK FOR TRUTHY & FALSY VALUES
//toBeNull matches only Null
//toBeUndefined matches only Undefined
//toBeDefined matches only opposit of toBeUndefined
//toBeTruthy matches anything that an if statement treats as true
//toBeFalsy matches anything that an if statement treats as false

test('Should be null',()=>{
  expect(functions.isNull()).toBeNull();
});

test('Should be undefined',()=>{
  expect(functions.isUndefined()).toBeUndefined();
});

test('Should be FALSY',()=>{
  expect(functions.isUndefined()).toBeUndefined();
});

test('Should be FALSY',()=>{
  expect(functions.checkValue(null)).toBeFalsy();
});

test('Should be Truthy',()=>{
  expect(functions.checkValue(1)).toBeTruthy();
});
