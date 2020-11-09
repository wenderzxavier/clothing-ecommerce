import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import CheckoutItem from '../../components/checkout-item/checkout-item.component';
import { selectCartItems, selectCartTotal } from '../../redux/cart/cart.selectors';
import { CartStoreItem } from '../../redux/cart/cart.types';
import { RootState } from '../../redux/root-reducer';

import './checkout.styles.scss';

interface IProps {
  cartItems: CartStoreItem[],
  total: number
}

const CheckoutPage = ({ cartItems, total }: IProps): JSX.Element => (
  <div className='checkout-page'>
    <div className='checkout-header'>
      <div className='header-block'>
        <span>Product</span>
      </div>
      <div className='header-block'>
        <span>Description</span>
      </div>
      <div className='header-block'>
        <span>Quantity</span>
      </div>
      <div className='header-block'>
        <span>Price</span>
      </div>
      <div className='header-block'>
        <span>Remove</span>
      </div>
    </div>
    {cartItems.map(cartItem => (
      <CheckoutItem key={cartItem.id} cartItem={cartItem} />
    ))}
    <div className='total'>TOTAL: ${total}</div>
  </div>);

const mapStateToProps = createStructuredSelector<RootState, IProps>({
  cartItems: selectCartItems,
  total: selectCartTotal
})

export default connect(mapStateToProps)(CheckoutPage);
