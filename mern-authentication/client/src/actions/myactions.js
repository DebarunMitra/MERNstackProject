import axios from 'axios';

export const fetchUserAction = ()=>{
   return (dispatch)=>{

    axios.get('http://localhost:5020/auth/verify')
    .then((res)=>{
       dispatch({type:'GET_USER',payload:res.data})
    })

   }
}
