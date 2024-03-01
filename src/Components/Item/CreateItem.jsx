
import axios from "axios";
import { useState } from "react";

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
          // item.price.toLowerCase() === price.toLowerCase()
        ) {
          alert("Item already listed");
          return;
        } 
      }
  
      createItem();
    }).catch(error => {
      
     
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
      })
      .catch((err) => console.error(err));
  }

  // function removeItem() {
  //   axios.delete("http://localhost:8082/item/remove/")
  //     .then(res => { 
  //       axios.get("http://localhost:8082/get").then(response => {setName(response.data); console.log(response)})
  //       .catch(err => console.error(err))

  //     })
  // } -- May require a different component. 

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
        checkItem()
          //createItem();
        }}
      >
        <h1>Items</h1>
        <label>
          Item Name
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <label>
          Item Price
          <input
            type="text"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </label>
        <label>
          Item Quantity
          <input
            type="text"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
          />
        </label>
        <button type="submit" class="btn btn-primary">Create Item</button>
       
      </form>
    </div>
  );
}

export default CreateItem;
