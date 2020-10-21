import React from 'react'
import './checkoutproduct.styles.css'
import {useStateValue} from '../../StateProvider'

function CheckoutProduct({ id, price, title, image, rating }) {
    const [{basket}, dispatch] =useStateValue()

    const removeButton = ()=>{
        dispatch({
            type: 'REMOVE_FROM_BASKET',
            id
        })
    }
    return (
        <div className='checkoutProduct'>
            <img className='checkoutProduct__image' src={image} />

            <div className='checkoutProduct__info'>
                <p className='checkoutProduct__title'>{title}</p>

                <p className='checkoutProduct__price'>
                    <small>$</small>
                    <strong>{price} </strong>
                </p>

                <div className='checkoutProduct__rating'>
                    {
                        Array(rating).fill().map((_, i) => (
                            <p> ⭐  </p>
                        ))
                    }
                </div>
                <button onClick={removeButton}>Remove from basket</button>
            </div>
        </div>
    )
}

export default CheckoutProduct
