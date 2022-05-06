import React, { Component } from "react";
import axios from 'axios';
import { Link } from "react-router-dom";
 
const Record = (props) => (
  <tr>
    
    
    <td>{props.record.name}</td>
    <td>{props.record.email}</td>
    <td>{props.record.role}</td>
    <td>{props.record.password}</td>
    <td>
      <Link to={"/update/" + props.record._id}>Edit</Link> |
      <a
        href="/admin/viewUser"
        onClick={() => {
          props.deleteRecord(props.record._id);
          this.props.history.push("/admin/payments");
        }}
      >
        Delete
      </a>
    </td>
  </tr>
);
 
export default class UserRecordList extends Component {
  
  constructor(props) {
    super(props);
    this.deleteRecord = this.deleteRecord.bind(this);
    this.state = { records: [] };
  }
 
  
  componentDidMount() {
    axios
      .get("http://localhost:3000/user/")
      .then((response) => {
        this.setState({ records: response.data });
      })
      .catch(function (error) {
        console.log(error);
      });
  }
 
  
  deleteRecord(id) {
    axios.delete("http://localhost:3000/user" + id).then((response) => {
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

        <br/><br/><br/><br/>
      <div className="container">
        
       <div><h3> user Record List</h3></div> 
        <table className="table table-striped" style={{ marginTop: 20 }}>
          <thead>
            <tr>
              
              
              <th>name</th>
              <th>email</th>
              <th>role</th>
              <th>password</th>
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
