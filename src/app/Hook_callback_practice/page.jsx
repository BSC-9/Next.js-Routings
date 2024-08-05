"use client";
import React, { useState, useCallback } from 'react';

const ParentComponent = () => {
  const [count, setCount] = useState(0);

  const incrementCount = useCallback(() => {
    setCount(countNew => countNew + 1);
  }, []);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={incrementCount} className='p-5 bg-red-400 text-white'>Increment Counter</button>
    </div>
  );
};

export default ParentComponent;
