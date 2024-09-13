// store.js
import { createStore } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // This uses localStorage for persistence
import CartReducer from "./CartReducer"; // Import your CartReducer

// Define persist config
const persistConfig = {
  key: "root",
  storage,
};

// Create a persisted reducer
const persistedReducer = persistReducer(persistConfig, CartReducer);

// Create the Redux store with the persisted reducer
const store = createStore(
  persistedReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() // Optional: Enable Redux DevTools for debugging
);

// Create a persistor to manage the persistence
const persistor = persistStore(store);

export { store, persistor };
