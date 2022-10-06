import "./styles.css";
import List from "./components/List";
import { useState } from "react";

export default function App() {
  const [arr, setarr] = useState(["a", "b", "c", "d","a", "b", "c", "d","a", "b", "c", "e","a", "b", "c", "d"]);
  const [item, seti] = useState("");

  const changeHandle = (e) => {
    seti(e.target.value);
  };
  const addItem = (e) => {
    setarr([...arr, item]);
    seti("");
  };
  const del = (i) => {
    const filArr = arr.filter((item, index) => index != i);
    setarr(filArr);
  };
  const edit = (text, i) => {
    const newArr = arr.map((item, index) => {
      if (index == i) {
        item = text;
      }
    });
    setarr(newArr);
  };

  return (
    <div className="App">
      <input className="input" placeholder="Add your task here" value={item} onChange={(e) => changeHandle(e)} />
      <button onClick={addItem}>
        <i class="fa-solid fa-plus"></i>
      </button>
      <List arr={arr} del={del} edit={edit} />
    </div>
  );
}
