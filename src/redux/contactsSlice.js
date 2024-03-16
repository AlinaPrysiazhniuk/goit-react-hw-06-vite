import { nanoid } from 'nanoid';

import { createSlice } from '@reduxjs/toolkit';

const slice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
  },
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
