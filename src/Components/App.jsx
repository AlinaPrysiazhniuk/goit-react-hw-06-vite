import { useState } from 'react';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import SearchContact from './SearchBox/SearchBox';
import { useSelector } from 'react-redux';

function App() {
  // const initialContacts = [
  //   { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  //   { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  //   { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  //   { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  // ];

  // const getInitialContacts = () => {
  //   const contactsStorage = window.localStorage.getItem('contacts');
  //   return contactsStorage !== null ? JSON.parse(contactsStorage) : [];
  // };

  // const [contacts, setContacts] = useState(initialContacts);
  const [filter, setFilter] = useState('');

  //при додаванні нового контаку ми спочатку в новий масив розпилюємо попердній масив
  //контактів, а потім в кінці додаємо новий
  // const addContact = newContact => {
  //   setContacts(prevContacts => {
  //     return [...prevContacts, newContact];
  //   });
  // };

  //при видаленні контакту ми фільтруємо масив контактів і повертаємо лише ті контакти
  //ідентифікатори яких не співпадають з вибраним
  // const deleteContact = contactId => {
  //   setContacts(prevContacts => {
  //     return prevContacts.filter(contact => contact.id !== contactId);
  //   });
  //   setFilter('');
  // };

  // const filterContact = contacts.filter(contact =>
  //   contact.name.toLowerCase().includes(filter.toLowerCase())
  // );

  // useEffect(() => {
  //   window.localStorage.setItem('contacts', JSON.stringify(contacts));
  // }, [contacts]);

  return (
    <>
      <h1>Phonebook</h1>
      <ContactForm />
      <SearchContact value={filter} onFilter={setFilter} />
      <ContactList />
    </>
  );
}

export default App;
