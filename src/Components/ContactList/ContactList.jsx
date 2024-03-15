import Contact from '../Contact/Contact';
import css from './ContactList.module.css';
import { useSelector } from 'react-redux';

export default function ContactList() {
  const initialContacts = useSelector(state => state.contacts.items);
  const filteredName = useSelector(state => state.filters.name);

  const filteredContacts = initialContacts.filter(contact =>
    contact.name.toLowerCase().includes(filteredName)
  );

  return (
    <ul className={css.list}>
      {filteredContacts.map(contact => (
        <li key={contact.id} className={css.item}>
          <Contact contact={contact} />
        </li>
      ))}
    </ul>
  );
}
