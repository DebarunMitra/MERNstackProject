const reverseString=require('./reverseString');

//string exist
test('reverse String function exist',()=>{
  expect(reverseString).toBeDefined();
});

//reverse string
test('String reverses',()=>{
  expect(reverseString('hello')).toEqual('olleh');
});


//reverse string uppercase
test('String reverses uppercase',()=>{
  expect(reverseString('HELLO')).toEqual('olleh');
});
