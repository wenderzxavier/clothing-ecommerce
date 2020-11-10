import React from 'react';
import { connect } from 'react-redux';
import { RootState } from '../../redux/root-reducer';
import { selectCollectionsForPreview } from '../../redux/shop/shop.selectors';
import { Collection } from '../../redux/shop/shop.types';
import CollectionPreview from '../collection-preview/collection-preview.component';

import './collections-overview.styles.scss';

interface IProps {
  collections: Collection[]
};

const CollectionsOverview = ({ collections }: IProps): JSX.Element => (
  <div className="collections-overview">
    {
      collections.map(({ id, ...collectionProps }) => (
        <CollectionPreview key={id} {...collectionProps} />
      ))
    }
  </div>
);

const mapStateToProps = (state: RootState) => ({
  collections: selectCollectionsForPreview(state)
});

export default connect(mapStateToProps, null)(CollectionsOverview);