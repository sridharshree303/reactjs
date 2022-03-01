import React,{useState} from 'react';

const App = () =>{
  const [data,setData] = useState({                        //useEffect and firebase DB with postData
    name:'',
    age:''
  })

  const changeHandler = (e) =>{
    setData({...data,[e.target.name]:e.target.value});
  }

  const submitHandler = (e) =>{
    e.preventDefault();
    fetch('https://test-api-5994e-default-rtdb.firebaseio.com/data.json',
    {
      method :'POST',
      body:JSON.stringify(data),
      headers:{
        "Content-Type":"application/json;charset=UTF-8"
      }
    }
    ).then(res => alert('Data Posted')).catch(err=>console.log(err))
  }

  return(
    <div>
        <center>
          <form onSubmit={submitHandler}>
            <label>Name</label><br/>
            <input type="text" name="name" onChange={changeHandler}/><br/>
            <label>Age</label><br/>
            <input type="text" name="age" onChange={changeHandler} /><br/>
            <input type="submit" value="Post Data" />
          </form>
        </center>
    </div>
  )
}

export default App;


//-------------------------------------------------------------------------------------------

// import React from 'react';
// import { useEffect,useState } from 'react';

// const App = () => {
//   const [data,setData] = useState([]);

//   useEffect(()=>{
//     fetch('https://github.com/sridharshree303/FrontEnd/blob/main/SampleJsonData.json').then(
//       response => response.json()
//     ).then(json => setData(json.items))
//   },[])

//   return (
//     <div className='App'>
//       <center>
//        <h2>Hello world</h2>
//        {data.map((item)=><p key={item.id}>{item.name}</p>)}
//        </center>
//     </div>
//   )
// }

// export default App;

//------------------------------------------------------------------------------------------------------
