import React from 'react'
import './subtotal.styles.css'
import CurrencyFormat from 'react-currency-format'
import { useStateValue } from '../../StateProvider'
import {getBasketTotal} from '../../reducer'

function SubTotal() {
    const [{ basket }, dispatch] = useStateValue();

    return (
        <div className='subtotal'>
            <CurrencyFormat
                renderText={(value) => (
                    <>
                        <p>
                            Subtotal ({basket.length} items): <strong>{`    `}</strong>
                        </p>
                        <small className='subtotal__gift'>
                            <input type='checkbox' /> This order contains
                    </small>
                    </>
                )}
                decimalScale={2}
                value={getBasketTotal(basket)}
                displayType={'text'}
                thousandSeperator={true}
                prefix={'$'}
            />
            <button>Proceed to checkout</button>
        </div>
    )
}

export default SubTotal
