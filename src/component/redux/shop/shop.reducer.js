import ShopActionType from './shop.type'


const INITIAL_STATE = {
    collections: null,
    isFetching: false,
    errorMessage: ''
}

const shopReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ShopActionType.FETCH_COLLECTIONS_START:
            return {
                ...state,
                isFetching: true
            }
        case ShopActionType.FETCH_COLLECTIONS_SUCCESS:
            return {
                ...state,
                isFetching: false,
                collections: action.payload
            }
        case ShopActionType.FETCH_COLLECTIONS_FAILURE:
            return {
                ...state,
                errorMessage: action.payload
            }
        default:
            return state
    }
}

export default shopReducer