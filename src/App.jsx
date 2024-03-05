import { useState } from "react";
import "./App.css";
import Navbar2 from "./components/Navbar/Navbar2";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="app-wrapper">
        <Navbar2 />
      </div>
    </>
  );
}

export default App;
