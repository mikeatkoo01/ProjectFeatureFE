import { useEffect, useState } from "react";
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css'; 


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

