import React, { useState } from 'react';
import './Counter.scss'; // Import the SCSS file for styling
function Counter() {
    const [count, setCount] = useState(1);
    
    return (
      <div className="counter">
        <button className="counter-btn" onClick={() => count > 1 && setCount(count - 1)}>-</button>
        <span className="counter-value">{count}</span>
        <button className="counter-btn" onClick={() => setCount(count + 1)}>+</button>
      </div>
    );
  }

  export default Counter;
