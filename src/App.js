import Form from "./Form";
import Logo from "./Logo";
import PackingList from "./PackingList";
import Stats from "./Stats";

import { useState } from "react";

function App() {
  const [items, setItems] = useState([]);

  function updateItems(description, quantity) {
    setItems((items) => {
      return [
        ...items,
        {
          id: Date.now(),
          description: description,
          quantity: quantity,
        },
      ];
    });
  }

  function deleteItem(id) {
    console.log(id)
    setItems((items) => {
      console.log(items.filter((val, ind, itemsList) => {
        return val.id !== id
      }))
      return items.filter((val, ind, itemsList) => {
        return val.id !== id
      })
    })
  }

  return (
    <div className="App">
      <Logo />
      <Form onUpdateItems={updateItems} />
      <PackingList items={items} onDeleteItem={deleteItem}/>
      <Stats />
    </div>
  );
}

export default App;
