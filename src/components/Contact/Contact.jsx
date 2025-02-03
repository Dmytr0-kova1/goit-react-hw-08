import { FaUser } from "react-icons/fa";
import { BsFillTelephoneFill } from "react-icons/bs";

import s from "./Contact.module.css";

const Contact = ({ name, number, id, onDelete }) => {
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
      <button className={s.btn} onClick={() => onDelete(id)}>
        Delete
      </button>
    </>
  );
};

export default Contact;
