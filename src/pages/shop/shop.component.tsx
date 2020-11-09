import React from 'react';
import { connect } from 'react-redux';
import CollectionPreview from '../../components/collection-preview/collection-preview.component';
import { RootState } from '../../redux/root-reducer';
import { selectCollections } from '../../redux/shop/shop.selectors';
import { Collection } from '../../redux/shop/shop.types';

interface IProps {
  collections: Collection[]
};

const Shop = ({ collections }: IProps): JSX.Element => (
  <div className="shop-page">
    {
      collections.map(({ id, ...collectionProps }) => (
        <CollectionPreview key={id} {...collectionProps} />
      ))
    }
  </div>
)

const mapStateToProps = (state: RootState) => ({
  collections: selectCollections(state)
})


export default connect(mapStateToProps)(Shop);