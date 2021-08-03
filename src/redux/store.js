// import { combineReducers } from "redux";
import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
// import { persistStore} from 'redux-persist';

import contactsReducer from './contacts-reducer';

// console.log(process.env.NODE_ENV);

const store = configureStore({
  reducer: {
    contacts: contactsReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({ serializableCheck: false }).concat(logger),
  devTools: process.env.NODE_ENV === 'development',
});

// const persistor = persistStore(store);

export default store;
