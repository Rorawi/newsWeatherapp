// store.js

import { legacy_createStore as createStore } from 'redux';
import PropReducer from '../reducer/PropReducer';

const store = createStore(PropReducer);

export default store;
