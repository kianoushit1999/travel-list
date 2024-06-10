function Stats({ items }) {
  if (items.length === 0)
    return (
      <p className="stats">
        <em>Start adding some items to your packing list 🚀</em>
      </p>
    );

  const numItems = items.length;
  const numPacked = items.filter((value, index, array) => value.packed).length;
  const allIsPacked = (numItems - numPacked) === 0;

  return (
    <footer className="stats">
      <em>
        {allIsPacked
          ? "You got everything! Ready to go ✈️"
          : `You have ${numItems} items on your list, and you already packed
        ${numPacked}.`}
      </em>
    </footer>
  );
}

export default Stats;
