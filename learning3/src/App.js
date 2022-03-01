import React from 'react';
import './App.css';
import {connect} from 'react-redux';
import {incplayerone,decplayerone,incplayertwo,decplayertwo,incplayeroneown} from './actions'


function App({playerone,playertwo,incplayerone,decplayerone,incplayertwo,decplayertwo,incplayeroneown}) {
  return (
    <div className="App">
      <center >
        <h3 >Playerone Details</h3>
        <p>Name : {playerone.name}|{' '} Score : {playerone.score}</p>
        <button onClick={()=>incplayerone()}>Increment</button>{' '}
        <button onClick={()=>decplayerone()}>Decrement</button>
        <br/><hr/>

        <h3 >Playertwo Details</h3>
        <p>Name : {playertwo.name}|{' '} Score : {playertwo.score}</p>
        <button onClick={()=>incplayertwo()}>Increment</button>{' '}
        <button onClick={()=>decplayertwo()}>Decrement</button><br/><hr/>
        
        <h3 >Playerone Details</h3>
        <p>Name : {playerone.name}|{' '} Score : {playerone.score}</p>
        <button onClick={()=>incplayeroneown(6)}>Increment</button>{' '}
        {/* <button onClick={()=>decplayerone()}>Decrement</button> */}
        <br/><hr/>
      </center>
    </div>
  );
}

const mapStateToProps = state =>({
  playerone : state.playerone,
  playertwo : state.playertwo
});

export default connect(mapStateToProps,{incplayerone,decplayerone,incplayertwo,decplayertwo,incplayeroneown}) (App);
