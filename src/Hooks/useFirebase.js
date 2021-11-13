import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useEffect, useState } from "react";
import initializationAuthentication from "./../Firebase/firebase.init.js";

initializationAuthentication();

// Providers 
const googleProvider = new GoogleAuthProvider();

const useFirebase = () => {

    const [user, setUser] = useState({});
    const [error, setError] = useState("");
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [photo, setPhoto] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(true);

    const auth = getAuth();

    // Email Sign In
    const signInWithEmail = () => {
        // alert('sign is successfully')
        if (!email) {
            alert('Please Fill up the form First')
        }
        else {
            return signInWithEmailAndPassword(auth, email, password)
        }
    }

    // Google Sign In
    const signInWithGoogle = () => {
        return signInWithPopup(auth, googleProvider)

    }

    // Google Sign Out
    const logOut = () => {
        signOut(auth)
            .then(() => { })
            .catch((error) => {
                setError(error.message);
            })
    }

    // set name and profile image url
    function setNameAndImage() {
        updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: photo,
        })
            .then(() => { })
            .catch((error) => {
                setError(error.message);
            });
    }

    // user signed in
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user);
            }
            else {
                setUser({})
            }
            setLoading(false);
        });
        return () => unsubscribe;
    }, [])


    // Sign up with Mail and password
    function signUp(e) {
        e.preventDefault();
        createUserWithEmailAndPassword(auth, email, password)
            .then((result) => {
                console.log(result.user);
                hanldeUserInfoRegister(result.user.email);
                setNameAndImage()
                alert("user's have been created")
            })
            .catch(error => {
                setError(error.message);
            });
    }

    //Add User Info
    const hanldeUserInfoRegister = (email) => {
        fetch("https://fathomless-falls-21661.herokuapp.com/addUserInfo", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ email }),
        })
        .then((res) => res.json())
        .then((result) => console.log(result));
    };

    // Get Name
    function getName(e) {
        setName(e?.target?.value)
    }

    // Get Email
    function getEmail(e) {
        setEmail(e?.target?.value)
    }
    // Get Password
    function getPassword(e) {
        setPassword(e?.target?.value)
    }

    // Get Photo
    function getPhoto(e) {
        setPhoto(e?.target?.value)
    }


    return {
        signInWithEmail,
        hanldeUserInfoRegister,
        // signInWithGitHub,
        user,
        signInWithGoogle,
        logOut,
        error,
        getPassword,
        getEmail,
        signUp,
        setUser,
        setError,
        getPhoto,
        getName,
        loading,
    }
}


export default useFirebase;