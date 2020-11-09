import React, { Dispatch } from 'react';
import { connect } from 'react-redux';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import { toggleCartHidden } from '../../redux/cart/cart.actions';
import { selectCartItems } from '../../redux/cart/cart.selectors';
import { CartActionsTypes, CartStoreItem } from '../../redux/cart/cart.types';
import { RootState } from '../../redux/root-reducer';
import CartItem from '../cart-item/cart-item.component';
import CustomButton from '../custom-button/custom-button.component';

import './cart-dropdown.styles.scss';

interface IProps extends RouteComponentProps<any> {
  cartItems: CartStoreItem[],
  dispatch: Dispatch<CartActionsTypes>
}

const CartDropdown = ({ cartItems, history, dispatch }: IProps): JSX.Element => (
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
    <CustomButton onClick={() => {
      history.push('/checkout');
      dispatch(toggleCartHidden());
    }}>
      GO TO CHECKOUT
  </CustomButton>
  </div>
);

const mapStateToProps = (state: RootState) => ({
  cartItems: selectCartItems(state)
});


export default withRouter(connect(mapStateToProps)(CartDropdown));