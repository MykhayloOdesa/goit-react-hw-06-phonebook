import { useSelector, useDispatch } from 'react-redux';

import {
  getFilteredContacts,
  getContacts,
} from 'redux/reducers/contacts/contactSelector';
import {
  addContactAction,
  deleteContactAction,
} from 'redux/reducers/contacts/contactSlice';

import { getFilter } from 'redux/reducers/filter/filterSelector';
import { setFilter } from 'redux/reducers/filter/filterSlice';

import Layout from './components/Layout/Layout';
import ContactList from './components/ContactList/ContactList';
import ContactForm from './components/ContactForm/ContactForm';
import Filter from './components/Filter/Filter';

export default function App() {
  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();

  const filter = useSelector(getFilter);
  const filteredContacts = getFilteredContacts(contacts, filter);

  const addContact = data => {
    dispatch(addContactAction(data));
  };

  const deleteContact = id => {
    dispatch(deleteContactAction(id));
  };

  const onChange = ({ target }) => {
    dispatch(setFilter(target.value));
  };

  return (
    <Layout>
      <h1 className="title">Phonebook</h1>
      <ContactForm contacts={contacts} onSubmit={addContact} />

      <h2 className="title">Contacts</h2>
      <Filter value={filter} onChange={onChange} />

      <ContactList
        contacts={filteredContacts}
        onDeleteContact={deleteContact}
      />
    </Layout>
  );
}
