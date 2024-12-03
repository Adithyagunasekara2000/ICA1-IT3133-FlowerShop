import './layout.css';
import {useState} from 'react'
export default function Product(props){
    const [inputData,setInputData]=useState({});
    const [cartItem,setCartItem]=useState([]);

    const handleInput=(event)=>{
        const name=event.target.name;
        const value=event.target.value;
        setInputData(values=>({...values,[name]:value}))
    }

    const handleCart=(flower)=>{
        const quantity=inputData[flower.name]?.quantity||0;
        setCartItem((prev)=>[...prev,inputData[flower.name]])
    }
    return(
        <div className="grid-item">
          
           
            { props.flowers.map((flower,index)=>(
 <div class="card">
            <div class="card-body">
                <div key={index}>
                <h5 class="card-title">{flower.name} Price:{flower.price}</h5> 
                    <img src={require(`../assests/image/${flower.img}`)}/> 
                    
                    
                   
            
                    <div class="quantity-container">
                        <label for="quantity">Quantity:</label>
                        <input type="number" id="quantity" name="quantity" value={inputData.quantity||0} onChange={handleInput}/>
                    </div>
                    <button class="card-button">Add to Cart</button>
               
                   </div>
                   </div>  
                   </div>
                 
              
           ))
        }
     
        </div>    
       
    );
}