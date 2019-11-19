const functions={
  add:(num1,num2)=>num1+num2,
  isNull:()=>null,
  isUndefined:()=>undefined,
  checkValue:(val)=>val,
  createUser:()=>{
    const user={firstName:"Debarun"};
    user['lastName']="Mitra";
    return user;
  }
};

module.exports=functions;
