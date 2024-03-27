import axios from "axios";
import { useState } from "react";
import DisplayItem from "./DisplayItem";

function CreateItem() {
  const [name, setName] = useState("");
  const [url,setUrl] = useState("");
  const [price, setPrice] = useState(0.00);
  const [quantity, setQuantity] = useState(0);

  function checkItem() {
    axios.get("http://localhost:8082/item/get")
      .then((response) => {
        for (const item of response.data) {
          if (
            item.name &&
            item.url &&
            item.price &&
            item.name.toLowerCase() === name.toLowerCase()
          ) {
            alert("Item already listed");
            return;
          }
        }
        createItem();
      })
      .catch(error => {
        console.error(error);
      });
  }

  function createItem() {
    axios
      .post("http://localhost:8082/item/create", {
        name,
        url,
        price,
        quantity,
      })
      .then((response) => {
        console.log(response);
        setName("");
        setUrl("");
        setPrice(0.00);
        setQuantity(0);
        alert("Item created successfully");
        DisplayItem.getItem();
      })
      .catch((err) => console.error(err));
  }

  return (
    <div className="container mt-5">
      <h1 className="text-center">Inventory</h1>
      <form onSubmit={(e) => { e.preventDefault(); checkItem(); }}>
        <div className="mb-3">
          <label htmlFor="itemName" aria-label="item name"className="form-label">Item Name</label>
          <input
            type="text"
            aria-describedby="wheretoinputname"
            className="form-control"
            id="itemName"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="itemPrice" className="form-label">Item Price</label>
          <input
            type="number"
            aria-describedby="wheretoinputprice"
            className="form-control"
            id="itemPrice"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="itemQuantity" className="form-label">Item Quantity</label>
          <input
            type="number"
            aria-describedby="wheretoinputhowmany"
            className="form-control"
            id="itemQuantity"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="itemUrl" className="form-label">Item Url</label>
          <input
            type="text"
            aria-describedby="wheretoinputapicture"
            className="form-control"
            id="itemUrl"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
          />
        </div>
        <button type="submit" aria-describedby="submit button"className="btn btn-primary">Create Item</button>
      </form>
    </div>
  );
}

export default CreateItem;
