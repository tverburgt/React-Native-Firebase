// import * as firebase from '@react-native-firebase/app';
// import '@react-native-firebase/auth';
// import '@react-native-firebase/firestore';

import * as firebase from 'firebase';
import '@firebase/auth';
import '@firebase/firestore';


// import '@react-native-firebase/app';
// import '@react-native-firebase/auth';
// import '@react-native-firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyB83WtIWCbVuKs0FG5UKJeJy7ovv7oZLAA',
  authDomain: 'rn-firebase-764d1.firebaseapp.com',
  databaseURL: 'https://rn-firebase-764d1.firebaseio.com',
  projectId: 'rn-firebase-764d1',
  storageBucket: 'rn-firebase-764d1.appspot.com',
  messagingSenderId: '12345-insert-yourse',
  appId: '1:308829198653:android:6bd08f862a5b0a76b34d54',
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export { firebase };