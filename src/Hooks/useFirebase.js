import { useEffect, useState } from "react";
import initializeAuthentication from "../Firebase/FirebaseInit";
import { getAuth, createUserWithEmailAndPassword, getIdToken, updateProfile, signInWithPopup, signOut, onAuthStateChanged, signInWithEmailAndPassword, GoogleAuthProvider } from "firebase/auth";
import { useNavigate } from "react-router-dom";

initializeAuthentication()
const useFirebase=()=>{
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [authError, setAuthError] = useState('');
    const navigate=useNavigate()
    const auth = getAuth();
    const userSignUp = (name,email,password,interest) => {
        setIsLoading(true);
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                setAuthError('');
               const newUser = { email, displayName: name,interest};
                setUser(newUser);
                // save user to the database
                // saveUser(email, name, 'POST');
                // send name to firebase after creation
                updateProfile(auth.currentUser, {
                    displayName: name
                }).then(() => {
                }).catch((error) => {
                });
                navigate('/login')
             ;
            })
            .catch((error) => {
                setAuthError(error.message);
                console.log(error);
            })
            .finally(() => setIsLoading(false));
    }
    const loginUser = (email, password) => {
        setIsLoading(true);
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // const destination = location?.state?.from || '/';
                navigate('/')
                
                setAuthError('');
            })
            .catch((error) => {
                setAuthError(error.message);
            })
            .finally(() => setIsLoading(false));
    }
    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
                // getIdToken(user)
                //     .then(idToken => {
                //         setToken(idToken);
                //     })
            } else {
                setUser({})
            }
            setIsLoading(false);
        });
        return () => unsubscribed;
    }, [auth])

    const logout = () => {
        setIsLoading(true);
        signOut(auth).then(() => {
            // Sign-out successful.
        }).catch((error) => {
            // An error happened.
        })
            .finally(() => setIsLoading(false));
    }
    return{
        user,
        userSignUp,
        logout,
        loginUser


    }
}
export default useFirebase;