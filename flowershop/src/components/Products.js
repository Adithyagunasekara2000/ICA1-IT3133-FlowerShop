
import './layout.css';
import Product from './Product';
import {flowers} from './FlowerDB';
import Cart from './Cart'
import { useState } from 'react';
export default function Products(){
    const [cartItems, setCartItems] = useState([]); 
    return(
        <>
            <div className="item1">
                <h1>Flower Shop</h1>
            </div>
            <div className="item2">
                <h4 className="card-title">Buy flowers</h4>
                <div className="grid-container">
                  <Product flowers={flowers}/>
                
     
                </div>

            </div>
            <div className="item3">
            <Cart cartItems={cartItems} />
            </div>
        </>
    );

}