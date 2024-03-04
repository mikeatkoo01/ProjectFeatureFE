import { useEffect, useState } from "react";
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css'; 

function DisplayCart() {
  const [carts, setCarts] = useState([]);
  let cartTotal = 0; 

  function getCart() {
    axios
      .get("http://localhost:8082/cart/get")
      .then((response) => {
        setCarts(response.data);
      })
      .catch(console.log);
  }

  const handleEditCart = (cartId, newCustomerName) => {
    axios
      .patch(`http://localhost:8082/cart/update/${cartId}`, { customer: newCustomerName })
      .then(() => {
        // Refresh the cart data after editing
        getCart();
      })
      .catch(console.log);
  };

  const calculateTotal = (cart) => {
    let total = 0;
    cart.item.forEach((item) => {
      total += item.price *1.0725;
    });
    return total;
  };

  useEffect(() => {
    getCart();
  }, []);

  return (
    <div className="container mt-4">
      <div className="row">
        {carts.map((singleCart) => (
          <div key={singleCart.id} className="col-md-4 mb-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">{singleCart.customer}</h5>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">
                    <b>Items</b>
                  </li>
                  {singleCart.item.map((item) => (
                    <li key={item.id} className="list-group-item">
                      {item.id} - {item.name} - {item.price}
                    </li>
                  ))}
                  <li className="list-group-item">
                    <button
                      type="button"
                      className="btn btn-warning"
                      onClick={() => {
                        const newCustomerName = prompt("Enter new customer name:");
                        if (newCustomerName !== null) {
                          handleEditCart(singleCart.id, newCustomerName);
                        }
                      }}
                    >
                      Edit Customer
                    </button>
                  </li>
                  <li className="list-group-item">
                    <button
                      type="button"
                      className="btn btn-primary"
                      onClick={() => {
                        cartTotal = calculateTotal(singleCart);
                        alert(`Total for ${singleCart.customer}'s cart: $${cartTotal.toFixed(2)}`);
                      }}
                    >
                      Calculate Total (inc. service charge)
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DisplayCart;
