
import React,{useContext} from 'react';
import { store } from '../App';

const ComponentA = () => {
  const [data,setData] = useContext(store)

  return (
    <div className="card">
        <center>
          <h3>ComponentA {data}</h3>
        </center>
    </div>
  )
}

export default ComponentA
