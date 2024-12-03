import './layout.css';
import Product from './Product';
import { flowers } from './FlowerDB';
import Cart from './Cart';
import { useState } from 'react';

export default function Products(props) {
  const [cartItems, setCartItems] = useState([]);
  const [inputData, setInputData] = useState({});
 
  const handleInput = (event, flowerName) => {
    const value = event.target.value;
    setInputData((prev) => ({
      ...prev,
      [flowerName]: { quantity: value }
    }));
  };

  const handleCart = (flower) => {
    const quantity = inputData[flower.name]?.quantity || 0;
    if (quantity > 0) {
      
      props.handleAddToCart(flower, quantity);
    }
  };

  return (
    <div className="grid-item">
      {props.flowers.map((flower, index) => (
        <div className="card" key={index}>
          <div className="card-body">
            <h5 className="card-title">
              {flower.name} Price: {flower.price}
            </h5>
            <img src={require(`../assests/image/${flower.img}`)} alt={flower.name} />
            <div className="quantity-container">
              <label htmlFor="quantity">Quantity:</label>
              <input
                type="number"
                id="quantity"
                name="quantity"
                min="1"
                value={inputData[flower.name]?.quantity || 0}
                onChange={(e) => handleInput(e, flower.name)}
              />
            </div>
            <button className="card-button" onClick={() => handleCart(flower)}>
              Add to Cart
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}