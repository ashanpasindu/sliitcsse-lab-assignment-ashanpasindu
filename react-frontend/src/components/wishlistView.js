import React, { Component } from 'react';
import axios from 'axios';
// import { Link } from "react-router-dom";

const Record = (props) => (
    <tr>


        <td>{props.record.name}</td>
        <td>{props.record.description}</td>

        <td>{props.record.price}</td>
        <td>
            <a
                href="/customer/wishlist"
                onClick={() => {
                    props.deleteRecord(props.record._id);

                }}
            >
                Delete
            </a>

        </td>
    </tr>
);

export default class WishListview extends Component {

    constructor(props) {
        super(props);
        this.deleteRecord = this.deleteRecord.bind(this);
        this.state = { records: [] };
    }


    componentDidMount() {
        axios
            .get("http://localhost:3000/wishlists/")
            .then((response) => {
                this.setState({ records: response.data });
            })
            .catch(function (error) {
                console.log(error);
            });
    }


    deleteRecord(id) {
        axios.delete("http://localhost:3000/wishlists/" + id).then((response) => {
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
                <div></div>

                <br /><br /><br /><br />
                <div className="container">

                    <div><h3> wishlist</h3></div>
                    <table className="table table-striped" style={{ marginTop: 20 }}>
                        <thead>
                            <tr>


                                <th>name</th>
                                <th>description</th>

                                <th>price</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>{this.recordList()}</tbody>
                    </table>
                </div>
            </div>
        );
    }
}
