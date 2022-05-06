import React, { useState } from "react";
import axios from "axios";

 

export default function Addproducts() {

    const [name, setname] = useState("");
    const [description, setdescription] = useState("");
    const [qty, setqty] = useState("");
    const [price, setprice] = useState("");

    function sendData(e) {
        e.preventDefault();
        const newproducts = {
            name,
            description,
            qty,
            price,
        };
        console.log(newproducts);
        axios.post("http://localhost:3000/products/", newproducts).then(() => {
            alert("product added");
        }).catch((err) => {
            alert(err);
        });

       
    }

    return (
        <div>
            
            <br /><br /><br /><br /><br />

            <div className="container">
                <form className="row g-3 needs-validation" novalidate onSubmit={sendData}>

                    <div className="col-md-4">
                        <label for="name" className="form-label">name</label>
                        <input type="text" className="form-control " id="validationServer02" aria-describedby="inputGroupPrepend3 validationServerUsernameFeedback" required
                            onChange={(e) => {
                                setname(e.target.value);

                            }} />

                        

                    </div>

                    <div className="col-md-4">
                        <label for="price" className="form-label">price</label>
                        <input type="number" className="form-control " id="validationServer02" aria-describedby="inputGroupPrepend3 validationServerUsernameFeedback" required
                            onChange={(e) => {
                                setprice(e.target.value);

                            }} />

                        

                    </div>
                    
                    <div className="col-md-3">
                        <label for="cvv" className="form-label">qty</label>
                        <input type="number" className="form-control " id="validationServer05" aria-describedby="validationServer05Feedback" required
                            onChange={(e) => {
                                setqty(e.target.value);

                            }} />

                        <div id="validationServer05Feedback" className="invalid-feedback">

                        </div>

                    </div>
                    <div className="col-md-4">
                        <label for="description" className="form-label">description</label>
                        <input type="text" className="form-control " id="validationServer02" aria-describedby="inputGroupPrepend3 validationServerUsernameFeedback" required
                            onChange={(e) => {
                                setdescription(e.target.value);

                            }} />

                        <div className="valid-feedback">

                        </div>

                    </div>

                    <br />
                    <br />
                    <br />
                    <div className="col-12">
                        <button className="btn btn-primary" type="submit">add now</button>
                    </div>
                </form>
            </div>
        </div>
    );
}
