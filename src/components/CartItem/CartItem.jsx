import React, { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import './cartitem.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const CartItem = ({ item }) => {
  const { removeItem } = useContext(CartContext);

  if (!item) {
    return null;
  }

  const { img, name, price } = item;

  const handleRemoveItem = () => {
    if (item.id) {
      removeItem(item.id);
    }
  };

  return (
    <li className="card mb-3 bg-white d-flex mx-auto align-items-center p-3 mx-auto">
          <div className="d-flex justify-content-between w-100">
            <div>
              <img
                src={img}
                alt={name}
                className="ItemImgDet rounded"
                style={{ maxWidth: '190px', maxHeight: '130px', marginRight: '15px' }}
              />
            </div>
            <div className="flex-grow-1">
              <header className="Header">
                <h2 className="textos py-1">{name}</h2>
              </header>
              <p className="Info">
                Price: <span className="textos"> ${price}</span>
              </p>
              <p className="Info">
                Quantity: <span className="textos">{item.quantity}</span>
              </p>
            </div>
            <button className="button btn-sm" onClick={handleRemoveItem}>
              Delete
            </button>
          </div>
    </li>
  );
};

export default CartItem;

