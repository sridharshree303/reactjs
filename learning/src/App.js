import React from 'react';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import About from './components/About';
import Dashboard from './components/Dashboard';
import Home from './components/Home';
import InvalidPage from './components/InvalidPage';
import Services from './components/Services';
import Hoc from './Hoc';


const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/dashboard/:id' element={<Dashboard/>} />
          <Route path='/about' element={<About/>} />
          <Route path='/*' element={<InvalidPage/>} /> 
          <Route path='/services/:name' element={<Services/>} />     
        </Routes>
      </BrowserRouter>      
    </div>
  )
}

export default Hoc(App);


//-----------------------------------------------------------------

// import React,{useState} from "react";
// import Header from "./components/Header";
// import Content from "./components/Content";
// import States from "./components/States";
// import Props from "./components/Props";
// import EventHands from "./components/EventHands";


// //States in functional components - useState hook

// const App = () => {

//   const [data,setData] = useState ({
//     name : 'Sridhar',
//     age : 24,
//     city : 'Chennai'
//   })
//   let {name,age,city} = data;
//   return (
//     <div>
//       <center>
//         {/* <Header name={name}/>
//         <Content name ={name }/>
//         <States/>
//         <Props name={name} age={age} city={city} /> */}
//         <EventHands/>
//       </center>
//     </div>
//   )
// }

// export default App;

//--------------------------------------------------------------

// const App = () => {
//   let name = 'TejaSri';
  
//   return(
//     <div>
//        <center><hr/> 
//         <button> <h2> Hello {name}</h2></button>
//         <Header name="Sridhar"/>
//         <Content name="Teju"/>
//         <States />
//        </center>
//     </div>
//   )
// }

// export default App;

//----------------------------------------------------------------

// class App extends React.Component {
  
//   state = {
//     name : "Sridhar",
//     age : 24
//   }
//   render(){
//     let name = 'TejaSri';
//     return(
//       <div>
//         <center><hr/> 
//          <button> <h2> Hello {name}</h2></button>
//          <Header name="Sridhar"/>
//          <Content name="Teju"/>
//          <States />
//          <Props name={this.state.name} age={this.state.age}/>
//         </center>
//      </div>
//     )
//   }
// }

// export default App;


//-----------------------------------------------------------------

// import React from "react";

// class App extends React.Component {
//   render(){
//     return(
//       <div>
//         <center>
//         <h1>Hello Sridhar</h1>
//         </center>   
//       </div>
//     )
//   }
// }

// export default App;