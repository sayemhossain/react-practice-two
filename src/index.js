import ReactDOM from "react-dom";

function clock() {
  return (
    <h1 className="heading">
      <span className="text">Time: {new Date().toLocaleTimeString()}</span>
    </h1>
  );
}

ReactDOM.render(clock(), document.getElementById("root"));
