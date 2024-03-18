import axios from "axios";
import { useState } from "react";
import DisplayItem from "./DisplayItem";

function CreateItem() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0.00);
  const [quantity, setQuantity] = useState(0);

  function checkItem() {
    axios.get("http://localhost:8082/item/get").then((response) => {
      console.log(response);
      
      for (const item of response.data) {
        if (
          item.name &&
          item.price &&
          item.name.toLowerCase() === name.toLowerCase()
        ) {
          alert("Item already listed");
          return;
        } 
      }
  
      createItem();
    }).catch(error => {
      console.error(error);
    });
  }

  function createItem() {
    axios
      .post("http://localhost:8082/item/create", {
        name,
        price,
        quantity,
      })
      .then((response) => {
        console.log(response);
        setName("");
        setPrice(0.00);
        setQuantity(0);
        alert("Item created successfully");
        
      
        DisplayItem.getItem();
      })
      .catch((err) => console.error(err));
  }

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          checkItem();
        }}
      >
        <h1>Inventory</h1>
        <br/>
        <br/>
        <label>
          Item Name
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <br/>
        <label>
          Item Price
          <input
            type="text"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </label>
        <br/>
        <label>
          Item Quantity
          <input
            type="text"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
          />
        </label>
        <br/>
        <button type="submit" className="btn btn-primary">
          Create Item
        </button>
      </form>
    </div>
  );
}

export default CreateItem;
