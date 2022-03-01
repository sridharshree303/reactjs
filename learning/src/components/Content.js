import React from "react";

const Content = (props) => {
    return (
        <div>
            <h1>This is functional component by props and Username = {props.name}</h1>
        </div>
    )
}

export default Content;

//-------------------------------------------------------------------------

// const Content = (props) => {
//     return (
//         <div>
//             <h1> This is functional component -- {props.name}</h1>
//         </div>
//     )
// }

// export default Content;