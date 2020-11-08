import React from 'react';
import { CartStoreItem } from '../../redux/cart/cart.types';

import './cart-item.styles.scss';

interface IProps {
  item: CartStoreItem
}

const CartItem = ({ item: { imageUrl, price, name, quantity } }: IProps): JSX.Element => (
  <div className='cart-item'>
    <img src={imageUrl} alt='item' />
    <div className='item-details'>
      <span className='name'>{name}</span>
      <span className='price'>
        {quantity} x ${price}
      </span>
    </div>
  </div>);

export default CartItem;