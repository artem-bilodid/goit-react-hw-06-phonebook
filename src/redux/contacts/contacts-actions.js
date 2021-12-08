import { createAction } from '@reduxjs/toolkit';

export const addContact = createAction('contacts/add');
export const setContacts = createAction('contacts/set');
export const deleteContact = createAction('contacts/delete');
