import React from 'react';
import { useLocation } from 'react-router-dom';

const NewTab = () => {
  const {search} = useLocation();
  const params = new URLSearchParams(search);
  return (
    <div>
      
          <img src={params.get('name')} />
    </div>
  )
}

export default NewTab
