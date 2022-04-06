// import React, { useContext, useState } from 'react'
// import { store } from '../App'

// const Display = () => {
//     const [data,setData] = useContext(store);
//     const [brand,setBrand] = useState('');

//     const submitHandler = e =>{
//         e.preventDefault();
//         setData([...data,{brandname:brand}]);
//     }

//   return (
//     <div className='card'>
//       <div className='card-body'>
//           <h3>Component Display</h3>
//               {data.map(item => <h3 className='card-title'>{item.brandname}</h3>)}
//               <form className='form row' onSubmit={submitHandler}>
//                   <input type="text" className="card col-3 offset-4" placeholder='Enter BrandName' 
//                             onChange={(e)=>setBrand(e.target.value)} /> &nbsp;
//                   <input type="submit" className='col-1 btn btn-primary btn-sm' value="Add"/>
//               </form>
//       </div>
//     </div>
//   )
// }

// export default Display;
