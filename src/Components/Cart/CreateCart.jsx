import React, { useState, useEffect } from "react";
import axios from "axios";

function CreateCart() {
  const [customer, setCustomer] = useState("");
  const [carts, setCarts] = useState([]);
  const [itemName, setItemName] = useState("");
  const [itemPrice, setItemPrice] = useState(0);
  const [itemQuantity, setItemQuantity] = useState(0);
  const [selectedCartId, setSelectedCartId] = useState(null);

  useEffect(() => {

    axios.get("http://localhost:8082/cart/get")
      .then((response) => {
        setCarts(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  function checkCart() {
    axios.get("http://localhost:8082/cart/get")
      .then((response) => {
        console.log(response);

        for (const cart of response.data) {
          if (
            cart.customer &&
            cart.customer.toLowerCase() === customer.toLowerCase()
          ) {
            alert("Cart already exists");
            return;
          }
        }

        createCart();
      })
      .catch(error => {
        console.error(error);
      });
  }

  function createCart() {
    axios.post("http://localhost:8082/cart/create", {
      customer
    })
    .then((response) => {
      setCustomer("");
      alert("Cart created successfully");
    })
    .catch((err) => console.error(err));
  }

  function createItemInCart() {
    if (!selectedCartId) {
      alert("Please select a cart");
      return;
    }

    axios.post(`http://localhost:8082/item/create`, {
      name: itemName,
      price: itemPrice,
      quantity: itemQuantity,
      cart: {
        id: selectedCartId
      }
    })
      .then(() => {
        alert("Item created in cart successfully");
      })
      .catch((err) => console.error(err));
  }

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          checkCart();
        }}
      >
        <h1>Baskets</h1>
        <label>
          Customer
          <input
            type="text"
            value={customer}
            onChange={(e) => setCustomer(e.target.value)}
          />
        </label>
        <button type="submit" className="btn btn-primary">Create Cart</button>
      </form>

      <form>
        <h2>Add Item to Cart</h2>
        <label>
          Item Name
          <input
            type="text"
            value={itemName}
            onChange={(e) => setItemName(e.target.value)}
          />
        </label>
        <label>
          Item Price
          <input
            type="text"
            value={itemPrice}
            onChange={(e) => setItemPrice(e.target.value)}
          />
        </label>
        <label>
          Item Quantity
          <input
            type="text"
            value={itemQuantity}
            onChange={(e) => setItemQuantity(e.target.value)}
          />
        </label>
        <label>
          Select Cart
          <select
            value={selectedCartId}
            onChange={(e) => setSelectedCartId(e.target.value)}
          >
            <option value="">Select Cart</option>
            {carts.map((cart) => (
              <option key={cart.id} value={cart.id}>
                {cart.customer}
              </option>
            ))}
          </select>
        </label>
        <button
          type="button"
          className="btn btn-success"
          onClick={createItemInCart}
        >
          Create Item in Cart
        </button>
      </form>
    </div>
  );
}

export default CreateCart;
