import { TravelPlanTree, Places } from '../types/places'

function flattenTravelPlan(travelPlan: TravelPlanTree): Places {
  const result = travelPlan.childPlaces.reduce((acc, childPlace) => {
    const { id, title, childPlaces } = childPlace
    const childIds = childPlaces.map((child) => child.id)

    acc[id] = {id, title, childIds}
    const flattenedChild = flattenTravelPlan(childPlace)

    return {...acc, ...flattenedChild}
  }, {} as Places)
  if (travelPlan.id === 0) {
    const rootChildIds = travelPlan.childPlaces.map((child) => child.id)
    const rootObject = {
      [travelPlan.id]: {
        id: travelPlan.id,
        title: travelPlan.title,
        childIds: rootChildIds
      }
    }
    return {
      ...rootObject,
      ...result
    }
  } else {
    return result
  }
}

export {
  flattenTravelPlan
}