import { useDispatch } from "react-redux";
import { useEffect } from "react";

import s from "./ContactsPage.module.css";
import ContactForm from "../../components/ContactForm/ContactForm";
import ContactsList from "../../components/ContactList/ContactList";
import SearchBox from "../../components/SearchBox/SearchBox";

import { fetchContacts } from "../../redux/contacts/operations";

const ContactsPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className={s.container}>
      <ContactForm />
      <SearchBox />
      <ContactsList />
    </div>
  );
};

export default ContactsPage;
