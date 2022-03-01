import React from 'react'
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';


const Dashboard = () => {
  const params = useParams();     // path params
  const username = 'Sridhar';
 
  return (
    <div>
      <center>
          <h2>Welcome to Dashboard page</h2>
          <p>Name : {params.id}</p>
          <button><Link to={`/services/${username}`}>Services</Link></button>
      </center>
    </div>
  )
}

export default Dashboard
