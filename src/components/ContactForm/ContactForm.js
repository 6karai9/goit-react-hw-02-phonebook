import React, { Component } from 'react';
import PropTypes from 'prop-types';
import s from './ContactFrom.module.css';
import shortid from 'shortid';

class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  nameId = shortid();
  numberId = shortid();

  handleChange = e => {
    const { name, value } = e.currentTarget;

    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    const { name, number } = this.state;
    e.preventDefault();

    const contact = {
      id: shortid.generate(),
      name: name,
      number: number,
    };

    this.props.addContact(contact);
    this.reset();
  };

  reset = () => {
    this.setState({ name: '', number: '' });
  };

  render() {
    const { handleSubmit, handleChange, nameId, numberId } = this;
    const { name, number } = this.state;
    return (
      <div className={s.wrap}>
        <form className={s.formWrap} onSubmit={handleSubmit}>
          <label className={s.label} htmlFor={nameId}>
            <input
              id={nameId}
              placeholder="enter name"
              autoComplete="off"
              type="text"
              name="name"
              value={name}
              onChange={handleChange}
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
              required
            />
          </label>
          <label className={s.label} htmlFor={numberId}>
            <input
              id={numberId}
              placeholder="enter number"
              autoComplete="off"
              type="tel"
              name="number"
              value={number}
              onChange={handleChange}
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
              required
            />
          </label>
          <label className={s.label}>
            <button className={s.btn} type="submit">
              :)
            </button>
          </label>
        </form>
      </div>
    );
  }
}

PropTypes.propTypes = {
  name: PropTypes.string,
  number: PropTypes.number,

  nameId: PropTypes.number,
  numberId: PropTypes.number,

  handleSubmit: PropTypes.func,
  addContact: PropTypes.func,
  handleChange: PropTypes.func,
};

export default ContactForm;
