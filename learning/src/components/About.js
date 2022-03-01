import React from 'react';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';

const About = () => {
  let {search} = useLocation();                  //query params
  let params = new URLSearchParams(search);
  console.log(search);
  return (
    <div>
      <center>
          <h2>This is About page</h2>
          <p>Name : {params.get('name')}</p>
          <p>Age : {params.get('age')}</p>

          <button><Link to ='/'>Home</Link></button>
      </center>
    </div>
  )
}

export default About;
