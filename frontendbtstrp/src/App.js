import React from 'react'
import Alignment from './components/Alignment.js'
import NestedColumns from './components/NestedColumns.js'
import Offset from './components/Offset.js'
import Sample1 from './components/Sample1.js'
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Home from './Home.js'

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/sample1' element={<Sample1/>}/>
          <Route path='/alignment' element={<Alignment/>}/>
          <Route path='/offset' element={<Offset/>}/>
          <Route path='/nestedcolumns' element={<NestedColumns/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
