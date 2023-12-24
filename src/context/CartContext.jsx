import { createContext, useState } from 'react';
import Swal from 'sweetalert2';
import { toast } from 'react-toastify';

export const CartContext = createContext({
  cart: [],
  addItem: () => {},
  removeItem: () => {},
  clearCart: () => {},
});

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const totalQuantity = cart.reduce((total, item) => total + item.quantity, 0);
  const total = cart.reduce((total, item) => total + item.price * item.quantity, 0);

  const isInCart = (itemId) => {
    return cart.some((prod) => prod.id === itemId);
  };

  const addItem = (item, quantity) => {
    const existingItem = cart.find((prod) => prod.id === item.id);
  
    if (!existingItem) {
      setCart((prev) => [...prev, { ...item, quantity }]);
      console.log("Item added to cart:", item);
      toast.success(`${quantity}  ${item.name} added to cart!`);
    } else {
      setCart((prev) => {
        const updatedCart = prev.map((prod) =>
          prod.id === item.id ? { ...prod, quantity: prod.quantity + quantity } : prod
        );
        console.log("Item quantity updated in cart:", item);
        toast.success(`${quantity} more ${item.name} added to cart!`);
        return updatedCart;
      });
    }
  };
  

  const removeItem = (itemId) => {
    setCart((prev) => {
      const cartItem = prev.find((prod) => prod.id === itemId);

      if (cartItem.quantity > 1) {
        const updatedCart = prev.map((prod) =>
          prod.id === itemId ? { ...prod, quantity: prod.quantity - 1 } : prod
        );
        console.log("Item quantity reduced in cart:", itemId);
        toast.warning("One item removed from your cart.");
        return updatedCart;
      } else {
        const cartUpdated = prev.filter((prod) => prod.id !== itemId);
        console.log("Item removed from cart:", itemId);
        toast.warning("Item removed from the cart.");
        return cartUpdated;
      }
    });
  };
  

  const clearCart = () => {
    setCart([]);
    console.log("Cart cleared");
    Swal.fire({
      title: 'Cart Cleared!',
      text: 'Your cart has been successfully cleared.',
      icon: 'success',
    });
  };

  return (
    <CartContext.Provider value={{ cart, totalQuantity, total, addItem, removeItem, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};
