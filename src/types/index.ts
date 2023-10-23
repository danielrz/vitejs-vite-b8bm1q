export interface Item {
  id: string;
  name: string;
  href: string;
}

export interface ItemsDimensions {
  necessaryItemsWidths: number[];
  moreItemWidth: number;
  containerWidth: number;
}