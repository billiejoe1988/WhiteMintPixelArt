import { useEffect, useState } from 'react'
import './itemdetailcontainer.css'
import { getProductsById } from '../../asyncMock'
import ItemDetail from '../ItemDetail/ItemDetail.jsx'
import { useParams } from 'react-router-dom'

const ItemDetailContainer = () => {
    const [product, setProduct] = useState(null)

    const { itemId } = useParams ()

    useEffect(() => {
        getProductsById(itemId)
           .then(response => {
               setProduct(response)
           })
           .catch(error => {
               console.error(error)
           })
    },  [itemId])

  return (
    <div className='py-2 d-flex justify-content-center align-items-center' >
      <div className='p-4 border border-success shadowMan bg-black rounded w-55 mx-auto custom-max-width'>
        <ItemDetail {...product} />
      </div>
    </div>

  )
}

export default ItemDetailContainer;