import React, { useEffect, useState } from "react";
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';

function DisplayItemExtra() {
  const [items, setItems] = useState([]);

  DisplayItemExtra.getItem = function () {
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
        DisplayItemExtra.getItem();
      })
      .catch(console.error);
  }

  useEffect(() => {
    DisplayItemExtra.getItem();
  }, []);

  return (
    <div class="container-fluid">
  <div class="row">
    <div class="col-6 bg">
      <h4>Other shoppers have bought</h4>
      <div className="row">
        {items.map((singleItem) => (
          <div key={singleItem.id} className="col-md-4 mb-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">{singleItem.name}</h5>
                
                <p className="card-text">Price: £{singleItem.price}</p>
            
                <button
                  className="btn btn-primary"
                  onClick={() => deleteItem(singleItem.id)}
                >
                  ADD
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>
    </div>
  );
}

export default DisplayItemExtra;