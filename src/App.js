import React, { useState } from "react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { Navigation } from "./components";
import configureStore from "./redux/configureStore";
import app from "./firebase/firebase";
// import React, { useEffect, useState } from "react";


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
