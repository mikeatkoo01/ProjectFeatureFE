import CreateCart from "./CreateCart";
import DisplayCart from "./DisplayCart";
import DisplayItemExtra from "../Item/DisplayItemExtra";

function Cart(){

    return (
        <div>
            <CreateCart/>
            <br></br>
            <DisplayCart/>
            <DisplayItemExtra />
            
        </div>
    );
}

export default Cart;