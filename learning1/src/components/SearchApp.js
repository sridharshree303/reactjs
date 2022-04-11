import React, { useState } from 'react';
import cityData from './city.json';

const SearchApp = () => {
  const [search,setSearch] = useState('');
  return (
    <div>
        <center>
            <h4 >Enter your city : </h4>
            <input className='m-2 ' type="text" value={search}
                    onChange={(e)=>setSearch(e.target.value)} /> <br/>
            {cityData.filter(city=>city.name.toLowerCase().includes(search)).map(city=>
                <div style={{"border":"1px solid",
                             "padding":"10px",
                             "margin":"10px",
                             "maxWidth":"30%"}}key={city.id}>
                    {city.name}
                </div>    
            )}
      </center>
    </div>
  )
}

export default SearchApp;
