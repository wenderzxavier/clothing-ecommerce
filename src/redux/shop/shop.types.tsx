interface Item {
  id: number,
  name: string,
  imageUrl: string,
  price: number
}

export interface Collection {
  id: number,
  title: string,
  routeName: string,
  items: Item[]
}

export interface ShopCollections {
  [key: string]: Collection,
}

export interface ShopState {
  collections: ShopCollections
}