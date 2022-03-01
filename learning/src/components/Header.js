import React from "react";

class Header extends React.Component {
    render(){
        return(
            <div>
                <h1>This is class component by props and Username = {this.props.name}</h1>
            </div>
        );
    }
}

export default Header;

//---------------------------------------------------------------------------------------------

// class Header extends React.Component {
//     render(){
//         return <div><h2>This is class component -- {this.props.name}</h2></div>
//     }
// }

// export default Header;

//---------------------------------------------------------------------------------------------

// class Header extends React.Component{
//     render(){
//         return(
//             <div>
//                 <h1>This is {this.props.name}</h1>
//             </div>
//         )
//     }
// }

// export default Header;
