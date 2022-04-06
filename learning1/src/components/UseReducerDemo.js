import React, { useReducer } from 'react';

const initialState = {
    count : 0
};

function reducer(state=initialState,action){
    // const [type,payload] = action;
    switch (action.type){
        case 'increment' :
            return {count:state.count + 1};
        case 'decrement' :
            return {count:state.count - 1};
        default:
            throw new Error();
    }
}

const UseReducerDemo = () => {
  const [state,dispatch] = useReducer(reducer,initialState);
  return (
    <div>
      <center>
          Count: {state.count}
          <button onClick={() => dispatch({type: 'decrement'})}>-</button>
          <button onClick={() => dispatch({type: 'increment'})}>+</button>
      </center>
    </div>
  );
}

export default UseReducerDemo
