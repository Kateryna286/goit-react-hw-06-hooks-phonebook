import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import * as actions from '../Redux/contacts/contacts-actions';
import { getVisibleContacts } from '../Redux/contacts/contacts-selector';
import './ContactList.css';

export default function ContactsList() {
  const contacts = useSelector(getVisibleContacts);

  const dispatch = useDispatch();

  return (
    <ul className="contactsList">
      {contacts.map(({ id, name, number }) => (
        <li key={id} className="item">
          <span className="itemText">
            <span className="itemName">{name}:</span>
            <span className="itemNum">{number}</span>
          </span>

          <button
            type="button"
            onClick={() => dispatch(actions.deleteContact(id))}
            className="button"
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}
