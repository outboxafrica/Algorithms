import firebase from 'firebase/app'
import 'firebase/auth'


const app = firebase.initializeApp({

    apiKey: "AIzaSyD7JU0Zix0JCdAzhVwWMDO4tLhmrFnjcjs",
    authDomain: "edu-community-9feae.firebaseapp.com",
    projectId: "edu-community-9feae",
    storageBucket: "edu-community-9feae.appspot.com",
    messagingSenderId: "596717267141",
    appId: "1:596717267141:web:c2f543d47de2d1f58a68ac"

})


export const auth = app.auth()
export default app