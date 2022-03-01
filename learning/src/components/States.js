
import React,{useState} from "react";

const States = () => {
  // const[data,setData] = useState('Sri');
  const [data,setData] = useState ({
    name: 'Sridhar',
    age : 24,
    city : 'chennai'
  });

  let {name,age,city} = data;

  return (
    <div>
      <h1>This is useState Hook practice on states</h1>
      <h1>Name = {name} Age = {age} city = {city}</h1>
    </div>
  )
}

export default States;

//-------------------------------------------------------------------------------

// const States = () => {
//   const[user,setUser] = useState('Sri');
//   const [data,setData] = useState({
//     name : 'Teju',
//     age : 22,
//     city : 'Hyderabad'
//   });
//   let {name,age,city} = data;

//   return (
//     <div>
//       <h2> This is useState Hook practice and by - {user}</h2>
//       <h2> Name : {name} <br/> Age : {age} <br/> City : {city} </h2>
//     </div>
//   )
// }

// export default States;



//-------------------------------------------------

// class States extends React.Component {
//     state = {
//         name : 'sridhar',
//         frnd : 'teju'
//     }
//     render(){
//         return(
//         <div>
//            <h2>My name : {this.state.name} and My friend name : {this.state.frnd}</h2>
//         </div>
//         );
//     }
// };

// export default States;

//---------------------------------------------------
//functional component

// const States = () => {
//     let name = 'Sridhar Kolluru';
//     return(
//         <div>
//             <center>
//                 <h2>Welcome Mr.{name}</h2>
//             </center>
//         </div>
//     )
// }

// export default States;