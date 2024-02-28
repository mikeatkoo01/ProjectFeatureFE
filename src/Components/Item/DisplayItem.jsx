import { useEffect, useState } from "react";
import axios from "axios";

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

  useEffect(() => {
    getItem();
  }, []);

  const itemList = [];

  for (const singleItem of items) {
    itemList.push(
      <div key={singleItem.id}>
        {singleItem.id} - {singleItem.itemName} - {singleItem.price}
      </div>
    );
  }

  return <div>{itemList}</div>;
}

export default DisplayItem;



