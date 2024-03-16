import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import SearchContact from './SearchBox/SearchBox';

function App() {
  return (
    <>
      <h1>Phonebook</h1>
      <ContactForm />
      <SearchContact />
      <ContactList />
    </>
  );
}

export default App;
