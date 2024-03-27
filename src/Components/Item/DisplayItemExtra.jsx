import React, { useEffect, useState } from "react";
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';


function DisplayItemExtra() {
  const [items, setItems] = useState([]);
  const [selectedItemId, setSelectedItemId] = useState(null);
  const [selectedCartId, setSelectedCartId] = useState(null);

  DisplayItemExtra.getItem = function () {
    axios
      .get("http://localhost:8082/item/get")
      .then((response) => {
        setItems(response.data);
      })
      .catch(console.error);
  };

  const AddItem = () => {
  axios.patch(`http://localhost:8082/item/update/${selectedItemId}`, {
    selectedItemId,
    cart: {
      id: selectedCartId
    }
  })
    .then(() => {
      alert("Item added to cart successfully");
      window.location.reload();
    })
    .catch((err) => console.error(err));
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

                <img src={singleItem.url} alt="Product Image" style={{ width: '100px', height: '100px' }} />


                
                
                <p className="card-text">Price: £{singleItem.price}</p>
            
               
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