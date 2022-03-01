import React from 'react';
import {connect} from 'react-redux';
import { incplayerone,decplayerone,incplayertwo,decplayertwo,incplayeroneownscore } from './Actions/actions';

const App = ({playerA,playerB,incplayerone,decplayerone,incplayertwo,decplayertwo,incplayeroneownscore}) => {
  return (
    <div>
      <center>
      <h3>PlayerA details</h3>
      <p>Name : {playerA.name} | Score:{playerA.score}</p>
      <button type="button" onClick={()=>incplayerone()}>Increment</button>{' '}
      <button type="button" onClick={()=>decplayerone()}>Decrement</button>{' '}
      <button type="button" onClick={()=>incplayeroneownscore(10)}> +10 </button>
      <hr/>
      <h3>PlayerB details</h3>
      <p>Name : {playerB.name} | Score:{playerB.score}</p>
      <button type="button" onClick={()=>incplayertwo()}>Increment</button>{' '}
      <button type="button" onClick={()=>decplayertwo()}>Decrement</button>{' '}
      <hr/>
      </center>
    </div>
  )
}

const mapStateToProps = state =>({
  playerA : state.playerone,
  playerB : state.playertwo
})

export default connect(mapStateToProps,{incplayerone,decplayerone,incplayertwo,decplayertwo,incplayeroneownscore})(App);
