import React from 'react';
import "./style.css";

const reducer = (state, action) => {
  if(action.type === 'incr'){
    state = state + 1;
  }
  if(state > 0 && action.type === 'decr'){
    state = state - 1;
  }
  return state;
};

const UseReducers = () => {
  const initData = 0;
  const [state, dispatch] = React.useReducer(reducer, initData);

  return (
    <>
      <div className='center_div'>
        <p>{state}</p>
        <div className='button2' onClick={() => dispatch({type: 'incr'})}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          INCREMENT
        </div>
        <div className='button2' onClick={() => dispatch({type: 'decr'})}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          DECREMENT
        </div>
      </div>
    </>
  );
};

export default UseReducers;