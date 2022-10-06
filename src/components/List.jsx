import React from "react";
import "./list.css";
import FlipMove from "react-flip-move";

export default function List(p) {
  const listItems = p.arr.map((item, i) => (
    <div key={i} className="list">
      <input value={item} onChange={(e) => p.edit(e.target.value, i)} />
      <i className="fa-solid fa-trash" onClick={() => p.del(i)}></i>
    </div>
  ));
  return (
    <FlipMove duration={400} easing="ease-in-out">
      {listItems}
    </FlipMove>
  );
}
