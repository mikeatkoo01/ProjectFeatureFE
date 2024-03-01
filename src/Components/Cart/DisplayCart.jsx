import { useEffect, useState } from "react";
import axios from "axios";

function DisplayCart() {
  const [carts, setCarts] = useState([]);

  function getCart() {
    axios
      .get("http://localhost:8082/cart/get")
      .then((response) => {
        // console.log(response.data); Creates infinite loop
        setCarts(response.data);
      })
      .catch(console.log);
  }

  useEffect(() => {
    getCart();
  },);

  const cartList = [];

  for (const singleCart of carts) {
    cartList.push(
      <div key={singleCart.id}>
        {singleCart.id} - {singleCart.customer} 
      </div>
    );
  }

  return <div>{cartList}</div>;
}

export default DisplayCart;