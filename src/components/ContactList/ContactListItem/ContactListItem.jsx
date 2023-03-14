import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteContactAction } from 'redux/contacts/slice';

export default function ContactListItem({ id, name, number }) {
  const dispatch = useDispatch();

  return (
    <li key={id} className="listContact">
      <p>
        {name}: {number}
      </p>
      <button
        className="listButton"
        type="button"
        onClick={() => dispatch(deleteContactAction(id))}
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
};
