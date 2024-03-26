import React, { useState, useEffect } from "react";
import axios from "axios";

function CreateCart() {
  const [customer, setCustomer] = useState("");
  const [carts, setCarts] = useState([]);
  const [selectedCartId, setSelectedCartId] = useState(null);
  const [items, setItems] = useState([]);
  const [selectedItemId, setSelectedItemId] = useState(null);

  useEffect(() => {
    fetchCartsAndItems();
  }, []); 

  const fetchCartsAndItems = () => {
    axios.get("http://localhost:8082/cart/get")
      .then((response) => {
        setCarts(response.data);
      })
      .catch(error => {
        console.error(error);
      });

    axios.get("http://localhost:8082/item/get")
      .then((response) => {
        setItems(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  };

  const checkCart = () => {
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
  };

  const createCart = () => {
    axios.post("http://localhost:8082/cart/create", {
      customer
    })
    .then((response) => {
      setCustomer("");
      alert("Cart created successfully");
      fetchCartsAndItems(); 
    })
    .catch((err) => console.error(err));
  };

  const addItemToCart = () => {
    if (!selectedCartId || !selectedItemId) {
      alert("Please select an item and a cart");
      return;
    }

    axios.patch(`http://localhost:8082/item/update/${selectedItemId}`, {
      selectedItemId,
      cart: {
        id: selectedCartId
      }
    })
      .then(() => {
        alert("Item added to cart successfully");
        fetchCartsAndItems(); 
        window.location.reload();
      })
      .catch((err) => console.error(err));
  };

  return (
    <div>
      <form className="right"
        onSubmit={(e) => {
          e.preventDefault();
          checkCart();
        }}
      >
        <h1>Basket</h1>
        <label>
          Name
          <br/>
          <input
            type="text"
            value={customer}
            onChange={(e) => setCustomer(e.target.value)}
          />
        </label>
        <br/>
        <br/>
        <button
         type="submit" className="btn btn-primary"><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M4.142 4L6.01 16.136A1.002 1.002 0 0 0 7.016 17H18a1 1 0 0 0 .958-.713l3-10A1 1 0 0 0 21 5H6.32l-.33-2.138a.993.993 0 0 0-.346-.627a.997.997 0 0 0-.66-.235H3a1 1 0 1 0 0 2zm3.716 11l-1.23-8h13.028l-2.4 8zM10 20a2 2 0 1 1-4 0a2 2 0 0 1 4 0m9 0a2 2 0 1 1-4 0a2 2 0 0 1 4 0"/></svg>Begin Shopping</button>
      </form>
      <br/>
      <br/>

      <form className="App">
        <h2>Add Item to Cart</h2>
        <br/>
        <label>
         
          
          <select
            value={selectedItemId}
            onChange={(e) => setSelectedItemId(e.target.value)}
          >
            <option value="">Select Item</option>
            {items.map((item) => (
              <option key={item.id} value={item.id}>
                {item.name}
              </option>
            ))}
          </select>
        </label>
        &nbsp;&nbsp;

        <label>
       
         
          

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
        <br/>
        <br/>
        <button
          type="button"
          className="btn btn-success"
          onClick={addItemToCart}
        ><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M4.142 4L6.01 16.136A1.002 1.002 0 0 0 7.016 17H18a1 1 0 0 0 .958-.713l3-10A1 1 0 0 0 21 5H6.32l-.33-2.138a.993.993 0 0 0-.346-.627a.997.997 0 0 0-.66-.235H3a1 1 0 1 0 0 2zm3.716 11l-1.23-8h13.028l-2.4 8zM10 20a2 2 0 1 1-4 0a2 2 0 0 1 4 0m9 0a2 2 0 1 1-4 0a2 2 0 0 1 4 0"/></svg>
          Add Item
        
        </button>
      </form>
    </div>
  );
}

export default CreateCart;
