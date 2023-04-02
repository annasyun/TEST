import { useState } from "react";
import "./App.css";

function App() {
  const [title, setTitle] = useState(["가구나라", "미미나라", "꿀나라"]);
  const [fire, setFire] = useState([0, 0, 0]);
  const [modal, setModal] = useState(false);
  const [titleNumber, setTitleNumber] = useState(0);
  const [newTitle, setNewTitle] = useState("");
  const 글추가 = () => {
    let copy = [...title];
    let copyFire = [...fire];
    if (newTitle != "") {
      copy.unshift(newTitle);
      copyFire.unshift(0);
      setTitle(copy);
      setFire(copyFire);
    }
  };
  console.log(newTitle);
  console.log(title);

  return (
    <div className="App">
      <div className="black-nav">
        <h4>blog</h4>
      </div>
      {title.map(function (a, i) {
        return (
          <div className="list" key={i}>
            <h4
              onClick={() => {
                setModal(true);
                setTitleNumber(i);
              }}
            >
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
            <button
              onClick={() => {
                let copy = [...title];
                copy.splice(i, 1);
                setTitle(copy);
              }}
            >
              글삭제
            </button>
          </div>
        );
      })}
      <input
        type={"text"}
        onChange={(e) => {
          setNewTitle(e.target.value);
        }}
      />
      <button onClick={글추가}>발행</button>
      {modal == true ? (
        <Modal
          setTitle={setTitle}
          titleNumber={titleNumber}
          background={"yellow"}
          title={title}
        />
      ) : null}
    </div>
  );
}

function Modal(props) {
  return (
    <div className="modal" style={{ background: props.background }}>
      <h4>{props.title[props.titleNumber]}</h4>
      <p>날짜</p>
      <p>상세내용</p>
      <button
        onClick={() => {
          let titleCopy = [...props.title];
          titleCopy[0] = "변경나라";
          props.setTitle(titleCopy);
        }}
      >
        글수정
      </button>
    </div>
  );
}

export default App;
