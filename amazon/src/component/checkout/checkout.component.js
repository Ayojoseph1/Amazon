import React from 'react'
import { useStateValue } from '../../StateProvider'
import './checkout.styles.css'
import CheckoutProduct from '../checkoutProduct/checkoutproduct.component'
import SubTotal from '../subtotal/subtotal.component'

function Checkout() {
    const [{ basket }, dispatch] = useStateValue()
    return (
        <div className='checkout'>
            <div className='checkout__left'>

                <img className='checkout_ad' src='https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg' alt='' />
                {basket?.length === 0 ? (
                    <div>
                        <h1>Your shopping basket is empty</h1>
                        <p>
                            You have no items in your basket. To buy one or more items click on 'Add to basket' next to the item
                    </p> 
                    </div>
                ) : (
                        <div>
                            {basket.map(item => (
                                <CheckoutProduct
                                    id={item.id}
                                    title={item.title}
                                    image={item.image}
                                    price={item.price}
                                    rating={item.rating}
                                />
                            ))}
                        </div>
                    )
                }
            </div>
            {basket.length > 0 && (
                <div className='checkout__right'>
                    <SubTotal/>
                </div>
            )}
        </div>
    )
}

export default Checkout
