import { createStore, applymiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

const initialState = {};

const middleware = [thunk];

const store = createStore(
    () => [],
    initialState,
    compose(
        applymiddleware(...middleware),
        
    )
);

export default store;