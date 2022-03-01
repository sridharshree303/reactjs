import React from "react";
import { Link, useParams } from "react-router-dom";

const Services = ()  => {
    let param = useParams();
    return(
        <div>
            <center>
                <h1> This is Services page </h1>
                <button><Link to='/'>Home</Link></button>
                <p> UserName : {param.name} </p>
                <button><Link to={`/about?name=${param.name}&age=${24}`}>About</Link></button>
            </center>
        </div>
    )
}

export default Services;