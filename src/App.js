import { useState } from "react";
import "./App.css";

function App() {
  let [title, setTitle] = useState(["title1", "title2", "title3"]);
  let [fire, setFire] = useState(0);

  return (
    <div className="App">
      <div className="black-nav">
        <h4>blog</h4>
      </div>
      <div className="list">
        <span
          onClick={() => {
            let copy = [...title];
            copy[0] = "changed";
            setTitle(copy);
          }}
        >
          🔥
        </span>
        <h4>
          {title[0]}
          <span
            onClick={() => {
              setFire(fire + 1);
            }}
          >
            🔥
          </span>
          {fire}
        </h4>
        <p>content</p>
      </div>
      <div className="list">
        <h4>{title[1]}</h4>
        <p>content</p>
      </div>
      <div className="list">
        <h4>{title[2]}</h4>
        <p>content</p>
      </div>
    </div>
  );
}

export default App;
