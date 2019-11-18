const functions=require('./functions');

it('add 2+2 to equal 4',()=>{
  expect(functions.add(2,2)).toBe(4);
});

it('add 2.2+2.2 to equal 4.4',()=>{
  expect(functions.add(2.2,2.2)).toBe(4.4);
});
