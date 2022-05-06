import React, { Component } from "react";
import axios from 'axios';
import { useNavigate, useParams } from "react-router-dom";


export const withRouter = (WrappedComponent) => (props) => {
  const params = useParams();
  const navigate = useNavigate();

  return <WrappedComponent {...props} params={params} navigate={navigate} />;
};


  class addwishlist extends Component {
  
  constructor(props) {
    super(props);
 
    this.onChangename  = this.onChangename.bind(this);  
    this.onChangeprice = this.onChangeprice.bind(this);
    this.onChangedescription = this.onChangedescription.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
 
    this.state = {
        name: "",
        price: "", 
        description: "",
      records: [],
    };
  }
  
  componentDidMount() {
    
    axios
      .get("http://localhost:3000/products/" +this.props.params.id)
      .then((response) => {
        this.setState({
          name: response.data.name,
          price: response.data.price,
          description: response.data.description,
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  }
 
  
  onChangename(e) {
    this.setState({
      name: e.target.value,
    });
  }
 
 
 
  onChangeprice(e) {
    this.setState({
      price: e.target.value,
    });
  }
 
 
  onChangedescription(e) {
    this.setState({
      description: e.target.value,
    });
  }
 
  
  onSubmit(e) {
    e.preventDefault();
    const newEditedProduct = {
      name: this.state.name,
      price: this.state.price,
     
      description: this.state.description,
    };
    console.log(newEditedProduct);
 
    
    axios
      .post(
        "http://localhost:3000/wishlists/",newEditedProduct )
      .then((res) => console.log(res.data));
      
 
    
  }
  render() {
    return (
      <div>
          

<br/><br/><br/><br/><br/>
      <div className="container">
        <h3 align="center">add to wishlist</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>name: </label>
            <input
              type="text"
              className="form-control"
              value={this.state.name}
              onChange={this.onChangename}
            />
          </div>
          
         
          
          <div className="form-group">
            <label>Price: </label>
            <input
              type="Number"
              className="form-control"
              value={this.state.price}
              onChange={this.onChangeprice}
            />
            
          </div>
          
          
          <div className="form-group">
            <label> description: </label>
            <input
              type="text"
              className="form-control"
              value={this.state.description}
              onChange={this.onChangedescription}
            />
            
          </div>
          
          <br />
 
          <div className="form-group">
            <input
              type="submit"
              value="add to wishlist"
              className="btn btn-primary"
            />
          </div>
        </form>
      </div>
      </div>
    );
  }


}
export default withRouter(addwishlist);