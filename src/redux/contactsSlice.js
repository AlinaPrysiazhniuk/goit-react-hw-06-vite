import { nanoid } from 'nanoid';

const initialState = {
  contacts: {
    items: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
  },
  filters: {
    name: '',
  },
};

export const contactsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'contacts/deleteContacts':
      return {
        ...state,
        contacts: {
          items: state.contacts.items.filter(
            contact => contact.id !== action.payload
          ),
        },
      };
    case 'contacts/addContact':
      return {
        ...state,
        contacts: {
          items: [...state.contacts.items, action.payload],
        },
      };
    case 'contacts/filterContacts':
      if (action.payload.trim() === '') {
        return {
          ...state,
          contacts: {
            items: initialState.contacts.items,
          },
        };
      }
      return {
        ...state,
        contacts: {
          items: state.contacts.items.filter(contact =>
            contact.name.toLowerCase().includes(action.payload.toLowerCase())
          ),
        },
      };

    default:
      return state;
  }
};

export const deleteContacts = contactId => {
  return {
    type: 'contacts/deleteContacts',
    payload: contactId,
  };
};

export const addContact = values => {
  return {
    type: 'contacts/addContact',
    payload: {
      id: nanoid(),
      ...values,
    },
  };
};

export const filterContacts = value => {
  return {
    type: 'contacts/filterContacts',
    payload: value,
  };
};

console.log(initialState.contacts.items);
