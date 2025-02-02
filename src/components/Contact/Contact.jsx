import { FaUser } from "react-icons/fa";
import { BsFillTelephoneFill } from "react-icons/bs";
import { useDispatch } from "react-redux";

import s from "./Contact.module.css";
import { deleteContact } from "../../redux/contacts/operations";

const Contact = ({ name, number, id }) => {
  const dispatch = useDispatch();

  return (
    <>
      <div>
        <div className={s.container}>
          <FaUser className={s.icon} />
          <p className={s.name}>{name}</p>
        </div>
        <div className={s.container}>
          <BsFillTelephoneFill className={s.icon} />
          <p className={s.tel}>{number}</p>
        </div>
      </div>
      <button className={s.btn} onClick={() => dispatch(deleteContact(id))}>
        Delete
      </button>
    </>
  );
};

export default Contact;
