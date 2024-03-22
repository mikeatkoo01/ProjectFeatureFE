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
                  // onClick={() => deleteItem(singleItem.id)}
                ><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M4.142 4L6.01 16.136A1.002 1.002 0 0 0 7.016 17H18a1 1 0 0 0 .958-.713l3-10A1 1 0 0 0 21 5H6.32l-.33-2.138a.993.993 0 0 0-.346-.627a.997.997 0 0 0-.66-.235H3a1 1 0 1 0 0 2zm3.716 11l-1.23-8h13.028l-2.4 8zM10 20a2 2 0 1 1-4 0a2 2 0 0 1 4 0m9 0a2 2 0 1 1-4 0a2 2 0 0 1 4 0"/></svg>
                  Shop Now
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