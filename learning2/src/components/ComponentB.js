
import React,{useContext} from 'react';
import { store } from '../App';

const ComponentB = () => {
    const [data,setData] = useContext(store);
  return (
    <div>
      <center>
          <h3> ComponentB {data}</h3>
      </center>
    </div>
  )
}

export default ComponentB
