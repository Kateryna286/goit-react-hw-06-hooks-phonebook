import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../Redux/contacts/contacts-actions';
import './ContactList.css';

function ContactsList({ contacts, onDeleteContact }) {
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
            onClick={() => onDeleteContact(id)}
            className="button"
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}

const getVisibleContacts = (allContacts, filter) => {
  const normalizedFilter = filter.toLowerCase();

  return allContacts.filter(contact =>
    contact.name.toLowerCase().includes(normalizedFilter),
  );
};

const mapStateToProps = ({ contacts: { items, filter } }) => ({
  contacts: getVisibleContacts(items, filter),
});

const mapDispatchToProps = dispatch => ({
  onDeleteContact: id => dispatch(actions.deleteContact(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactsList);
