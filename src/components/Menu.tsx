import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { Item, ItemsDimensions } from "../types";
import { getLastVisibleItemIndex, getNodeChildrenWidths } from "../utils";
import MoreButton from "./MoreButton";

function Menu({ items }: {items: Item[]}) {
  const ref = useRef<HTMLDivElement>(null)
  const [lastVisibleItemIndex, setLastVisibleItemIndex] = useState(-1)
  const [dimensions, setDimensions] = useState<ItemsDimensions>({
    necessaryItemsWidths: [],
    moreItemWidth: 0,
    containerWidth: 0
  })

  function onResize(): void {
    if (!ref.current) {
      return
    }
    const lastVisibleItemIndexValue = getLastVisibleItemIndex({
      necessaryItemsWidths: dimensions.necessaryItemsWidths,
      moreItemWidth: dimensions.moreItemWidth,
      containerWidth: ref.current.getBoundingClientRect().width
    })
    if (lastVisibleItemIndexValue !== lastVisibleItemIndex) {
      setLastVisibleItemIndex(lastVisibleItemIndexValue)
    }
  }

  //this will be executed only once when mounting the component synchronously
  useLayoutEffect(() => {
    console.log('useLayoutEffect')
    if (!ref.current) {
      return
    }
    const nodeChildrenWidths = getNodeChildrenWidths(ref.current)
    const lastVisibleItemIndexValue = getLastVisibleItemIndex(nodeChildrenWidths)
    setDimensions(nodeChildrenWidths)
    setLastVisibleItemIndex(lastVisibleItemIndexValue)
    console.log('useLayoutEffect', { nodeChildrenWidths, lastVisibleItemIndexValue })
  }, [])

  useEffect(() => {
    console.log('useEffect')
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [lastVisibleItemIndex, dimensions, ref])

  function isMoreButtonVisible(): boolean {
    return lastVisibleItemIndex < items.length - 1
  }

  function getVisibleItems(): Item[] {
    return items.filter((_, index) => index <= lastVisibleItemIndex)
  }

  const itemsToDisplay = lastVisibleItemIndex === -1 || !isMoreButtonVisible() ? items : getVisibleItems()

  return (
    <>
      <div>
        items: {itemsToDisplay.length}
      </div>
      <div className="navigation" ref={ref}>
        {itemsToDisplay.map((item, index) => {
          return (
              <a href={item.href} key={item.id} className="navigation-button">
                {item.name}
              </a>
            )
          })
        }
        {isMoreButtonVisible() && (
          <MoreButton />
        )}
      </div>
    </>
      
  )
}

export default Menu;