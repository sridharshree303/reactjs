import React from 'react'
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className='container'> 
      <div className='row align-items-center justify-content-center'>
      <h3>Components are linked in below </h3>
        <div className='Row col-sm col-sm-auto col-md-auto col-lg-auto col-xl-auto  '> 
            <Link to='/sample1' ><button>Sample1</button></Link> &nbsp; 
            <Link to="/alignment" ><button>Alignment</button></Link>&nbsp;
            <Link to="/offset" ><button>Offset</button></Link>&nbsp;
            <Link to="nestedcolumns" ><button>NestedColumns</button></Link>&nbsp;
        </div>
      </div><br/>
    </div>
  )
}

export default Home
