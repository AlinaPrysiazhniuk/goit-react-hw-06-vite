import { combineReducers, createStore } from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';
import { contactsReducer } from './contactsSlice';
import { filterReducer } from './filtersSlice';

const rootReducer = combineReducers({
  contacts: contactsReducer,
  filters: filterReducer,
});

/* eslint-disable no-case-declarations */

export const store = createStore(rootReducer, composeWithDevTools());
