import React, { useState } from "react";
import axios from "axios";

 

export default function Addcustomer() {

    const [name, setname] = useState("");
    const [email, setemail] = useState("");
    const [role, setrole] = useState("customer");
    const [password, setpassword] = useState("");

    function sendData(e) {
        e.preventDefault();
        const newusers = {
            name,
            email,
            role,
            password,
        };
        console.log(newusers);
        axios.post("http://localhost:3000/user/", newusers).then(() => {
            alert("user added");
        }).catch((err) => {
            alert(err);
        });

       
    }

    return (
        <div>
            <h1>create customer account</h1>
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
                        <label for="password" className="form-label">password</label>
                        <input type="password" className="form-control " id="validationServer02" aria-describedby="inputGroupPrepend3 validationServerUsernameFeedback" required
                            onChange={(e) => {
                                setpassword(e.target.value);

                            }} />

                        

                    </div>
                   
                    <div className="col-md-3">
                        
                        <input type="hidden" className="form-control " id="validationServer05" aria-describedby="validationServer05Feedback" required
                            onChange={(e) => {
                                setrole(e.target.value);

                            }} />

                        <div id="validationServer05Feedback" className="invalid-feedback">

                        </div>

                    </div>
                    <div className="col-md-4">
                        <label for="email" className="form-label">email</label>
                        <input type="text" className="form-control " id="validationServer02" aria-describedby="inputGroupPrepend3 validationServerUsernameFeedback" required
                            onChange={(e) => {
                                setemail(e.target.value);

                            }} />

                        

                    </div>

                    <br />
                    <br />
                    <br />
                    <div className="col-12">
                        <button className="btn btn-primary" type="submit">create</button>
                    </div>
                </form>
            </div>
        </div>
    );
}
