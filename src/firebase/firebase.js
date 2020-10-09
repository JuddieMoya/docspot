import * as firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/analytics'


export const App  = (firebase.initializeApp)({
    apiKey: "AIzaSyCZkdh88GpxA2Snpw4jITrf28GEigELVeA",
    authDomain: "kapstone-n.firebaseapp.com",
    databaseURL: "https://kapstone-n.firebaseio.com",
    projectId: "kapstone-n",
    storageBucket: "kapstone-n.appspot.com",
    messagingSenderId: "500997011347",
    appId: "1:500997011347:web:8d0d36af03259e6bf09a66",
    measurementId: "G-EELYLHGD70"
  });

  firebase.analytics();

  export default App;