import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  const user = "John";
  return (
    <div>
      <center>
          <h2>Welcome to home page</h2>
          <button><Link to={`/dashboard/${user}`} > Dashboard  </Link></button>{" "}
          <button> <Link to={`/about?name=${user}&age=${26}`}> About </Link></button>
      </center>
    </div>
  )
}

export default Home
