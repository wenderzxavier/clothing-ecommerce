import React, { ComponentProps } from 'react';
import { connect } from 'react-redux';
import { RootState } from '../../redux/root-reducer';
import { selectCollection } from '../../redux/shop/shop.selectors';
import CollectionItem, { Item } from '../../components/collection-item/collection-item.component';

import './collection.styles.scss';

interface IProps {
  collection: {
    id: string,
    title: string,
    routeName: string,
    items: Item[]
  }
}

const CollectionPage = ({ collection }: IProps): JSX.Element => {
  const { title, items } = collection;
  return (
    <div className="collection-page">
      <div className="title">{title}</div>
      <div className="items">
        {items.map((item: any) => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}

const mapStateToProps = (state: RootState, ownProps: ComponentProps<any>) => ({
  collection: selectCollection(ownProps.match.params.collectionId)(state)
});

export default connect(mapStateToProps, null)(CollectionPage);