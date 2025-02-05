import { useDispatch } from "react-redux";
import { useEffect } from "react";

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
    <div className="pl-10 pr-10 mt-10">
      <div className="flex  justify-evenly mb-15">
        <ContactForm />
        <SearchBox />
      </div>
      <ContactsList />
    </div>
  );
};

export default ContactsPage;
