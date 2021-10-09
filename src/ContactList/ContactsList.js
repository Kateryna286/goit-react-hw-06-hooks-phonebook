import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import * as actions from '../Redux/contacts/contacts-actions';
import './ContactList.css';

const getVisibleContacts = (allContacts, filter) => {
  const normalizedFilter = filter.toLowerCase();

  return allContacts.filter(contact =>
    contact.name.toLowerCase().includes(normalizedFilter),
  );
};

export default function ContactsList() {
  const contacts = useSelector(state =>
    getVisibleContacts(state.contacts.items, state.contacts.filter),
  );

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
