import Contact from '../Contact/Contact';
import css from './ContactList.module.css';
import { useSelector } from 'react-redux';

export default function ContactList() {
  // const initialContacts = useSelector(state =>
  //   state.contacts.isFiltered
  //     ? state.contacts.filteredContacts
  //     : state.contacts.contacts
  // );

  const initialContacts = useSelector(state => state.contacts.contacts.items);
  console.log(initialContacts);
  const filteredName = useSelector(state => state.filters.name);
  console.log(filteredName);

  const filteredContacts = initialContacts.filter(contact =>
    contact.name.toLowerCase().includes(filteredName)
  );

  console.log(filteredContacts);
  return (
    <ul className={css.list}>
      {initialContacts.map(contact => (
        <li key={contact.id} className={css.item}>
          <Contact contact={contact} key={contact.id} />
        </li>
      ))}
    </ul>
  );
}
