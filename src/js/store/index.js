// initializing the store

import { createStore } from "redux"
import rootReducer from "../reducers/index"

// createStore is the function for creating the redux store,
// and it takes a reducer as the first argument
// you can add inital state as the second argument, but that
// sometimes comes with server side rendering
const store = createStore(rootReducer);

// the state comes from reducers
// reducers produce the state of the application
// the state must return entirely from reducers
// can I say it any other way?

export default store;