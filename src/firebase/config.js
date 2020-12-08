// Your web app's Firebase configuration
import * as firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

var firebaseConfig = {
  apiKey: 'AIzaSyAaOVQPwlVBU8D2BDtbh_85ezFVWJtdQHg',
  authDomain: 'firegram-bf5b6.firebaseapp.com',
  projectId: 'firegram-bf5b6',
  storageBucket: 'firegram-bf5b6.appspot.com',
  messagingSenderId: '1096951071478',
  appId: '1:1096951071478:web:22623cf0db85c2b53522d7',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();

export { projectFirestore, projectStorage };
