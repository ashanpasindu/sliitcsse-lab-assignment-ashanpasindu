import React, { Component } from "react";
import axios from 'axios';
import { Link } from "react-router-dom";

const Record = (props) => (
    <tr>


        <td>{props.record.name}</td>
        <td>{props.record.description}</td>
        <td>{props.record.qty}</td>
        <td>{props.record.price}</td>
        <td>
            <Link to={"/cart/" + props.record._id}>add to cart</Link> |
            <Link to={"/wishlist/" + props.record._id}>add to wishlist</Link>
            
        </td>
    </tr>
);

export default class RecordListCustomer extends Component {

    constructor(props) {
        super(props);
        this.deleteRecord = this.deleteRecord.bind(this);
        this.state = { records: [] };
    }


    componentDidMount() {
        axios
            .get("http://localhost:3000/products/")
            .then((response) => {
                this.setState({ records: response.data });
            })
            .catch(function (error) {
                console.log(error);
            });
    }


    deleteRecord(id) {
        axios.delete("http://localhost:3000/products" + id).then((response) => {
            console.log(response.data);
        });

        this.setState({
            record: this.state.records.filter((el) => el._id !== id),
        });
    }


    recordList() {
        return this.state.records.map((currentrecord) => {
            return (
                <Record
                    record={currentrecord}
                    deleteRecord={this.deleteRecord}
                    key={currentrecord._id}
                />
            );
        });
    }


    render() {
        return (
            <div>
                <div>
                <a class="btn btn-primary" href="/customer/wishlist" role="button">wishlist</a>
                <a class="btn btn-primary" href="/customer/cart" role="button">cart</a>
                </div>

                <br /><br /><br /><br />
                <div className="container">

                    <div><h3> Products</h3></div>
                    <table className="table table-striped" style={{ marginTop: 20 }}>
                        <thead>
                            <tr>


                                <th>name</th>
                                <th>description</th>
                                <th>qty</th>
                                <th>price</th>
                                {/* <th>Action</th> */}
                            </tr>
                        </thead>
                        <tbody>{this.recordList()}</tbody>
                    </table>
                </div>
            </div>
        );
    }
}
