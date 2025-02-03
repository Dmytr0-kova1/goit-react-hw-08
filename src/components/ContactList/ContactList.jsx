import { useDispatch, useSelector } from "react-redux";

import Contact from "../Contact/Contact";
import ConfirmationModal from "../ConfirmationModal/ConfirmationModal";
import s from "./ContactList.module.css";

import { selectFilteredContacts } from "../../redux/contacts/slice";
import { openModal } from "../../redux/modal/slice";

const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectFilteredContacts);

  const handleModal = (id) => {
    dispatch(openModal(id));
  };

  return (
    <>
      <ul className={s.list}>
        {contacts.map((item) => (
          <li className={s.item} key={item.id}>
            <Contact
              onDelete={handleModal}
              name={item.name}
              number={item.number}
              id={item.id}
            />
          </li>
        ))}
      </ul>
      <ConfirmationModal />
    </>
  );
};

export default ContactList;
