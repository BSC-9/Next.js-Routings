"use client";
import React, { useState, useCallback } from 'react';

const ParentComponent = () => {
  const [count, setCount] = useState(0);

  const incrementCount = useCallback(() => {
    setCount(Countnew => Countnew + 1);
  }, []);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={incrementCount}>Increment Counter</button>
    </div>
  );
};

export default ParentComponent;
