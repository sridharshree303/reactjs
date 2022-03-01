
import React,{useState} from "react";

const EventHands = () =>{
    const [data,setData] = useState({
        email : '',
        password :''
    });

    const changeHandler = (e) =>{
        setData({...data,[e.target.name]:e.target.value})
    }

    const submitHandler = (e) =>{
        e.preventDefault();
        alert('Submitted successfully');
        console.log(data);
    }

    return(
        <div>
            <center>
                <form onSubmit={submitHandler}>
                    <label>E-Mail</label><br/>
                    <input  type ='email' name="email" onChange={changeHandler}/>
                    <br/><br/>

                    <label>Password</label><br/>
                    <input type = 'password' name="password" onChange={changeHandler}/>
                    <br/><br/>

                    <button type='submit' value="Login">Login</button>
                </form>
            </center>
        </div>
    )

}

export default EventHands;
//--------------------------------------------------------------------------------------

// import React,{useState} from "react";

// const EventHands = () => {
//     const[name,setName] = useState('');
//     return(
//         <div>
//             Name : {name} <br/>
//             <input type="text" name="name" onChange={(e)=>setName(e.target.value)}/>
//         </div>
//     )
// }

// export default EventHands;

//--------------------------------------------------------------------------------------

// import React from 'react';

// const EventHands = () => {
//   return (
//     <div>
//            <button onClick={() => alert('Logined successfully')}>Login</button>
//     </div>
//   )
// }

// export default EventHands;

//----------------------------------------------------------------------------------

