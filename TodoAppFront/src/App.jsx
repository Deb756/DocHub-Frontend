import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Register from "./components/Register";

function App() {
  const [count, setCount] = useState(0);

  let api = async () => {
    let val = await fetch("http://localhost:8080/api/Todo/User");
    let data = val.json();
    console.log(data);
  };

  return (
    <>
      <div className="text-white flex align-middle justify-center gap-3 p-9">
        {/* <h2>Document Hub</h2>
        <button className="bg-blue-900 p-3" onClick={api}>
          Fetch
        </button> */}
        <Register/>
      </div>
    </>
  );
}

export default App;
