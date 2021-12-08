import { createReducer } from '@reduxjs/toolkit';
import { addContact, deleteContact, setContacts } from './contacts-actions';
import { v4 } from 'uuid';

export const contacts = createReducer([], {
  [addContact]: (state, { payload }) => [
    ...state,
    { id: v4(), name: payload.name, number: payload.number },
  ],
  [setContacts]: (_, { payload }) => payload,
  [deleteContact]: (state, { payload }) => state.filter(contact => contact.id !== payload.id),
});
