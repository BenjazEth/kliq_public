import React from 'react';
import { ThemeProvider } from "styled-components/native";

import { createStore, combineReducers,applyMiddleware } from "redux";
import { Provider } from "react-redux";
import ReduxThunk from "redux-thunk";
// import * as firebase from "firebase/app";
const firebase = require('firebase/app').default

import {
  useFonts as useOswald,
  Oswald_400Regular,
} from "@expo-google-fonts/oswald";

import {
  useFonts as useLato,
  Lato_400Regular,
} from "@expo-google-fonts/lato";

import { theme } from "./infrastructure/theme";
import { Navigation } from "./infrastructure/navigation";

import placesReducer from './store/places-reducer';
import { init } from "./helpers/db";

import { AuthenticationContextProvider } from "./services/authentication/authentication.context";

var firebaseConfig = {
  apiKey: "AIzaSyB4QTZ65-RSHel44xEvll6NcXnt9LFH4SY",
  authDomain: "kliq.firebaseapp.com",
  projectId: "kliq-test",
  storageBucket: "kliq-test.appspot.com",
  messagingSenderId: "218465949032",
  appId: "1:218465949032:web:97502b8f0ab1729287b2dd"
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

init()
  .then(() => {
    console.log('Initialized database');
  });

const rootReducer = combineReducers({
  places: placesReducer
});

const store = createStore( rootReducer, applyMiddleware(ReduxThunk));

export default function App() {
  const [oswaldLoaded] = useOswald({
    Oswald_400Regular,
  });

  const [latoLoaded] = useLato({
    Lato_400Regular,
  });

  if (!oswaldLoaded || !latoLoaded) {
    return null;
  }
  return (
    <>
    
      <Provider store={store}>
      <ThemeProvider theme={theme}>
        <AuthenticationContextProvider>
          <Navigation />
        </AuthenticationContextProvider>
      </ThemeProvider>
      </Provider>
      
      {/* <ExpoStatusBar style="auto" /> */}
    </>
  );
}

