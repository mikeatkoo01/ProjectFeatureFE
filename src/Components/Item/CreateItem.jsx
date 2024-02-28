import axios from "axios";
import { useState } from "react";

function CreateItem() {

    const [id, setId] = useState("");
    const [itemName, setItemName] = useState("");
    const [price, setPrice] = useState("");
    const [quantity, setQuanity] = useState("");
    const [items, setItems] = useState([]);

    function getItem() {

        axios.get("http://localhost:8082/items/get").then((response) => {
            setItems(response.data)

        })

        function checkItem() {

                      axios.get("http://localhost:8082/item/get").then(response => {
                       console.log(response)
                       for (const items of response.data) {
                              if (items.itemName.toLowerCase() === itemName && items.price.toLowerCase() === price) {
                                    alert("Item already listed")
                                   return;
                                 }
                            }
                       })
                    }
 
   

axios.post("http://localhost:8082/item/create",
{
    itemName,
    price,
    quantity
})
.then(response => {
    console.log(response);
    setItemName("");
    setPrice("");
    setQuanity("");
    setItems();
}).catch(err => console.error(err))

return (
<div>

<form onSubmit={(e) => {
    e.preventDefault();
    checkItem();

}} />

<h1>Items</h1>
<label>Item Name</label>
<input>
    value={itemName}
    onChange={(e) => setItemName(e.target.value)}
</input>
<label>Item Price</label>
<input>
    value={price}
    onChange={(e) => setPrice(e.target.value)}
</input>
<label>Item Quanity</label>
<input>
    value={quantity}
    onChange={(e) => setQuantity(e.target.value)}
</input>
</div>
    )}}

export default CreateItem; 