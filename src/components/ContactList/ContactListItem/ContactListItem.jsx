import React from 'react';
import PropTypes from 'prop-types';

export default function ContactListItem({ contact, onDeleteContact }) {
  const { id, name, number } = contact;

  return (
    <li key={id} className="listContact">
      <p>
        {name}: {number}
      </p>
      <button
        className="listButton"
        type="button"
        onClick={() => onDeleteContact(id)}
      >
        Delete
      </button>
    </li>
  );
}

ContactListItem.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }),
  onDeleteContact: PropTypes.func.isRequired,
};
