import { db } from '../../services/firebase/firebaseConfig'
import { useContext, useState } from 'react'
import { getDocs, collection, query, where, addDoc, documentId, Timestamp, writeBatch } from 'firebase/firestore'
import CheckOutForm from '../CheckOutForm/CheckOutForm'
import { CartContext } from '../../context/CartContext'

export const CheckOut = () => {
    const [loading, setLoading] = useState(false)
    const [orderId, setOrderId] = useState('')

    const { cart, total, clearCart } = useContext(CartContext)

    const createOrder = async ({ name, phone, email }) => {
        setLoading(true)

        try{
            const objOrder = {
                buyer: { name, phone, email },
                items: cart,
                total: total,
                date: Timestamp.fromDate(new Date())
            }

            const batch = writeBatch(db)

            const outOfStock = []

            const ids = cart.map((prod) => prod.id)

            const productRef = collection (db, 'products')

            const productsAddedFromFirestore = await getDocs(query(productRef, where(documentId(), 'in', ids)))

            const { docs } = productsAddedFromFirestore
 
            docs.forEach(doc => {
                const dataDoc = doc.data()
                const stockDb = dataDoc.stock

                const productAddedToCart = cart.find(prod => prod.id === doc.id)
                const prodQuantity = productAddedToCart?.quantity
                
                if(stockDb >= prodQuantity) {
                    batch.update(doc.ref, { stock: stockDb - prodQuantity })
                } else { 
                    outOfStock.push({ ...dataDoc, id: doc.id })
                }
            })

        if(outOfStock.length === 0) {
            await batch.commit()

            const orderRef = collection(db, 'orders')

            const orderAdded = await addDoc(orderRef, objOrder)

            setOrderId(orderAdded.id)
            clearCart()

        } else {
            console.error('Products out of stock')
        }
        
    }  catch (error) {
        console.log(error)
    } finally {
        setLoading(false)
    }
}

    if (loading) {
        return <div className='py-5 bg-white'>
            <h1 className='py-5 textos'>Your order is being generated...</h1>
        </div>
    }

    if (orderId) {
        return <div className='py-5 bg-white'>
            <h1 className='textos pb-5'>Order created successfully!</h1>
            <h2 className='text-black'>Order Id: {orderId}</h2>
        </div>
    }

    return (
        <section className='py-5 bg-white'>
            <h1 className='textos pb-5'>CheckOut</h1>
            <CheckOutForm onConfirm={createOrder} />
        </section>
    )
}
export default CheckOut;