function PackingList({ items, onDeleteItem, OnUpdatePackedStatus }) {
  return (
    <ul className="list">
      {items.map((val, ind, itemList) => {
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
  );
}

export default PackingList;
