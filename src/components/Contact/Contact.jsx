import s from "./Contact.module.css";
import { FaUser } from "react-icons/fa";
import { BsFillTelephoneFill } from "react-icons/bs";

const Contact = ({ name, number, id, deleteContact }) => {
  return (
    <>
      <div>
        <div className={s.container}>
          <FaUser className={s.icon} />
          <p className={s.name}>{name}</p>{" "}
        </div>
        <div className={s.container}>
          <BsFillTelephoneFill className={s.icon} />
          <p className={s.tel}>{number}</p>
        </div>
      </div>
      <button className={s.btn} onClick={() => deleteContact(id)}>
        Delete
      </button>
    </>
  );
};

export default Contact;
