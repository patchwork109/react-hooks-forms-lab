import React from "react";

function ItemForm({ 
  onItemFormSubmit,
  itemName,
  handleItemNameChange, 
  handleItemCategoryChange}) {

  return (
    <form className="NewItem" onSubmit={onItemFormSubmit}>
      <label>
        Name:
        <input 
          type="text" 
          name="name" 
          value={itemName}
          onChange={handleItemNameChange}
        />
      </label>

      <label>
        Category:
        <select name="category" onChange={handleItemCategoryChange}>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;
