import { initializeApp } from "firebase/app";
import { getAuth, signInWithRedirect,signInWithPopup, GoogleAuthProvider ,createUserWithEmailAndPassword,signInWithEmailAndPassword,signOut,onAuthStateChanged} from "firebase/auth";
import{
    getFirestore,
    doc,
    getDoc,
    setDoc,
    collection,
    writeBatch,
    query,
    getDocs,

} from 'firebase/firestore'


const firebaseConfig = {
  apiKey: "AIzaSyBjfBkntw_nx4rp5GCbLntW70deorBDKg8",
  authDomain: "fashion-clothing-c41ac.firebaseapp.com",
  projectId: "fashion-clothing-c41ac",
  storageBucket: "fashion-clothing-c41ac.appspot.com",
  messagingSenderId: "1039080638280",
  appId: "1:1039080638280:web:19e17fb9fe8de5b5e2d57d"
};
const firebaseApp = initializeApp(firebaseConfig);
export const auth = getAuth(firebaseApp);
const provider = new GoogleAuthProvider();
provider.setCustomParameters({
    prompt : 'select_account'
});
export const  signInWithGooglePopUp = () => signInWithPopup(auth,provider);
export const  signInWithGoogleRedirect = () => signInWithRedirect(auth,provider)

export const db = getFirestore();

export const addCollectionAndDocument = async(collectionKey,objectToAdd) =>{
 const collectionRef = collection(db,collectionKey)
 const batch = writeBatch(db);
 objectToAdd.forEach((object)=>{
    const docRef = doc(collectionRef,object.title.toLowerCase());
    batch.set(docRef,object)
 });
  await batch.commit();
  console.log('done')
}

export const getCatogoriesAndDocuments = async() =>{
    const collectionRef = collection(db,'catogeries')
     const q = query(collectionRef)

     const querySnapshot = await getDocs(q);
     return querySnapshot.docs.map((dataSnaphot) => dataSnaphot.data())

     }


export const createUserDocumentFromAuth = async(userAuth,additionalInformation) => {
    const userDocRef = doc(db,'users',userAuth.uid)
    console.log(userDocRef)
    const userSnapshot = await getDoc(userDocRef);
    
    console.log(userSnapshot.exists())

    if(!userSnapshot.exists()){
        const {displayName, email}  = userAuth;
        const createdAt = new Date();
        try {
            await setDoc(userDocRef,{
                displayName,
                email,
                createdAt,
                ...additionalInformation
            })
        } catch (error) {
            console.log(error,error.message)
        }
    }
    return userDocRef;
}
export const createUserAuthWithEmailAndPassword= async (email,password) => {
if(!email || !password)return;
  return await createUserWithEmailAndPassword(auth,email,password)
};
export const signInUserWithEmailAndPassword= async (email,password) => {
    if(!email || !password)return;
      return await signInWithEmailAndPassword(auth,email,password)
    }
export const signOutUser = async () => {await signOut(auth)};
export const onAuthStateChangedListner = (callBack ) =>{
onAuthStateChanged(auth,callBack)
}