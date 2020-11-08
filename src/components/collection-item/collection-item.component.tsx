import React, { Dispatch } from 'react';
import { connect } from 'react-redux';
import { addItem } from '../../redux/cart/cart.actions';
import { CartActionsTypes } from '../../redux/cart/cart.types';
import CustomButton from '../custom-button/custom-button.component';

import './collection-item.styles.scss';

export interface Item {
  id: string,
  name: string,
  price: number,
  imageUrl: string,
};

interface IProps {
  item: Item
  addItem: Function
}

const CollectionItem = ({ item, addItem }: IProps): JSX.Element => {
  const { name, price, imageUrl } = item
  return (
    <div className='collection-item'>
      <div
        className='image'
        style={{
          backgroundImage: `url(${imageUrl})`
        }}
      />
      <div className='collection-footer'>
        <span className='name'>{name}</span>
        <span className='price'>{price}</span>
      </div>
      <CustomButton onClick={() => addItem(item)} inverted>Add to cart</CustomButton>
    </div>
  );

}

// const mapStateToProps = ({ user }: RootState) => ({
//   currentUser: user.currentUser
// });

const mapDispatchToProps = (dispatch: Dispatch<CartActionsTypes>) => ({
  addItem: (item: Item) => dispatch(addItem(item))
})

export default connect(null, mapDispatchToProps)(CollectionItem);