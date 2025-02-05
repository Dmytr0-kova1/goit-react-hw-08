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
import toast, { Toaster } from "react-hot-toast";

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
    toast.success("contact successfully edited!");
  };

  const handleClose = () => {
    dispatch(clearEditingContact());
    onClose();
  };

  return (
    <Formik>
      <Form className={s.form} onSubmit={handleSubmit}>
        <Toaster position="top-center" reverseOrder={false} />

        <div className={s.content}>
          <div className="flex flex-col items-center gap-3">
            <label className="input validator">
              <FaUser className={s.icon} />
              <Field
                type="text"
                className="pl-1"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </label>
            <label className="input validator">
              <BsFillTelephoneFill className={s.icon} />
              <Field
                type="number"
                className="tabular-nums"
                placeholder="Number"
                value={number}
                onChange={(e) => setNumber(e.target.value)}
              />
            </label>
          </div>
          <div className={s.btn}>
            <button className="btn btn-success  w-18 h-8" type="submit">
              Save
            </button>
            <button
              className="btn btn-error w-18 h-8"
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
