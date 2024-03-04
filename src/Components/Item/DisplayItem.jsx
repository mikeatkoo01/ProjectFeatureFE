import React, { useEffect, useState } from "react";
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';

function DisplayItem() {
  const [items, setItems] = useState([]);

  function getItem() {
    axios
      .get("http://localhost:8082/item/get")
      .then((response) => {
        setItems(response.data);
      })
      .catch(console.log);
  }

  function deleteItem(itemId) {
    axios
      .delete(`http://localhost:8082/item/remove/${itemId}`)
      .then(() => {
       
        getItem();
      })
      .catch(console.log);
  }

  useEffect(() => {
    getItem();
  }, []);

  return (
    <div className="container mt-4">
      <h1>Item List</h1>
      <div className="row">
        {items.map((singleItem) => (
          <div key={singleItem.id} className="col-md-4 mb-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">{singleItem.name}</h5>
                <p className="card-text">ID: {singleItem.id}</p>
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
