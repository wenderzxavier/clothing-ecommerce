import React, { Dispatch } from 'react';
import { connect } from 'react-redux';
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import { toggleCartHidden } from '../../redux/cart/cart.actions';
import { CartActionsTypes, CartStoreItem } from '../../redux/cart/cart.types';
import { RootState } from '../../redux/root-reducer';


import './cart-icon.styles.scss';

interface IProps {
  toggleCartHidden: Function,
  itemCount: number
}

const CartIcon = ({ toggleCartHidden, itemCount }: IProps): JSX.Element => (
  <div className="cart-icon" onClick={() => toggleCartHidden()}>
    <ShoppingIcon className='shopping-icon' />
    <span className="item-count">{itemCount}</span>
  </div>
);


const mapStateToProps = ({ cart: { cartItems } }: RootState) => ({
  itemCount: cartItems.reduce((accumulatedQuantity: number, cartItem: CartStoreItem) =>
    accumulatedQuantity + cartItem.quantity
    , 0)
});


const mapDispatchToProps = (dispatch: Dispatch<CartActionsTypes>) => ({
  toggleCartHidden: () => dispatch(toggleCartHidden())
})

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);