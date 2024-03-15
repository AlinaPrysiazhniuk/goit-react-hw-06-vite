/* eslint-disable no-case-declarations */
// import { initialState } from './contactsSlice';

export const filterReducer = (
  state = {
    name: '',
  },
  action
) => {
  switch (action.type) {
    case 'filters/filterContacts':
      return {
        ...state,
        name: action.payload,
      };

    default:
      return state;
  }
};

export const filterContacts = value => {
  return {
    type: 'filters/filterContacts',
    payload: value,
  };
};
