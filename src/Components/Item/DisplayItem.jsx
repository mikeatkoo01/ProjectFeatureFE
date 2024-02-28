import { useEffect, useState } from "react";
import axios from "axios";

function DisplayItem(){
    const itemList = []
    const [item, setItem] = useState([]);

    function getItem(){
        axios.get("http://localhost:8082/item/get")
        .then((response) => {setItem(response.data)})
        .catch(console.log())}
        useEffect(()=> {getItem()},[])
            for (const item of items){
                itemList.push(
                    item.id
                )
            }
            

            return(
                {/* {itemList} */ }

            );


    }






export default DisplayItem;