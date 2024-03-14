import Contact from '../Contact/Contact';
import css from './ContactList.module.css';
import { useSelector } from 'react-redux';

export default function ContactList() {
  const initialContacts = useSelector(state => state.contacts);
  return (
    <ul className={css.list}>
      {initialContacts.map(contact => (
        <li key={contact.id} className={css.item}>
          <Contact contact={contact} />
        </li>
      ))}
    </ul>
  );
}
