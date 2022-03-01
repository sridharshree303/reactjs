import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import App from "./App";

ReactDOM.render(
  <App />,
  document.getElementById('root')
  
);

reportWebVitals();

//---------------------------------------------------------------

// function tick() {
//   const element = (
//     <div>
//       <h1>Hello, world!</h1>
//       <h2>It is {new Date().toLocaleTimeString()}</h2>  
//     </div>
//   );
//   ReactDOM.render(element, document.getElementById('root'));
// }

// setInterval(tick, 1000);

//-----------------------------------------------------------------

// Package.json : contains dependencies of the project
// Node-modules : contains necessary libraries for the project
// Index.html : The first page which renders on screen,that contains 'root'
// Index.js : Renders with root and connects index.html and App.js
// App.js : First component that appears on screen
// Manifest.json : contains project metadata

//---------------------------------------------------------------
// const name = 'Josh Perez';
// const element = <h1>Hello, {name}</h1>;

// ReactDOM.render(
//   element,
//   document.getElementById('root')
// );
// reportWebVitals();

//-------------------------------------------------------------------

// function formatName(user) {
//   return user.firstName + ' ' + user.lastName;
// }

// const user = {
//   firstName: 'Harper',
//   lastName: 'Perez'
// };

// const element = (
//   <h1>
//     Hello, {formatName(user)}
//   </h1>
// );

// ReactDOM.render(
//   element,
//   document.getElementById('root')
// );

// reportWebVitals();

//-------------------------------------------------------------

// import React from 'react';
// import ReactDOM from 'react-dom';
// import reportWebVitals from './reportWebVitals';
// import App from './App';

// ReactDOM.render(
//   <App/>,document.getElementById('root')
// );

// reportWebVitals();