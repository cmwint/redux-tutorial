// reducers take two parameters, the current state, and an action
// it's really just a JS function

// in redux, state is immutable and can not change,
// that's why reducers must be pure functions
// a pure function is one that returns the exact same output for the given input

const initialState = {
    articles: []
}

// only returning the initial state, right now, for simplicity sake
const rootReducers = (state = initialState, action) => state;

export default rootReducers;

// the only way to change the state is by sending a signal to the store
// the signal is an action
// you can send out a signal by "dispatching an action"

// redux actions are just JS objects
// and every action needs a type property
    // the type property describes how the state should change


// you don't actually change the state, you just copy the current state,
// and add the new data