import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  return( <div>
    <Count count={count} setCount={setCount} />
  </div>
  );
}

export default App;


// eslint-disable-next-line react/prop-types
const Count = ({count, setCount})=>{
  return <div>
    <CountRender count={count} />
<Buttons count={count} setCount={setCount} />
  </div>
}

// eslint-disable-next-line react/prop-types
function CountRender({count}){
  return <div>
    {count}
  </div>
}

// eslint-disable-next-line react/prop-types
const Buttons = ({count, setCount}) =>{
  return (
    <div>
      <button onClick={()=>{setCount(count+1)}}>Increase</button>
      <button onClick={()=>{setCount(count-1)}}>Decrease</button>
    </div>
  )
}
