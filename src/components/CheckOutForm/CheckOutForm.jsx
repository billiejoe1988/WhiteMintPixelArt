import './checkOutForm.css';
import { useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const CheckOutForm = ({ onConfirm }) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [validationError, setValidationError] = useState(false);

  const handleConfirm = async (e) => {
    e.preventDefault();

    if (!name || !phone || !email) {
      setValidationError(true);
      return;
    }

    setValidationError(false);

    const userData = {
      name,
      phone,
      email
    };

    try {
      const orderId = await onConfirm(userData);

      toast.success(`Your order has been placed successfully!`, {
        position: 'top-right',
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });

      setTimeout(() => {
        window.location.href = '/';
      }, 1500);
    } catch (error) {
      console.error('Error processing order:', error);

      toast.error('Error processing your order. Please try again.', {
        position: 'top-right',
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    }
  };

  return (
    <section className='container'>
      <form onSubmit={handleConfirm} className='form'>
        <label className='Label'>
          nombre
          <input
            className='Input'
            type='text'
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </label>
        <label className='Label'>
          telefono
          <input
            className='Input'
            type='number'
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />
        </label>
        <label className='Label'>
          mail
          <input
            className='Input'
            type='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>
        {validationError && (
          <p className='ValidationError'>Please fill in all the required fields.</p>
        )}
        <div className='Label'>
          <button type='submit' className='Button'>Create Order</button>
        </div>
      </form>
    </section>
  );
};

export default CheckOutForm;
