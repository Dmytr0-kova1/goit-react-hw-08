import { ErrorMessage, Field, Form, Formik } from "formik";
import s from "./ContactForm.module.css";
import { nanoid } from "nanoid";
import * as Yup from "yup";

const ContactForm = ({ addContact }) => {
  const handleSubmit = (values, actions) => {
    actions.resetForm();
    addContact({
      id: nanoid(),
      ...values,
    });
  };

  const registerSchema = Yup.object().shape({
    name: Yup.string().min(3).max(50).required(),
    number: Yup.string().min(3).max(50).required(),
  });

  return (
    <div>
      <Formik
        onSubmit={handleSubmit}
        initialValues={{ name: "", number: "" }}
        validationSchema={registerSchema}
      >
        <Form className={s.form}>
          <label className={s.label}>
            <span>Name</span>
            <Field type="text" name="name" />
            <ErrorMessage name="name" className={s.error} component="div" />
          </label>
          <label className={s.label}>
            <span>Number</span>
            <Field type="text" name="number" />
            <ErrorMessage name="number" className={s.error} component="div" />
          </label>
          <button className={s.btn} type="submit">
            Add contact
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default ContactForm;
