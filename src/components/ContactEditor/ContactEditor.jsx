import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { Field, Form, Formik } from "formik";
import { FaUser } from "react-icons/fa";
import { BsFillTelephoneFill } from "react-icons/bs";

import s from "./ContactEditor.module.css";

import {
  clearEditingContact,
  selectEditingContact,
} from "../../redux/contacts/slice";
import { editContact } from "../../redux/contacts/operations";

const ContactEditor = ({ onClose }) => {
  const dispatch = useDispatch();
  const editingContact = useSelector(selectEditingContact);
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");

  useEffect(() => {
    if (editingContact) {
      setName(editingContact.name);
      setNumber(editingContact.number);
    } else {
      setName("");
      setNumber("");
    }
  }, [editingContact]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editingContact) {
      dispatch(editContact({ id: editingContact.id, name, number }));
      onClose();
    }
  };

  const handleClose = () => {
    dispatch(clearEditingContact());
    onClose();
  };

  return (
    <Formik>
      <Form className={s.form} onSubmit={handleSubmit}>
        <div className={s.content}>
          <label className={s.label}>
            <FaUser className={s.icon} />
            <Field
              type="text"
              className="pl-1"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </label>
          <label className={s.label}>
            <BsFillTelephoneFill className={s.icon} />
            <Field
              type="text"
              className="pl-1"
              placeholder="Number"
              value={number}
              onChange={(e) => setNumber(e.target.value)}
            />
          </label>
          <div className={s.btn}>
            <button className="btn btn-success w-12 h-6" type="submit">
              Save
            </button>
            <button
              className="btn btn-error w-12 h-6"
              type="button"
              onClick={handleClose}
            >
              Cancel
            </button>
          </div>
        </div>
      </Form>
    </Formik>
  );
};

export default ContactEditor;
