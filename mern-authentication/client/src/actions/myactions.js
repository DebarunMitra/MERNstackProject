import axios from 'axios';

export const fetchUserAction = ()=>{
   return (dispatch)=>{

    axios.get('/auth/verify')
    .then((res)=>{
      console.log(res.data);
       dispatch({type:'GET_USER',payload:res.data})
    })

   }
}
