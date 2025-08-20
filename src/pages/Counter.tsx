import React from "react";

const Counter: React.FC = () => {
  const [count, setCount] = React.useState(0);
  const increment = () => setCount(count + 1);
  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    } else {
      setCount(0);
    }
  }

  return (
    <>
      <div>Click on these buttons to increase and decrease the counter</div>
      <div className="App flex justify-center items-center">
        <div>
          <button className="btn btn-primary mt-6" onClick={increment}>
            +
          </button>
        </div>
        <div>
          <button className="btn btn-primary mt-6" onClick={decrement}>
            −
          </button>
        </div>
      </div>
      <div>Counter value: {count}</div>
    </>
  );
};

export default Counter;
