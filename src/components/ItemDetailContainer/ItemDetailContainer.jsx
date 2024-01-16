import { useEffect, useState } from 'react'
import './itemdetailcontainer.css'
import ItemDetail from '../ItemDetail/ItemDetail.jsx'
import { useParams } from 'react-router-dom'
import { doc, getDoc } from 'firebase/firestore'
import { db } from '../../services/firebase/firebaseConfig'

const ItemDetailContainer = () => {
    const [products, setProducts] = useState(null)
    const [loading, setLoading] = useState(true)
    const [productoExiste, setProductExiste] = useState(false)
    const { itemId } = useParams ()

    useEffect(() => {
      setLoading(true)

      const docRef = doc(db, 'products', itemId)

      getDoc(docRef)
      .then(response => {
        const data = response.data()
        const productAdapted = { id: response.id, ...data }

        if (response.exists()) {
          setProductExiste(false) 
          setProducts(productAdapted)
        } else {
          setProductExiste(true)
        }
      })
        .catch(error => {
          console.log(error)
        })
        .finally(() => {
          setLoading(false)
        })
        },  [itemId])

  return (
    <section className='py-2 d-flex justify-content-center align-items-center' >
      <div className='p-4 border border-success shadowMan bg-black rounded w-55 mx-auto custom-max-width'>
        {productoExiste ? (
          <div> El Producto No Existe</div>
        ) : (
        <ItemDetail {...products} />
        )}
      </div>
    </section>
  )
}

export default ItemDetailContainer