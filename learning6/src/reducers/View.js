import React from 'react'
import {connect} from 'react-redux';
import { incplayerone,decplayerone,incplayertwo,decplayertwo,incplayeroneownscore} from '../actions/Action';

const View = ({playerA,playerB,incplayerone,decplayerone,incplayertwo,decplayertwo,incplayeroneownscore}) => {
  return (
    <div className='card card-body row'>
      <h3>Playerone details</h3>
      <p>Name : {playerA.name} | {' '} Score : {playerA.score}</p>
        <span>
          <button className='btn btn-warning ' type="button" onClick={()=>incplayerone()}>Increment</button> &nbsp;
          <button className='btn btn-info ' type="button" onClick={()=>decplayerone()}>Decrement</button>  &nbsp;
          <button className='btn btn-primary ' type="button" onClick={()=>incplayeroneownscore(10)}>+10</button>
        </span>
      <br/>
      <h3>Playertwo details</h3>
      <p>Name : {playerB.name} | {' '} Score : {playerB.score}</p>
      <span>
        <button className='btn btn-warning col-2' type="button" onClick={()=>incplayertwo()}>Increment</button> &nbsp;
        <button className='btn btn-info col-2' type="button" onClick={()=>decplayertwo()}>Decrement</button>
    </span>
    </div>
  )
}

const mapStateToProps = state =>({
    playerA : state.playerone,
    playerB : state.playertwo
  })

export default connect(mapStateToProps,{incplayerone,incplayertwo,decplayerone,decplayertwo,incplayeroneownscore}) (View)
