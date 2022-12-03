import firebase from "firebase/app";
import firebaseAppo from "./firebase";

class AuthService {
  login(providerName) {
    const authProvider = new firebase.auth[`${providerName}AuthProvider`]();
    return firebaseAppo.auth().signInWithPopup(authProvider);
  }
}

export default AuthService;
