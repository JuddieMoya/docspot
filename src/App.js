<<<<<<< src/App.js































// import React from "react";
// import { Provider } from "react-redux";
// import { PersistGate } from "redux-persist/integration/react";
// import { Navigation } from "./components";
// import configureStore from "./redux/configureStore";

// const { store, persistor } = configureStore();

// const DocSpot = {
//   store,
//   persistor,
// };

// window.DocSpot = DocSpot;

// export const App = () => (
//   <Provider store={store}>
//     <PersistGate loading={null} persistor={persistor}>
//       <Navigation />
//     </PersistGate>
//   </Provider>
// );
=======
import React, { useState } from "react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { Navigation } from "./components";
import configureStore from "./redux/configureStore";

// import React, { useEffect, useState } from "react";
import app from "./firebase/firebase";


// export const App =() => {
//   const [email, setEmail] = useState("");
//   const [password, setPass] = useState("");
  
//   const [loggedInUser, setUser] = useState(null);

  
//   useEffect(() => {
//     const authListener = app.auth().onAuthStateChanged(function (user) {
//       setUser(user);
//       if (user) {
        
//         console.log(user);
//         // ...
//       } else {
       
//         console.log("User Logged Out");
//         // ...
//       }
//     });

//     return () => {
//       authListener();
//     };
//   }, []);

//   // TODO: REGISTER WITH FIREBASE
//   const registerUser = () => {
//     app
//       .auth()
//       .createUserWithEmailAndPassword(email, password)
//       .catch(function (error) {
//         // Handle Errors here.
//         alert(error);
//         // ...
//       });
//   };

//   // TODO: LOGIN WITH FIREBASE
//   const login = () => {
//     app
//       .auth()
//       .signInWithEmailAndPassword(email, password)
//       .catch(function (error) {
//         // Handle Errors here.
//         alert(error);
//         // ...
//       });
//   };

//   // TODO: LOGOUT WITH FIREBASE

//   return (
//     <div className="App">
//       <input
//         type="email"
//         placeholder="Email"
//         value={email}
//         onChange={(e) => setEmail(e.target.value)}
//       />
//       <input
//         type="password"
//         placeholder="Password"
//         value={password}
//         onChange={(e) => setPass(e.target.value)}
//       />
//       {/* TODO: SHOULD ONLY SHOW LOGOUT IF THERE IS USER STUFF ELSE SHOW SIGN IN/REGISTER */}
//       {loggedInUser ? (
//         <button onClick={() => app.auth().signOut()}>Logout</button>
//       ) : (
//         <div>
//           <button onClick={login}>Sign In</button>
//           <button onClick={registerUser}>Register</button>
//         </div>
//       )}
//       {/* TODO: DISPLAY USER STUFF ON THE PAGE */}
//       {loggedInUser ? JSON.stringify(loggedInUser) : ""}
//     </div>
//   );
// }






const { store, persistor } = configureStore();

const DocSpot = {
  store,
  persistor,
};

window.DocSpot = DocSpot;

export const App = () => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <Navigation />
    </PersistGate>
  </Provider>
);
>>>>>>> src/App.js
