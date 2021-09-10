import { createStore } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web

// import rootReducer from './reducers'
import reducer from "./auth";

const persistConfig = {
    key: 'root',
    storage,
}

const persistedReducer = persistReducer(persistConfig, reducer)

export default () => {
    let store = createStore(persistedReducer)
    let persistor = persistStore(store)
    return { store, persistor }
}

// import { createStore, applyMiddleware } from "redux";
// import { composeWithDevTools } from "redux-devtools-extension";
// import reducer from "./auth";


// export default function configureStore() {

//     const store = createStore(reducer, composeWithDevTools(
//         applyMiddleware()
//         // other store enhancers if any
//     ));
//     return store;
// }

