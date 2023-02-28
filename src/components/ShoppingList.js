import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";
import { v4 as uuid } from "uuid";


function ShoppingList({ items }) {

  const [selectedCategory, setSelectedCategory] = useState("All");
  // new state variable and function to handle search
  const [searchTerm, setSearchTerm] = useState("");
  // state variables and functions to handle the ItemForm
  const [itemName, setItemName] = useState("");
  const [itemCategory, setItemCategory] = useState("Produce");
  const [submittedData, setSubmittedData] = useState(items);


  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  const filteredItems = submittedData.filter((item) => {
    if (selectedCategory === "All") {
      return true;
    } else {
      return item.category === selectedCategory;
    }
  });

  const filteredAndSearchedItems = filteredItems.filter((item) => {
    if (item.name.toLowerCase().includes(searchTerm.toLowerCase())) {
      return true;
    }
  })

  const itemsToDisplay = filteredAndSearchedItems.map((item) => (
    <Item key={item.id} name={item.name} category={item.category} />
  ))

  // event listener to handle search changes
  function handleSearch(event) {
    console.log(event.target.value)
    setSearchTerm(event.target.value)
  }

  // event listener to handle item name changes
  function handleItemNameChange(event) {
    console.log(event.target.value)
    setItemName(event.target.value)
  }

  // event listener to handle item category changes
  function handleItemCategoryChange(event) {
    console.log(event.target.value)
    setItemCategory(event.target.value)
  }

  // event listener to handle the item form submission
  function handleItemFormSubmit(event) {
    event.preventDefault()
    const newItem = {
      id: uuid(),
      name: itemName,
      category: itemCategory
    }
    const newItemArray = [...submittedData, newItem]
    console.log(newItemArray);
    setSubmittedData(newItemArray);
    setItemName("");
    setItemCategory("Produce");
  }

  // const listofNewItems = submittedData.map(newSubmittedItem => {
  //   return <Item key={newSubmittedItem.id} name={newSubmittedItem.name} category={newSubmittedItem.category} />
  // })

  return (
    <div className="ShoppingList">
      <ItemForm
        onItemFormSubmit={handleItemFormSubmit}
        itemName={itemName}
        itemCategory={itemCategory}
        handleItemNameChange={handleItemNameChange}
        handleItemCategoryChange={handleItemCategoryChange}
      />
      <Filter 
        onCategoryChange={handleCategoryChange} 
        onSearchChange={handleSearch} 
        search={searchTerm}
      />
      <ul className="Items">
        {itemsToDisplay}
        {/* {listofNewItems} */}
      </ul>
    </div>
  );
}

export default ShoppingList;
