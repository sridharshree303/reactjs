import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

const Sample1 = (props) => {
  const [data,setData] = useState({
      name : 'Tejasri',
  })

  const {search} = useLocation();
  const params = new URLSearchParams(search);
  // console.log(search); 

  const {name,age} = data;
  return (
    <div>
      <h2>My Name is {data.name}</h2>
      <h3>Age is : {props.age}</h3>
      <Link to='/'>HooksDemo</Link> &nbsp;
      <Link to={`/classcmp/${name}`}>ClassCmp</Link>&nbsp;
      <Link to='/funcmp'>FunCmp</Link>&nbsp;
      <div>
        <h3>
        Query param deatils :<br/>
            Name : {params.get('name')}<br/>
            Age  : {params.get('age')}
        </h3>
      </div>
    </div>
  )
}

export default Sample1;
