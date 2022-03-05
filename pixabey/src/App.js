import './App.css';
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import Home from './Home';
import React from 'react'
import Search from './Search';
import NewTab from './NewTab';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/search" exact component={Search} />
          <Route path="/newtab" exact component={NewTab} />
        </Switch>
      </BrowserRouter>
    </div>
  )
}

export default App;

