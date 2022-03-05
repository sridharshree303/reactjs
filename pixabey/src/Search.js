import React,{useEffect,useState} from 'react';
import axios from 'axios';
// import Home from './Home'
import { useHistory, useLocation } from 'react-router-dom';

const Search = () => {
  let {search} = useLocation();
  let params = new URLSearchParams(search);
  const [data,setData] = useState([]);
  const history = useHistory();
  useEffect(()=>{
      axios.get(`https://pixabay.com/api/?key=25967398-f6f1b18d4101cb8929670a1b1&q=${params.get('name')}&image_type=photo
      `).then(
          response =>{
              if(response.length>0){
                setData(response.data.hits)
              }else{
                  return 'No Data Found';
              }
          }
      )
  },[])

  return (
    <div className='search'>
      <div className='row'>
         {/* <div> <Home/></div> */}
          {data &&
            data.map((imgObj,id) => 
                <div className='card' key={id}>
                    <a  onClick={()=> history.push(`/newtab?name=${imgObj.largeImageURL}`)}  >
                    <img className='card-img-top' src={imgObj.largeImageURL} height="200" width="200" />
                    </a>
                    <div className='card-title'>
                        <h5 className='card-title ' align="center" >{imgObj.tags}</h5>
                    </div>
                </div>
                )
          }
      </div>
    </div>
  )
}

export default Search
