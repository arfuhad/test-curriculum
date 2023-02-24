import React from 'react';
import "./style.css";

const UseStates = () => {
  // const initData = 0;
  const [count, setCount] = React.useState(0);

  return (
    <>
      <div className='center_div'>
        <p>{count}</p>
        <div className='button2' onClick={() => setCount(count + 1)}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          INCREMENT
        </div>
        <div className='button2' onClick={() => count > 0 ? setCount(count - 1) : setCount(0)}>
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

export default UseStates;