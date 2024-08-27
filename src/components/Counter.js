import React, { useState } from "react";
import "./Counter.css";

function Counter() {
  let [a, b] = useState(0);

  function clickHandlerIncrement() {
    b(a + 1);
  }

  function clickHandlerDecrement() {
    b(a - 1);
  }

  return (
    <div>
      <div className="counter-container">
        {/* <span className="plus" onClick={clickHandlerIncrement}>
        +
      </span> */}
        <span className="plus" onClick={clickHandlerIncrement}>
          +
        </span>
        <span>|</span>
        <span className="main-number">{a}</span>
        <span>|</span>
        <span className="minus" onClick={clickHandlerDecrement}>
          -
        </span>
      </div>
      <button onClick={() => b((a = 0))}>Reset</button>;
    </div>
  );
}

export default Counter;
