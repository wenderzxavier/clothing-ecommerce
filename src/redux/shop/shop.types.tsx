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

export interface ShopState {
  collections: Collection[]
}