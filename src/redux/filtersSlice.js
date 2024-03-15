// import { selectContacts } from './contactsSlice';

const initialState = {
  name: '',
};

export const filterReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'filters/filterContacts':
      return {
        ...state,
        // ...selectContacts(),
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

export const selectNameFilter = state => state.filters.name;
