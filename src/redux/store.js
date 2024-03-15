import { combineReducers, createStore } from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';
import { contactsReducer } from './tasksSlice';

const rootReducer = combineReducers({
  contacts: contactsReducer,
});

/* eslint-disable no-case-declarations */

export const store = createStore(rootReducer, composeWithDevTools());
console.log(store);
