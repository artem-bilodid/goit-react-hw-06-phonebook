import { useEffect } from 'react';
import s from './App.module.scss';
import { v4 } from 'uuid';

import ContactForm from '../ContactForm';
import ContactList from '../ContactList';
import Filter from '../Filter';
import { useSelector, useDispatch } from 'react-redux';
import { getFilter } from './../../redux/filter/filter-selector';
import { getContacts } from './../../redux/contacts/contacts-selector';
import { addContact, deleteContact, setContacts } from '../../redux/contacts/contacts-actions';

const App = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);

  useEffect(() => {
    const lsContacts = localStorage.getItem('contacts');

    if (lsContacts) {
      dispatch(setContacts(JSON.parse(lsContacts)));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const handleDeleteContact = event => {
    const { id } = event.target;
    dispatch(deleteContact({ id }));
  };

  const handleAddContact = (name, number) => {
    if (contacts.find(contact => contact.name === name)) {
      alert(`${name} is already in the contacts`);
      return;
    }
    dispatch(addContact({ name, number }));
  };

  const getFilteredContacts = (contacts, filter) => {
    return contacts.filter(({ name }) => name.toLowerCase().includes(filter.toLowerCase()));
  };

  const filteredContacts = getFilteredContacts(contacts, filter);

  return (
    <div className={s.container}>
      <h1>Phonebook</h1>
      <ContactForm onSubmit={handleAddContact} />

      <h2>Contacts</h2>
      <Filter />
      <ContactList contacts={filteredContacts} handleDelete={handleDeleteContact} />
    </div>
  );
};

export default App;
