import { nanoid } from 'nanoid';

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ],
};

// export const deleteContact = createAction('contacts/deleteContact');
// export const addContact = createAction('contacts/addContact');

// export const contactsReducer = createReducer(initialState, builder => {
//   builder
//     .addCase(deleteContact, (state, action) => {
//       state.items = state.items.filter(
//         contact => contact.id !== action.payload
//       );
//     })
//     .addCase(addContact, (state, action) => {
//       return {
//         ...state,
//         items: [...state.items, action.payload],
//       };
//     });
// });

const slice = createSlice({
  name: 'contacts',
  initialState: initialState,
  reducers: {
    deleteContact(state, action) {
      state.items = state.items.filter(
        contact => contact.id !== action.payload
      );
    },
    addContact: {
      reducer: (state, action) => {
        return {
          ...state,
          items: [...state.items, action.payload],
        };
      },
      prepare: value => {
        return {
          payload: {
            ...value,
            id: nanoid(),
          },
        };
      },
    },
  },
});

export const { deleteContact, addContact } = slice.actions;
export default slice.reducer;
export const selectContacts = state => state.contacts.items;

// return {
//   ...state,
//   items: state.items.filter(contact => contact.id !== action.payload),
// };
