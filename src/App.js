import "./styles.css";
import List from "./components/List";
import { useState } from "react";

export default function App() {
  const [arr, setarr] = useState(["eat apple", "bath", "call", "draw", "eat"]);
  const [item, seti] = useState("");

  const changeHandle = (e) => {
    seti(e.target.value);
  };
  const addItem = (e) => {
    if (item === "") return;
    setarr([...arr, item]);
    seti("");
  };
  const del = (i) => {
    console.log(arr);

    const filArr = arr.filter((item, index) => index !== i);
    setarr([...filArr]);
  };
  const edit = (text, i) => {
    console.log(text, i);

    const newArr = arr.map((item, index) => {
      return index === i ? text : item;
    });
    console.log("newArr", newArr);

    setarr([...newArr]);
  };

  return (
    <div className="App">
      <h1 style={{ marginTop: "15px" }}>My Todo List</h1>
      <input
        className="input"
        placeholder="Add your task here"
        value={item}
        onChange={(e) => changeHandle(e)}
        onKeyDown={(e) => {
          e.keyCode === 13 ? addItem() : null;
        }}
      />
      <button onClick={addItem}>
        <i className="fa-solid fa-plus"></i>
      </button>
      <List arr={arr} del={del} edit={edit} />
    </div>
  );
}
