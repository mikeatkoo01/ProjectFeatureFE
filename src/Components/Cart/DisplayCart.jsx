import { useEffect, useState } from "react";
import axios from "axios";

function DisplayCart() {
  const [carts, setCarts] = useState([]);

  function getCart() {
    axios
      .get("http://localhost:8082/cart/get")
      .then((response) => {
        setCarts(response.data);
      })
      .catch(console.log);
  }

  useEffect(() => {
    getCart();
  }, []);

  return (
    <div className="cart-container">
      {carts.map((singleCart) => (
        <div key={singleCart.id} className="cart-card">
          <p>{singleCart.id} - {singleCart.customer}</p>
          <ul>
            {singleCart.item.map((item) => (
              <li key={item.id}>{item.id} - {item.name} - {item.price}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default DisplayCart;
