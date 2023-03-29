import { useState } from "react";
import "./App.css";

function App() {
  let [title, setTitle] = useState(["가구나라", "미미나라", "꿀나라"]);
  let [fire, setFire] = useState(0);

  return (
    <div className="App">
      <div className="black-nav">
        <h4>blog</h4>
      </div>
      <div className="list">
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
      <Modal />
    </div>
  );
}

function Modal() {
  return (
    <div className="modal">
      <h4>제목</h4>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  );
}

export default App;
