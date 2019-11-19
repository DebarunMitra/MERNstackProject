const functions=require('./functions');

//addition test 1
it('add 2+2 to equal 4',()=>{
  expect(functions.add(2,2)).toBe(4);
});

//addition test 2
it('add 2.2+2.2 to equal 4.4',()=>{
  expect(functions.add(2.2,2.2)).toBe(4.4);
});

//CHECK FOR TRUTHY & FALSY VALUES
//toBeNull matches only Null
//toBeUndefined matches only Undefined
//toBeDefined matches only opposit of toBeUndefined
//toBeTruthy matches anything that an if statement treats as true
//toBeFalsy matches anything that an if statement treats as false

//null test
test('Should be null',()=>{
  expect(functions.isNull()).toBeNull();
});

//undefined test
test('Should be undefined',()=>{
  expect(functions.isUndefined()).toBeUndefined();
});

//falsy test
test('Should be FALSY',()=>{
  expect(functions.isUndefined()).toBeUndefined();
});

//falsy test
test('Should be FALSY',()=>{
  expect(functions.checkValue(null)).toBeFalsy();
});

//Truthy test
test('Should be Truthy',()=>{
  expect(functions.checkValue(1)).toBeTruthy();
});

it('should be Debarun Mitra',()=>{
  expect(functions.createUser()).toEqual({
    firstName:'Debarun',
    lastName:'Mitra'
  })
})

//Less Than & greater than
test('should be under 1600',()=>{
  const load1=800;
  const load2=700;
  expect(load1+load2).toBeLessThan(1600);
})

//regx
test('There is no D in the team',()=>{
  expect('team').not.toMatch(/D/i);
})

//array
test('Admin should be in username',()=>{
  username=['john','karen','admin'];
  expect(username).toContain('admin');
})

//working with async data
test('User fetch name should be Leanne Graham',()=>{
  expect.assertions(1);
  return functions.fetchUser().then(data=>{
    expect(data.name).toEqual('Leanne Graham');
  });
})
