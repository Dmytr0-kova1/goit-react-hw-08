import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";

import Contact from "../Contact/Contact";
import ConfirmationModal from "../ConfirmationModal/ConfirmationModal";
import ContactEditor from "../ContactEditor/ContactEditor";
import s from "./ContactList.module.css";

import {
  selectEditingContact,
  selectFilteredContacts,
  setEditingContact,
} from "../../redux/contacts/slice";
import { openModal } from "../../redux/modal/slice";

const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectFilteredContacts);
  const editingContact = useSelector(selectEditingContact);
  const [isEditorOpen, setIsEditorOpen] = useState(false);

  const handleModal = (id) => {
    dispatch(openModal(id));
  };

  const handleEdit = (contact) => {
    dispatch(setEditingContact(contact.id));
    setIsEditorOpen(true);
  };

  const handleCloseEditor = () => {
    setIsEditorOpen(false);
  };

  return (
    <>
      <ul className={s.list}>
        {contacts.map((item) => (
          <li className={s.item} key={item.id}>
            <Contact
              onEdit={() => handleEdit(item)}
              onDelete={handleModal}
              name={item.name}
              number={item.number}
              id={item.id}
            />
          </li>
        ))}
      </ul>

      {isEditorOpen && editingContact && (
        <ContactEditor onClose={handleCloseEditor} />
      )}
      <ConfirmationModal />
    </>
  );
};

export default ContactList;
