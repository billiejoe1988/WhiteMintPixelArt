import { useState } from 'react';
import './itemcount.css';

const ItemCount = ({stock, initial, onAdd}) => {
    const [quantity, setQuantity] = useState(initial);

    const increment = () => {
        if(quantity < stock) {
            setQuantity(quantity+1);
        }
    }
    const decrement = () => {
        if(quantity > 1){
            setQuantity(quantity -1);
        }
    }

  return (
    <div className='Counter'>
        <div className='Controls'>
            <button className='button mx-3' onClick={decrement}>-</button>
            <h3 className='Number mt-2'>{quantity}</h3>
            <button className='button mx-3' onClick={increment}>+</button>
        </div>
        <div>
             <button className='button' onClick={()  => onAdd(quantity)} disabled={!stock}>
             Add to Cart
             </button>
        </div>
    </div>
  )
}

export default ItemCount;