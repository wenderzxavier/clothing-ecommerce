import React, { Dispatch } from 'react';
import { connect } from 'react-redux';
import { addItem, clearItemFromCart, removeItem } from '../../redux/cart/cart.actions';
import { CartActionsTypes, CartStoreItem } from '../../redux/cart/cart.types';
import { Item } from '../collection-item/collection-item.component';

import './checkout-item.styles.scss';

interface IProps {
  cartItem: CartStoreItem,
  clearItem: Function,
  addItem: Function,
  removeItem: Function
}

const CheckoutItem = ({ cartItem, clearItem, addItem, removeItem }: IProps): JSX.Element => {
  const { name, imageUrl, price, quantity } = cartItem;
  return (
    <div className='checkout-item'>
      <div className='image-container'>
        <img src={imageUrl} alt='item' />
      </div>
      <span className='name'>{name}</span>
      <span className='quantity'>
        <div className='arrow' onClick={() => removeItem(cartItem)}>
          &#10094;
        </div>
        <span className='value'>{quantity}</span>
        <div className='arrow' onClick={() => addItem(cartItem)}>
          &#10095;
        </div>
      </span>
      <span className='price'>{price}</span>
      <div className='remove-button' onClick={() => clearItem(cartItem)}>
        &#10005;
      </div>
    </div>
  );
}

const mapDispatchToProps = (dispatch: Dispatch<CartActionsTypes>) => ({
  clearItem: (item: Item): void => dispatch(clearItemFromCart(item)),
  addItem: (item: Item): void => dispatch(addItem(item)),
  removeItem: (item: Item): void => dispatch(removeItem(item))
})

export default connect(null, mapDispatchToProps)(CheckoutItem);