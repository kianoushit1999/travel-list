import { useState } from "react";

function PackingList({ items, onDeleteItem, OnUpdatePackedStatus }) {
  
  const [sortBy, setSortBy] = useState("input");
  let sortedList;

  if(sortBy === "input") sortedList = items.slice();
  else if (sortBy === "description") sortedList=items.slice().sort((a, b) => a.description.localeCompare(b.description));
  else sortedList=items.slice().sort((a, b) => Number(a.packed) - Number(b.packed));
   
  return (
   <div className="list">
     <ul>
      {sortedList.map((val, ind, itemList) => {
        return (
          <li key={val.id}>
            <input
              type="checkbox"
              value={val.packed}
              onChange={() => OnUpdatePackedStatus(val.id)}
            />
            <span className={`${val.packed ? "cross-out" : ""}`}>
              {" "}
              {val.description} {val.quantity}{" "}
            </span>
            <button onClick={() => onDeleteItem(val.id)}> ❌ </button>
          </li>
        );
      })}
    </ul>

    <select onChange={(e)=>{
      setSortBy(e.target.value)
    }}>
      <option value="description">Sort by description</option>
      <option value="input">Sort by input</option>
      <option value="status">Sort by packed status</option>
    </select>
   </div>
  );
}

export default PackingList;
