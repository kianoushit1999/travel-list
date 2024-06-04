function PackingList({ items }) {
  return (
    <ul className="list">
      {items.map((val, ind, itemList) => {
        return (
          <li key={val.id}>
            <span> {val.description} {val.quantity} </span>
            <button> ❌ </button>
          </li>
        );
      })}
    </ul>
  );
}

export default PackingList;
