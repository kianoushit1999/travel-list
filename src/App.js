import Form from "./Form";
import Logo from "./Logo";
import PackingList from "./PackingList";
import Stats from "./Stats";

import { useState } from "react";

function App() {
  const [items, setItems] = useState([]);

  function addItem(description, quantity) {
    setItems((items) => {
      return [
        ...items,
        {
          id: Date.now(),
          description: description,
          quantity: quantity,
          packed: false
        },
      ];
    });
  }

  function deleteItem(id) {
    setItems((items) => {
      return items.filter((val, ind, itemsList) => {
        return val.id !== id
      })
    })
  }

  function updatePackedStatusHandler(id) {
    console.log("change status")
    setItems(items => {
      return items.map((value, index, itemsList) => {
        return value.id === id ? {...value, packed:!value.packed}:{...value}
      });
    });
  }

  return (
    <div className="App">
      <Logo />
      <Form onAddItem={addItem} />
      <PackingList items={items} onDeleteItem={deleteItem} OnUpdatePackedStatus={updatePackedStatusHandler}/>
      <Stats items={items}/>
    </div>
  );
}

export default App;
