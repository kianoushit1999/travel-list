function PackingList({ items, onDeleteItem }) {
  return (
    <ul className="list">
      {items.map((val, ind, itemList) => {
        return (
          <li key={val.id}>
            <span> {val.description} {val.quantity} </span>
            <button onClick={()=>onDeleteItem(val.id)}> ❌ </button>
          </li>
        );
      })}
    </ul>
  );
}

export default PackingList;
