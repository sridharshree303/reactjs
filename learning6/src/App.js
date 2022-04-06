import React, { createContext, useState } from "react";
import './App.css'
import ClassCmp from "./components/ClassCmp";
import FunCmp from "./components/FunCmp";
import HooksDemo from "./components/HooksDemo";
import {BrowserRouter,Routes,Route, Link, useSearchParams} from 'react-router-dom';
import Page404 from "./components/Page404";
// import ComponentA from "./components/ComponentA";
// import ComponentC from "./components/ComponentC";
// import ComponentB from "./components/ComponentB";
// import Display from "./components/Display";
// import Count from "./components/Count";
import View from "./reducers/View";

// export const store = createContext();

const App = () =>{

  // const[data,setData] = useState(0);
  // const[data,setData] = useState([
  //   {
  //     brandname : 'Nokia'
  //   },
  //   {
  //     brandname : 'RealMe'
  //   },
  //   {
  //     brandname : 'Mi'
  //   }
  // ]);
  
  return(
    <div className="App">
      
        {/* <BrowserRouter>
          <Routes>
            <Route path='/' element={<HooksDemo/>}/>
            <Route path='/classcmp/:name' element={<ClassCmp/>}/>
            <Route path='/funcmp' element={<FunCmp/>}/>
            <Route path='*' element={<Page404/>}/>
            <Route path='/cmpA' element={<ComponentA/>}/>
            <Route path='/cmpB' element={<ComponentB/>}/>
            <Route path='/cmpC' element={<ComponentC/>}/>
          </Routes>
        </BrowserRouter> */}

      {/*----------------------------------------------------- */}
      {/* <store.Provider value={[data,setData]}>
        <ComponentA/>
        <ComponentB/>
        <ComponentC/>
        <h2 className="text-primary">--------------- Main Switch ---------------</h2>
        <button className='btn btn-success btn-md' type="button" onClick={()=>setData(data+1)} >Increment</button>   &nbsp;
        <button className='btn btn-danger btn-md' type="button" onClick={()=>setData(data-1)} >Decrement</button>
      </store.Provider> */}

      {/* ---------------------------------------------------- */}
      
      {/* <store.Provider value={[data,setData]}>
        <Count/>
        <Display/>
      </store.Provider> */}

      {/* -------------------------------------------------------- */}

      <View/>
    </div>
  )
}

export default App;