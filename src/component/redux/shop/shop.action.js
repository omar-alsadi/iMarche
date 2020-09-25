import ShopActionType from './shop.type'

export const fetchingCollectionStart = () => ({
    type: ShopActionType.FETCH_COLLECTIONS_START,
})

export const fetchingCollectionSuccess = (collectionsMap) => ({
    type: ShopActionType.FETCH_COLLECTIONS_SUCCESS,
    payload: collectionsMap
})

export const fetchingCollectionFailure = errorMessage => ({
    type: ShopActionType.FETCH_COLLECTIONS_FAILURE,
    payload: errorMessage
})
