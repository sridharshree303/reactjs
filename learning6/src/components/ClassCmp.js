import React from "react";
import { useParams } from "react-router-dom";

const ClassCmp = () =>{
    let params = useParams();
    return(
        <div>
            <h3>This is Class component</h3>
            <h4>My GirlFriend : {params.name}</h4>
        </div>
    )
}

export default ClassCmp;