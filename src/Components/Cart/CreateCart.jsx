import axios from "axios";
import { useState } from "react";

function CreateCart() {
    const [customer, setCustomer] = useState("");
    ;

    function checkCart() {
        axios.get("http://localhost:8082/cart/get").then((response) => {
            console.log(response);

            for (const item of response.data) {
                if (
                    cart.customer && 
                    cart.customer.toLowerCase() !== customer.toLowerCase()
                )
                    alert("Cart already listed");
                return;
                CreateCart();
            }
          }
   ) }
}

function CreateCart() {
    axios
        .post("http://localhost:8082/cart/create", {
            customer,
           
        })
        .then((response) => {
            console.log(response);
            setCustomer("");
            alert("Cart created successfully");
        })
        .catch((err) => console.error(err));
}

return (
    <div>
        <form
            onSubmit={(e) => {
                e.preventDefault();
                checkItem();
            }}
        >
            <h1>Carts</h1>
            <label>
                Customer Name
                <input
                    type="text"
                    value={customer}
                    onChange={(e) => setCustomer(e.target.value)}
                />
            </label>


            <button type="submit">Create Cart</button>
        </form>
    </div>
);


export default CreateCart;
