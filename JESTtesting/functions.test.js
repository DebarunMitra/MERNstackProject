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
