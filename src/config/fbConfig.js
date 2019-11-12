import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/analytics';
import 'firebase/auth';

var firebaseConfig = {
	apiKey: 'AIzaSyB8gT3WoXDuP7xRkXJuY5V9Hrz87fW4hHI',
	authDomain: 'marioplan-af7e5.firebaseapp.com',
	databaseURL: 'https://marioplan-af7e5.firebaseio.com',
	projectId: 'marioplan-af7e5',
	storageBucket: 'marioplan-af7e5.appspot.com',
	messagingSenderId: '529373100193',
	appId: '1:529373100193:web:219348907cf976bac518e0',
	measurementId: 'G-GM7K6847MF'
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.firestore().settings({ timestampsInSnapshots: true });
firebase.analytics();

export default firebase;
