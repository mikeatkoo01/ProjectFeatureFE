



function Checkout() {

    const handleSubmit = (event) => {
        event.preventDefault();
        alert ("you have now completed the order ")
    

    }

    return ( 

        <div>
        <h1>Card Details</h1>
        <br />
        <form style={{fontSize:"15px"}} onSubmit={handleSubmit}>
          <label>
            Name: As it appears on the card
            <br/>
            <input type="text" />
          </label>
          <br />
          <label>
          Long Card Number: PAN
            <br/>
            <input type="text" />
          </label>
          <br />
          <label>
            Card Expiry Date: mm/yy
            <br/>
            <input type="text" />
          </label>
          <br/>
          <label>
            CVC
            <br/>
            <input type="text" />
          </label>
          <br/>
          <label>
            Postcode
            <br/>
            <input type="text" />
          </label>
          
          <div style={{marginTop: "20px"}}>
            <button className="btn btn-success btn-lg" type="submit">Submit</button>
          </div>
        </form>
      </div>);

}

export default Checkout;