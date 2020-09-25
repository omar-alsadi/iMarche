import { takeLatest, call, put, all } from 'redux-saga/effects'

import { firestore, convertCollectionsSnapshotToMap } from '../../firebase/firebase-utils'

import {
    fetchingCollectionSuccess,
    fetchingCollectionFailure
} from './shop.action'

import ShopActionType from './shop.type'

export function* fetchCollectionsAsyn() {
    try {
        const collectionRef = firestore.collection('collections');
        const snapshot = yield collectionRef.get();
        const collectionsMap = yield call(convertCollectionsSnapshotToMap, snapshot)

        yield put(fetchingCollectionSuccess(collectionsMap));

    } catch (error) {
        yield put(fetchingCollectionFailure(error.message))
    }
}

export function* fetchCollectionsStart() {
    yield takeLatest(
        ShopActionType.FETCH_COLLECTIONS_START,
        fetchCollectionsAsyn
    )
}

export function* shopSagas() {
    yield all([call(fetchCollectionsStart)])
}