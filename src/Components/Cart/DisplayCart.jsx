import { useEffect, useState } from "react";
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";

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
        getCart();
      })
      .catch(console.log);
  };

  const calculateTotal = (cart) => {
    let total = 0;
    cart.item.forEach((item) => {
      total += item.price * 1.0725;
    });
    return total;
  };

  useEffect(() => {
    getCart();
  }, []);

  return (
    <div className="container mt-4">
      <h1>Cart List</h1>
      <div className="row row-cols-1 row-cols-md-3">
        {carts.map((singleCart) => (
          <div key={singleCart.id} className="col mb-4">
            <div className="card h-100">
              <div className="card-body">
                <h5 className="card-title">{singleCart.id}: {singleCart.customer}</h5>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">
                    <b>Items</b>
                  </li>
                  {singleCart.item.map((item) => (
                    <li key={item.id} className="list-group-item">
                      {item.id} - {item.name} - £{item.price}
                    </li>
                  ))}
                  <li className="list-group-item">
                    <button
                      type="button"
                      className="btn btn-warning mr-2"
                      onClick={() => {
                        const newCustomerName = prompt("Enter new customer name:");
                        if (newCustomerName !== null) {
                          handleEditCart(singleCart.id, newCustomerName);
                        }
                      }}
                    >
                      Edit Cart Name
                    </button>
                    <button
                      type="button"
                      className="btn btn-primary mr-2"
                      onClick={() => {
                        cartTotal = calculateTotal(singleCart);
                        alert(`Total for ${singleCart.customer}'s cart: £${cartTotal.toFixed(2)}`);
                      }}
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-currency-pound" viewBox="0 0 16 16">
                        <path d="M4 8.585h1.969c.115.465.186.939.186 1.43 0 1.385-.736 2.496-2.075 2.771V14H12v-1.24H6.492v-.129c.825-.525 1.135-1.446 1.135-2.694 0-.465-.07-.913-.168-1.352h3.29v-.972H7.22c-.186-.723-.372-1.455-.372-2.247 0-1.274 1.047-2.066 2.58-2.066a5.3 5.3 0 0 1 2.103.465V2.456A5.6 5.6 0 0 0 9.348 2C6.865 2 5.322 3.291 5.322 5.366c0 .775.195 1.515.399 2.247H4z" />
                      </svg>
                      Total
                    </button>
                    <Link to="/checkout" className="btn btn-danger">Checkout</Link>
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
