import './checkout.styles.jsx';

import { useSelector } from 'react-redux';
import { selectCartItems } from '../../store/cart/cart.selector.js';
import { selectCartTotal } from '../../store/cart/cart.selector.js';

import CheckoutItem from '../../components/checkout-item/checkout-item.components';
import { CheckoutContainer, CheckoutHeader, HeaderBlock, Total } from './checkout.styles.jsx';

const Checkout = () => {

const cartItems = useSelector(selectCartItems);
const cartTotal = useSelector(selectCartTotal);

    return (
        <CheckoutContainer >
            <CheckoutHeader>
                <HeaderBlock>
                    <span>Product</span>
                </HeaderBlock>
                <HeaderBlock>
                    <span>Description</span>
                </HeaderBlock>
                <HeaderBlock>
                    <span>Quantity</span>
                </HeaderBlock>
                <HeaderBlock>
                    <span>Price</span>
                </HeaderBlock>
                <HeaderBlock>
                    <span>Remove</span>
                </HeaderBlock>
            </CheckoutHeader>
            <div>
            {
            cartItems.map((cartItem) => (
            <CheckoutItem key={cartItem.id} cartItem={cartItem}/>
            ))}
            <Total>Total: {cartTotal}$</Total>
            </div>
        </CheckoutContainer>
    )
}

export default Checkout;