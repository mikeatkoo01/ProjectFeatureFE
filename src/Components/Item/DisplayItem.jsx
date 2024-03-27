import React, { useEffect, useState } from "react";
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';

function DisplayItem() {
  const [items, setItems] = useState([]);

  DisplayItem.getItem = function () {
    axios
      .get("http://localhost:8082/item/get")
      .then((response) => {
        setItems(response.data);
      })
      .catch(console.error);
  };

  function deleteItem(itemId) {
    axios
      .delete(`http://localhost:8082/item/remove/${itemId}`)
      .then(() => {
        DisplayItem.getItem();
      })
      .catch(console.error);
  }

  useEffect(() => {
    DisplayItem.getItem();
  }, []);

  return (
    <div className="container mt-4">
      <h1>Inventory List</h1>
      <div className="row row-cols-1 row-cols-md-3">
        {items.map((singleItem) => (
          <div key={singleItem.id} className="col mb-4">
            <div className="card h-100">
              <div className="card-body">
                <h5 className="card-title">{singleItem.name}</h5>
                <p className="card-text">ID: {singleItem.id}
                <img src={singleItem.url} alt="Product Image" style={{ width: '100px', height: '100px' }} />

       

                <p className="card-text">Price: £{singleItem.price}</p>
                <p className="card-text">Quantity: {singleItem.quantity}</p>
                <button
                  className="btn btn-danger"
                  onClick={() => deleteItem(singleItem.id)}
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DisplayItem;

