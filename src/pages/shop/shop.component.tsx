import React from 'react';
import CollectionPreview from '../../components/collection-preview/collection-preview.component';
import { SHOP_DATA } from './shop.data';

interface Item {
  id: number,
  name: string,
  imageUrl: string,
  price: number
}

interface Collection {
  id: number,
  title: string,
  routeName: string,
  items: Item[]
}

interface DirectoryProps { };
interface DirectoryState {
  collections: Collection[]
};

class Shop extends React.Component<DirectoryProps, DirectoryState> {
  state = {
    collections: SHOP_DATA
  }

  render() {
    const { collections } = this.state;
    return (
      <div className="shop-page">
        {
          collections.map(({ id, ...collectionProps }) => (
            <CollectionPreview key={id} {...collectionProps} />
          ))
        }
      </div>
    );
  }
}

export default Shop;