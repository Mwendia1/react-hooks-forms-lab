import React, { useState } from "react";
import Header from "./Header";
import Filter from "./Filter";
import ShoppingList from "./ShoppingList";
import ItemForm from "./ItemForm";
import items from "../data/items";

function App() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [search, setSearch] = useState("");
  const [itemsList, setItemsList] = useState(items);

  return (
    <div className="App">
      <Header />
      <Filter
        search={search}
        onSearchChange={setSearch}
        selectedCategory={selectedCategory}
        onCategoryChange={setSelectedCategory}
      />
      <ShoppingList
        items={itemsList}
        search={search}
        selectedCategory={selectedCategory}
      />
      <ItemForm onItemFormSubmit={(newItem) => setItemsList([...itemsList, newItem])} />
    </div>
  );
}

export default App;