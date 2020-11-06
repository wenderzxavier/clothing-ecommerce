import React, { Dispatch } from 'react';
import { connect } from 'react-redux';
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import { toggleCartHidden } from '../../redux/cart/cart.actions';
import { CartActionsTypes } from '../../redux/cart/cart.types';


import './cart-icon.styles.scss';

interface IProps {
  toggleCartHidden: any
}

const CartIcon = ({ toggleCartHidden }: IProps): JSX.Element => (
  <div className="cart-icon" onClick={toggleCartHidden}>
    <ShoppingIcon className='shopping-icon' />
    <span className="item-count">0</span>
  </div>
);

const mapDispatchToProps = (dispatch: Dispatch<CartActionsTypes>) => ({
  toggleCartHidden: () => dispatch(toggleCartHidden())
})

export default connect(null, mapDispatchToProps)(CartIcon);