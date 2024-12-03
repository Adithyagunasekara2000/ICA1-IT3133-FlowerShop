export default function Cart(props) {
    const calculateGrandTotal = () => {
        return props.cartItems.reduce(
          (total, item) => total + item.price * item.quantity,
          0
        );
      };
    
    return (
        <div className="table-container">
            <h4 className="card-title">Cart</h4>
            <table>
                <thead>

                    <td>Product</td>
                    <td>QTY</td>
                    <td>Price</td>

                </thead>
                
                     {props.cartItems.map((item, index) => (
                        <tr key={index}>
                          <td>{item.name}</td>
                          <td>{item.quantity}</td>
                          <td>{item.price * item.quantity}</td>
                        </tr>
                      ))}
                
                <tr>
                    <td >Grand Total : </td>
                    <td colSpan={2}>Grand Total</td>
                </tr>
            </table>
           
        </div>
    );
}