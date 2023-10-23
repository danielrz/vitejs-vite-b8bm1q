import { RIGHT_GAP } from "../constants";
import { ItemsDimensions } from "../types";

function getNodeChildrenWidths(node: HTMLElement): ItemsDimensions {
  const { width: containerWidth, left: containerLeft } = node.getBoundingClientRect();
  const children = Array.from(node.childNodes) as HTMLElement[];

  let moreItemWidth = 0

  const necessaryItemsWidths = children.reduce<number[]>((widths, child) => {
    if (child.getAttribute('id') === 'more') {
      moreItemWidth = child.getBoundingClientRect().width
      return widths
    }

    const { width, left } = child.getBoundingClientRect()
    const childFullWidth = width + (left - containerLeft) + RIGHT_GAP
    console.log('childFullWidth', childFullWidth)

    // each width item is the sum of the width of the item and the gap to the left

    return [...widths, childFullWidth]
  }, [])

  return { necessaryItemsWidths, moreItemWidth, containerWidth }
}

function getLastVisibleItemIndex(itemsDimentsions: ItemsDimensions): number {
  const { necessaryItemsWidths, moreItemWidth, containerWidth } = itemsDimentsions

  if (!necessaryItemsWidths.length) {
    return -1
  }

  const lastItemCumulatedWidth = necessaryItemsWidths[necessaryItemsWidths.length - 1]

  if (lastItemCumulatedWidth <= containerWidth) {
    return necessaryItemsWidths.length - 1
  }

  const visibleItems = necessaryItemsWidths.filter((itemWidth) => {
    return (itemWidth + moreItemWidth) <= containerWidth
  })

  return visibleItems.length - 1
}

export {
  getNodeChildrenWidths,
  getLastVisibleItemIndex
}