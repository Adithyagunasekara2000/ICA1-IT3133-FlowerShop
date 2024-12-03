
import './layout.css';
import Product from './Product';
import {flowers} from './FlowerDB';
import { useState } from 'react';
import Cart from './Cart'
export default function Products(){
    const [cartItems, setCartItems] = useState([]);
    const handleAddToCart = (flower, quantity) => {
        if (quantity > 0) {
          setCartItems((prev) => [
            ...prev,
            { ...flower, quantity }
          ]);
        }
      };
    return(
        <>
            <div className="item1">
                <h1>Flower Shop</h1>
            </div>
            <div className="item2">
                <h4 className="card-title">Buy flowers</h4>
                <div className="grid-container">
                  <Product flowers={flowers} handleAddToCart={handleAddToCart}/>
                
     
                </div>

            </div>
            <div className="item3">
            <Cart cartItems={cartItems} />
            </div>
        </>
    );

}