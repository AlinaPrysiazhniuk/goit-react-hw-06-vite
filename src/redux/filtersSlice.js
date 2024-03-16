import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  name: '',
};

const slice = createSlice({
  name: 'filters',
  initialState: initialState,
  reducers: {
    filterContacts(state, action) {
      state.name = action.payload;
    },
  },
});

export const { filterContacts } = slice.actions;
export default slice.reducer;

export const selectNameFilter = state => state.filters.name;

// export const filterReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case 'filters/filterContacts':
//       return {
//         ...state,
//         name: action.payload,
//       };

//     default:
//       return state;
//   }
// };

// export const filterContacts = value => {
//   return {
//     type: 'filters/filterContacts',
//     payload: value,
//   };
// };
