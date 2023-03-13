import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

import { getContacts, getFilteredContacts } from 'redux/contacts/selectors';
import { getFilter } from 'redux/filter/selectors';

import ContactListItem from './ContactListItem/ContactListItem';

export default function ContactList() {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);

  const listedContacts = getFilteredContacts(contacts, filter);

  return (
    <ul>
      {listedContacts.map(({ id, name, number }) => {
        return <ContactListItem key={id} name={name} number={number} />;
      })}
    </ul>
  );
}

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    })
  ),
};
