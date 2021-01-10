import firebase from "./firebase";
import "firebase/Firestore";

const firestore = firebase.firestore();

export const createUser = (uid, data) => {
  // add or update firestore collection 'users'
  // key is the uid
  // set the document's data to the uid and data arguments
  return firestore
    .collection("users")
    .doc(uid)
    .set({ uid, ...data }, { merge: true });
};
