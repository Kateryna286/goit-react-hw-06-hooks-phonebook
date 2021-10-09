import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import * as actions from '../Redux/contacts/contacts-actions';
import { getItems } from '../Redux/contacts/contacts-selector';

export default function Form() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const items = useSelector(getItems);
  const dispatch = useDispatch();

  const handleChange = event => {
    const { name, value } = event.target;

    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'number':
        setNumber(value);
        break;
      default:
        return;
    }
  };

  const handleSubmit = event => {
    event.preventDefault();

    if (items.some(item => item.name === name)) {
      alert(`${name} already exist in contact list`);
      return;
    }

    dispatch(actions.addContact({ name, number }));

    resetForm();
  };

  const resetForm = () => {
    setName('');
    setNumber('');
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <label>
        <h2>Name</h2>
        <input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          required
          value={name}
          onChange={handleChange}
        />
      </label>
      <label>
        <h2>Number</h2>
        <input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
          required
          value={number}
          onChange={handleChange}
        />
      </label>
      <button type="submit" className="button">
        Add contact
      </button>
    </form>
  );
}
