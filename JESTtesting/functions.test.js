const functions=require('./functions');

test('add 2+2 to equal 4',()=>{
  expect(functions.add(2,2).tobe(4));
});
