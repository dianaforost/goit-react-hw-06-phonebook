import React from 'react';
import { useDispatch } from "react-redux";
import { addContact } from 'redux/contactsSlice';
import { getContacts } from '../../redux/selectors'
import { useSelector } from "react-redux";
import css from './PhoneBook.module.css';
export const PhoneBook = () => {
const dispatch = useDispatch();
const contacts = useSelector(getContacts);
const onSubmit = e =>{
    e.preventDefault();
    const userNameValue = e.target.elements.name.value.trim();
    const numberValue = e.target.elements.number.value.trim();
    if (contacts.some(x => x.userName === userNameValue)) {
        alert(`${userNameValue} is already is contacts`);
        return;
      } else if(contacts.some(x => x.number === numberValue)) {
        alert(` Number ${numberValue} is already is contacts`);
        return;
      }else {
          dispatch(addContact(numberValue ,userNameValue))
          e.target.reset();
      }
}
  return <form onSubmit={onSubmit} className={css.form}>
      <label htmlFor="name">Name</label>
  <input
  className={css.inputName}
type="text"
name="name"
placeholder="Like Name Surname"
pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
autoComplete='off'
required
/>
<label htmlFor="number">Number</label>
<input
className={css.inputNumber}
type="tel"
name="number"
placeholder="Like 111-11-11"
pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
autoComplete='off'
required
/>
<button type="submit" className={css.btn}>Add contact</button>
  </form>
}
