import "./styles.css";
import { useState } from "react";
import { NavAside } from "./components/NavAside";

export default function App() {
  const [state, setState] = useState(true);

  const handleDiv = () => {
    const div = document.getElementById("myDiv");
    const nav = document.getElementById("myNavAside");

    state
      ? div.setAttribute("class", "myDiv open")
      : div.setAttribute("class", "myDiv close");

    const height = document.body.scrollHeight;
    /* Comenta la linea nav.setAttribute para ver el problema principal */
    /* Comment nav.setAttribute line to see the original problem, remember to see https://l6y6w.csb.app/ in a new window */
    nav.setAttribute("style", `min-height: ${height}px !important`);
    setState(!state);
  };
  return (
    <div className="ca-wrapper">
      <NavAside />
      <div className="ca-container">
        <button onClick={handleDiv}>Click me!!!!!</button>
        <div id="myDiv" className="myDiv close">
          THIS IS A BIG DIV!!!!!!
        </div>
      </div>
    </div>
  );
}
