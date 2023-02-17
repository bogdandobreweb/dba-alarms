// import { useEffect } from 'react';
import { getRedirectResult } from 'firebase/auth';

import { auth, signInWithGooglePopup,signInWithGoogleRedirect, createUserDocumentFromAuth, userDocRef } from '../../util/firebase/firebase.utils';

import SignUpForm from '../../components/signup-form/signup-form.component';
import Button from '../../components/button/button.component';

const SignIn = () => {

    // useEffect( () => {
    // async function fetchData() {
    //    const response = await getRedirectResult(auth);
    //     if(response){
    //         const userDocRef = await createUserDocumentFromAuth(response.user);
    //     }
    // }
    // fetchData();
    // }, []);
    
    const logGoogleUser = async () => {

        const {user} = await signInWithGooglePopup();
        const userDocRef = await createUserDocumentFromAuth(user);
    }

    return (
        <div>
        <h1> Sign In Page</h1>
        <Button buttonType='google' onClick={logGoogleUser}>
        Sign In With Google Popup
        </Button>
        <SignUpForm />
        {/*<button onClick={signInWithGoogleRedirect}>
        Sign In With Google Redirect
    </button>*/}
        </div>
    )
}

export default SignIn;