import React from 'react'
import Calculator from './components/Calculator'
import Register from './components/Register'
import SearchApp from './components/SearchApp'
import UseMemoDemo from './components/UseMemoDemo'
import UseReducerDemo from './components/UseReducerDemo'

const App = () => {
  return (
    <div>
      <UseMemoDemo/><hr/>
      <UseReducerDemo/><hr/>
      <SearchApp/><hr/>
      <Calculator/>
      <Register/>
    </div>
  )
}

export default App

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
