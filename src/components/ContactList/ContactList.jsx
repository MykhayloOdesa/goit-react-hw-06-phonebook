import React from 'react';
import PropTypes from 'prop-types';
import ContactListItem from './ContactListItem/ContactListItem';

export default function ContactList({ contacts, onDeleteContact }) {
  return (
    <ul>
      {contacts?.map(contact => {
        const { id } = contact;

        return (
          <ContactListItem
            key={id}
            contact={contact}
            onDeleteContact={onDeleteContact}
          />
        );
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
  onDeleteContact: PropTypes.func.isRequired,
};
