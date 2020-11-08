import React from 'react';
import { connect } from 'react-redux';
import { CartStoreItem } from '../../redux/cart/cart.types';
import { RootState } from '../../redux/root-reducer';
import CartItem from '../cart-item/cart-item.component';
import CustomButton from '../custom-button/custom-button.component';

import './cart-dropdown.styles.scss';

interface IProps {
  cartItems: CartStoreItem[]
}

const CartDropdown = ({ cartItems }: IProps): JSX.Element => (
  <div className='cart-dropdown'>
    <div className='cart-items'>
      {cartItems.length ? (
        cartItems.map(cartItem => (
          <CartItem key={cartItem.id} item={cartItem} />
        ))
      ) : (
          <span className='empty-message'>Your cart is empty</span>
        )}
    </div>
    <CustomButton>
      GO TO CHECKOUT
  </CustomButton>
  </div>
);

const mapStateToProps = ({ cart: { cartItems } }: RootState) => ({
  cartItems
});


export default connect(mapStateToProps)(CartDropdown);