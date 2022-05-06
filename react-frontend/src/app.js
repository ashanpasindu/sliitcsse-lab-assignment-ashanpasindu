import Header from './components/Header';
import Main from './components/Main';
import Basket from './components/Basket';
import data from './data';
import { useState } from 'react';
import RecordList from './components/ViewProducts';
import Addproducts from './components/Addproducts';
import RecordListCustomer from './components/viewProductsCustomer';
import EditProducts from './components/updateProdusts';
import Addcustomer from './components/createuser';
import AddTrader from './components/createUserTrader';
import UserRecordList from './components/ViewUsers';
import WishListview from './components/wishlistView';
import AddTowishlist from './components/AddTowishlist';

<div>
<Router>
<Routes>
  
  <Route exact path="/add" element={<Addproducts />} />
  <Route exact path="/admin" element={<RecordList />} />
  <Route exact path="/customer" element={<RecordListCustomer />} />
  <Route exact path="/admin/update/:id" element={<EditProducts/>} />
  <Route exact path="/addcustomer" element={<Addcustomer />} />
  <Route exact path="/admin/addtrader" element={<AddTrader />} />
  <Route exact path="/admin/viewUser" element={<UserRecordList />} />
  <Route exact path="/wishlist/:id" element={<AddTowishlist/>} />
  <Route exact path="/customer/wishlist" element={<WishListview/>}/>
  
  
</Routes>

</Router>
</div>
function App() {
  const { products } = data;
  const [cartItems, setCartItems] = useState([]);
  const onAdd = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist) {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, qty: 1 }]);
    }
  };
  const onRemove = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist.qty === 1) {
      setCartItems(cartItems.filter((x) => x.id !== product.id));
    } else {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x
        )
      );
    }
  };
  return (
    <div className="App">
      <Header countCartItems={cartItems.length}></Header>
      <div className="row">
        <Main products={products} onAdd={onAdd}></Main>
        <Basket
          cartItems={cartItems}
          onAdd={onAdd}
          onRemove={onRemove}
        ></Basket>
      </div>
    </div>
  );
}

export default App