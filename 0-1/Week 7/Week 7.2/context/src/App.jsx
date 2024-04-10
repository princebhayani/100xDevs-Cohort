import "./App.css";

import { RecoilRoot, useRecoilValue, useSetRecoilState } from "recoil";
import { countAtom, evenSelector } from "./store/atoms/count.js";

function App() {
  return (
    <div>
      <RecoilRoot>
        <Count />
      </RecoilRoot>
    </div>
  );
}

export default App;

// eslint-disable-next-line react/prop-types
const Count = () => {
  console.log("RE RENDERING");
  return (
    <div>
      <CountRender />
      <Buttons />
      <ItsEven />
    </div>
  ); 
};
const ItsEven= () =>{
  const isEven = useRecoilValue(evenSelector);
  console.log("RE RENDERING even");
  return isEven%2===0 ?(
    <div>
      It is even
    </div>
  ):null
}

// eslint-disable-next-line react/prop-types
function CountRender() {
  const count = useRecoilValue(countAtom);
  return <div>{count}</div>;
}

// eslint-disable-next-line react/prop-types
const Buttons = () => {
  // const [count, setCount] = useRecoilState(countAtom);
  const setCount = useSetRecoilState(countAtom);
  console.log("RE RENDERING BUTTONS");

  return (
    <div>
      <button
        onClick={() => {
          setCount(count => count + 1);
        }}
      >
        Increase
      </button>
      <button
        onClick={() => {
          setCount(count => count - 1);
        }}
      >
        Decrease
      </button>
    </div>
  );
};
