import React from "react";

const Hoc = (Component) => {
    return(
        class extends React.Component{
            state = {
                auth : true
            }
            render(){
                return(
                    <div>
                        {this.state.auth ? <Component/> : <h2> Please login here </h2> }
                    </div>
                )
            }
        }
    )
}

export default Hoc;












// const Hoc = (Component) => {
//     return(
//         class extends React.Component{
//             state = {
//                 auth : true
//             }
//             render(){
//                 return(
//                     <div>
//                         {this.state.auth ? <Component/> : <h2>Please login with Credintials</h2>}
//                     </div>
//                 )
//             }
//         }
//     )
// }

// export default Hoc;