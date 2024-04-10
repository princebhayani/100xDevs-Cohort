import { useContext, useState } from "react";
import "./App.css";
import { CountContext } from "./components/Context";

function App() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <CountContext.Provider value={count}>
      <Count setCount={setCount}/>
      </CountContext.Provider>
    </div>
  );
}

export default App;

// eslint-disable-next-line react/prop-types
const Count = ({setCount}) => {
  return (
    <div>
      <CountRender />
      <Buttons setCount={setCount} />
    </div>
  );
};

// eslint-disable-next-line react/prop-types
function CountRender() {
  const count = useContext(CountContext);
  return <div>{count}</div>;
}

// eslint-disable-next-line react/prop-types
const Buttons = ({setCount}) => {
  const count = useContext(CountContext);
  return (
    <div>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Increase
      </button>
      <button
        onClick={() => {
          setCount(count - 1);
        }}
      >
        Decrease
      </button>
    </div>
  );
};
