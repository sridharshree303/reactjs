// import React,{useState} from 'react'

// const Other = () => {
//     const [data,setData] = useState({                        //useEffect and firebase DB with postData
//         name:'',
//         age:''
//       })
    
//       const changeHandler = (e) =>{
//         setData({...data,[e.target.name]:e.target.value});
//       }
    
//       const submitHandler = (e) =>{
//         e.preventDefault();
//         fetch('https://test-api-5994e-default-rtdb.firebaseio.com/data.json',
//         {
//           method :'POST',
//           body:JSON.stringify(data),
//           headers:{
//             "Content-Type":"application/json;charset=UTF-8"
//           }
//         }
//         ).then(res => alert('Data Posted')).catch(err=>console.log(err))
//       }
    
//       return(
//         <div>
//             <center>
//               <form onSubmit={submitHandler}>
//                 <label>Name</label><br/>
//                 <input type="text" name="name" onChange={changeHandler}/><br/>
//                 <label>Age</label><br/>
//                 <input type="text" name="age" onChange={changeHandler} /><br/>
//                 <input type="submit" value="Post Data" />
//               </form>
//             </center>
//         </div>
//       )
//     }

// export default Other
