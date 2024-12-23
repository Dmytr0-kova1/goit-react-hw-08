import ContactForm from "./components/ContactForm/ContactForm";
import SearchBox from "./components/SearchBox/SearchBox";
import ContactList from "./components/ContactList/ContactList";
import contactsList from "./contacts.json";
import { useEffect, useState } from "react";

function App() {
  const [contacts, setContacts] = useState(() => {
    const storedContacts = localStorage.getItem("contact");
    return storedContacts ? JSON.parse(storedContacts) : contactsList;
  });

  useEffect(() => {
    localStorage.setItem("contact", JSON.stringify(contacts));
  }, [contacts]);

  const [filter, setFilter] = useState("");

  const filterContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  const addContact = (newContact) => {
    setContacts((prev) => [...prev, newContact]);
  };

  const deleteContact = (contactId) => {
    setContacts((prev) => prev.filter((contact) => contact.id !== contactId));
  };

  return (
    <>
      <h1>Phonebook</h1>
      <ContactForm addContact={addContact} />
      <SearchBox filter={filter} setFilter={setFilter} />
      <ContactList contacts={filterContacts} deleteContact={deleteContact} />
    </>
  );
}

export default App;
