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

  return (
    <div className="App">
      <Logo />
      <Form updateItems={updateItems} />
      <PackingList items={items} />
      <Stats />
    </div>
  );
}

export default App;
