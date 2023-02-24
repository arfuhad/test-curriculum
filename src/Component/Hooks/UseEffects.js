import React from 'react';
import "./style.css";

const UseEffects = () => {
  // const initData = 0;
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    // console.log("hii");
    document.title = `Chats(${count})`;
  });

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
      </div>
    </>
  );
};

export default UseEffects;