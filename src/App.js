import { useState } from "react";
import "./App.css";

function App() {
  let [title, setTitle] = useState(["가구나라", "미미나라", "꿀나라"]);
  let [fire, setFire] = useState([0, 0, 0]);
  let [modal, setModal] = useState(false);

  const handleModal = () => {
    setModal(!modal);
  };

  return (
    <div className="App">
      <div className="black-nav">
        <h4>blog</h4>
      </div>

      {title.map(function (a, i) {
        return (
          <div className="list" key={i}>
            <h4>
              {title[i]}
              <span
                onClick={() => {
                  let fireCopy = [...fire];
                  fireCopy[i] = fireCopy[i] + 1;
                  setFire(fireCopy);
                }}
              >
                ❤️
              </span>
              {fire[i]}
            </h4>
            <p>content</p>
          </div>
        );
      })}
      <button onClick={handleModal}>modal button</button>
      {modal == true ? <Modal /> : null}
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
