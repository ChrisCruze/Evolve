import * as firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyA8CayNjq_3waCPH533_Haij8scNzIM_H8",
  authDomain: "evolve-6b9a3.firebaseapp.com",
  databaseURL: "https://evolve-6b9a3.firebaseio.com",
  projectId: "evolve-6b9a3",
  storageBucket: "evolve-6b9a3.appspot.com",
  messagingSenderId: "408948735077",
  appId: "1:408948735077:web:11c577a47ef8c0acac5a8c",
  measurementId: "G-S5DY8CVKB0"
};

firebase.initializeApp(firebaseConfig);

firebase.auth().onAuthStateChanged(user => {
  if (user != null) {
    console.log("We are authenticated now!");
  }
  console.log({ user });
});

export function firebase_sign_in_anonymous() {
  return firebase
    .auth()
    .signInAnonymously()
    .then(response => console.log({ response }))
    .catch(error => console.log({ error }));
}
