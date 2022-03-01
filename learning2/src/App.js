
import React,{createContext,useState} from 'react';
import Count from './components/Count';
import Display from './components/Display';


export const store = createContext();

const App = () => {

  const [data,setData] = useState([
    {
      brandname : 'Nokia'
    },
    {
      brandname : 'Realme'
    },
    {
      brandname : 'Apple'
    }
  ]);

  return (
    <div>
    <store.Provider value={[data,setData]}>
      <center>
        <Count/>
        <Display/>
      </center>
    </store.Provider>
    </div>
  )
}

export default App


//---------------------------------------------------------------------

// import React,{createContext,useState} from 'react';
// import ComponentA from './components/ComponentA';
// import ComponentB from './components/ComponentB';

// export const store = createContext();

// const App = () => {

//   const [data,setData] = useState(0);

//   return (
//     <store.Provider value={[data,setData]}>
//       <center>
//         <ComponentA/>
//         <ComponentB/>
//         <button onClick={()=>setData(data+1)}>Increment</button>
//       </center>
//     </store.Provider>
//   )
// }

// export default App



//-----------------------------------------------------------------------------------------
     // storing json data in firebase

// import React from 'react';
// import { useState } from 'react';

// const App = () => {

//   const [data,setData] = useState({
//     name : '',
//     password : ''
//   })

//   const changeHandler = e =>{
//     setData({...data,[e.target.name]:e.target.value})
//   }

//   const submitHandler = e =>{
//     e.preventDefault();
//     fetch('https://my-project-1576494454212-default-rtdb.firebaseio.com/data.json',
//     {
//       method : 'POST',
//       body : JSON.stringify(data),
//       headers:{
//         "Content-type":"application/json;charset = UTF-8"
//       }
//     }
//     ).then(res => alert("Data posted")).catch(err =>console.log(err))
//     console.log(data);
//   }

//   return (
//     <div>
//       <center>
//         <form onSubmit={submitHandler}>
//           <label>Name  </label><br/>
//           <input type="text" name="name" onChange={changeHandler}/>
//           <br/>
//           <label>Password  </label><br/>
//           <input type="text" name="password" onChange={changeHandler}/>
//           <br/>
//           <input type="submit" value="click here"/>
//         </form>
//       </center>
//     </div>
//   )
// }

// export default App
