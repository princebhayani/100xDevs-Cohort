import {lazy, Suspense} from "react";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
// import Dashboard from "./components/Dashboard";
// import Landing from "./components/Landing";
import "./App.css"
const Dashboard = lazy(() =>import("./components/Dashboard"));
const Landing = lazy(() =>import("./components/Landing"));


export default function App() {
  return (
    <div>
      <div >

        {/* <button onClick={()=>{
          window.location.href="/";
        }} >Landing page</button>

        <button onClick={()=>{
          window.location.href="/dashboard";
        }} >Dashboard</button> */}
      </div>
    <BrowserRouter>
    <Appbar></Appbar>
      <Routes>
        <Route path="/dashboard" element={<Suspense fallback={"loading..."}><Dashboard /></Suspense>} />
        <Route path="/" element={<Suspense fallback={"loading..."}><Landing /></Suspense>} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

function Appbar (){
  const navigate = useNavigate();
  return(
<div>
<button onClick={()=>{
          navigate("/");
        }} >Landing page</button>

        <button onClick={()=>{
          navigate("/dashboard");
        }} >Dashboard page</button>
</div>
  )
}
