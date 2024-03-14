import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useId } from 'react';
import * as Yup from 'yup';
import 'yup-phone-lite';
import { nanoid } from 'nanoid';
import css from './ContactForm.module.css';

const initialValues = {
  name: '',
  number: '',
};

const ContactSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, 'Too short!')
    .max(50, 'Too long!')
    .required('Required'),
  number: Yup.string()
    .phone('UA', 'Phone number must be in format +38(0XX) XXX-XX-XX')
    .required('Required'),
});

export default function ContactForm({ onAdd }) {
  const nameId = useId();
  const phoneId = useId();

  const handleSubmit = (values, actions) => {
    onAdd({ ...values, id: nanoid() });
    actions.resetForm();
  };
  return (
    <>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={ContactSchema}
      >
        <Form className={css.form}>
          <div className={css.info_user}>
            <label htmlFor={nameId}>Name</label>
            <Field type="text" name="name" id={nameId} className={css.input} />
            <ErrorMessage name="name" component="span" className={css.error} />
          </div>

          <div className={css.info_user}>
            <label htmlFor={phoneId}>Number</label>
            <Field
              type="tel"
              name="number"
              id={phoneId}
              className={css.input}
            />
            <ErrorMessage
              name="number"
              component="span"
              className={css.error}
            />
          </div>

          <button type="submit" className={css.btn_add}>
            Add contact
          </button>
        </Form>
      </Formik>
    </>
  );
}
