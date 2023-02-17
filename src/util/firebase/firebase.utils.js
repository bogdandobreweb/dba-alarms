import { initializeApp } from 'firebase/app';
import { 
    getAuth, 
    signInWithRedirect, 
    signInWithPopup, 
    GoogleAuthProvider,
    createUserWithEmailAndPassword 
} from 'firebase/auth';

import { 
    getFirestore,
    doc,
    getDoc,
    setDoc
 } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAXLCrGVCqof9GjAc7oBK6TNv55Bw71clg",
    authDomain: "dba-alarms-db.firebaseapp.com",
    projectId: "dba-alarms-db",
    storageBucket: "dba-alarms-db.appspot.com",
    messagingSenderId: "1062707813488",
    appId: "1:1062707813488:web:a2e7241f47a760bee028b5"
  };
  
  const firebaseApp = initializeApp(firebaseConfig);

  const googleProvider = new GoogleAuthProvider();

  googleProvider.setCustomParameters({
      prompt: "select_account"
  });

  export const auth= getAuth();
  export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider);
  export const signInWithGoogleRedirect = () => signInWithRedirect(auth, googleProvider);

  export const db = getFirestore();

  export const createUserDocumentFromAuth = async (userAuth, additionalInformation={}) => {

    if(!userAuth) return;

    const userDocRef = doc(db, 'users', userAuth.uid);

    const userSnapshot = await getDoc(userDocRef);

    if(!userSnapshot.exists()){
        const {displayName, email} = userAuth;
        const createdAt = new Date();

        try{
            await setDoc(userDocRef, {
                displayName,
                email,
                createdAt,
                ...additionalInformation
            })
        }catch(error){
            console.log('error creating the user', error.message);
        }
    }

    return userDocRef;
}

export const createAuthUserWithEmailAndPassword = async (email, password) => {
    if(!email || !password)
    return;

    return await createUserWithEmailAndPassword(auth, email, password);

} 

