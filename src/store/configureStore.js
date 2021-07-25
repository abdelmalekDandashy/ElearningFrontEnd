import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import reducer from "./auth";


export default function configureStore() {

    const store = createStore(reducer, composeWithDevTools(
        applyMiddleware()
        // other store enhancers if any
    ));
    return store;
}