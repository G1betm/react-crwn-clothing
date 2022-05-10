import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";


const config = {
	apiKey: "AIzaSyAl0TrTZZN2k9bPQVNtPECKMMywUwJRhgI",
	authDomain: "crwn-db-c5c7a.firebaseapp.com",
	projectId: "crwn-db-c5c7a",
	storageBucket: "crwn-db-c5c7a.appspot.com",
	messagingSenderId: "89948651846",
	appId: "1:89948651846:web:72acf766b4f95531c6a547"
};

const app = initializeApp(config);

export const auth = getAuth(app);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});

export const signInWithGoogle = () => {
	signInWithPopup(auth, provider).then(result => {

	}).catch(error => {
		console.log(error)
	})
};


export default app;