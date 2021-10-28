import React from 'react';
import s from './ContactList.module.css';

const ContactList = ({ filteredContacts, onDelete }) => (
  <ul className={s.list}>
    {filteredContacts.map(({ name, number, id }) => (
      <li className={s.listItem} key={id}>
        <p className={s.name}>{name}:</p>
        <p className={s.number}>{number}</p>
        <button className={s.btn} type="button" onClick={() => onDelete(id)}>
          Delete
        </button>
      </li>
    ))}
  </ul>
);

export default ContactList;
