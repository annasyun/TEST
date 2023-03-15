import logo from "./logo.svg";
import "./App.css";

function App() {
  let post = "인천 브런치 맛집";
  return (
    <div className="App">
      <div className="black-nav">
        <h4 className={post}>react,,,master</h4>
      </div>
      <h4 style={{ color: "red" }}>{post}</h4>
    </div>
  );
}

export default App;
