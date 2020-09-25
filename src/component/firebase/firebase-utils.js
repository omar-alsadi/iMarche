import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
    apiKey: "AIzaSyCWo78to48hRwbW-HWi8buo8GciR-XX31c",
    authDomain: "imarche.firebaseapp.com",
    databaseURL: "https://imarche.firebaseio.com",
    projectId: "imarche",
    storageBucket: "imarche.appspot.com",
    messagingSenderId: "120476993340",
    appId: "1:120476993340:web:5409233ac22f36c81b4039",
    measurementId: "G-70X7LBJZFE"
}

firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {

    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`)

    const snapShot = await userRef.get()

    if (!snapShot.exists) {

        const { displayName, email } = userAuth;

        const createAt = new Date();

        // create a new user from user auth to our database
        try {
            await userRef.set({
                displayName,
                email,
                createAt,
                ...additionalData
            })

        } catch (err) {
            console.log(err)
        }

    }

    return userRef;

}

// to add shop data items to firebase database only
export const addCollectionAndDocuments = async (collectionKey, objectsToAdd) => {
    const collectionRef = firestore.collection(collectionKey);

    const batch = firestore.batch();

    objectsToAdd.forEach(obj => {
        const newDocRef = collectionRef.doc();
        batch.set(newDocRef, obj)
    });

    return await batch.commit()
}

export const convertCollectionsSnapshotToMap = (collections) => {

    const transformedCollection = collections.docs.map(doc => {
        const { title, items } = doc.data()
        return {
            routeName: encodeURI(title.toLowerCase()),
            id: doc.id,
            title,
            items
        }
    });

    return transformedCollection.reduce((accumulator, collection) => {
        accumulator[collection.title.toLowerCase()] = collection;
        return accumulator
    }, {});
}


export const getCurrentUser = () => {
    return new Promise((resolve, reject) => {
        const unsubscribe = auth.onAuthStateChanged(userAuth => {
            unsubscribe();
            resolve(userAuth);
        }, reject)
    });
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

export const googleProvider = new firebase.auth.GoogleAuthProvider();

googleProvider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(googleProvider);


export default firebase;