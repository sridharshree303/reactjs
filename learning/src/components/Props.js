import React from "react";

const Props = (props) => {
  return (
    <div>
      <h2>Name : {props.name}  <br/> 
          Age : {props.age}<br/>
          City : {props.city}</h2>
    </div>
  )
}

export default Props;

//--------------------------------------------------------------------------

// class Props extends React.Component {
//     render() {
//         return (
//             <div>
//                 <h2> This is Props in class component -- {this.props.name} and Age : {this.props.age}</h2>
//             </div>
//         )
//     }
// }

// export default Props;

//------------------------------------------------------------------------------

// const Props = (props) => {
//   return(
//     <div>
//       <h2>Hello Mr.{props.name}</h2>
//     </div>
//   )
// }

// export default Props;