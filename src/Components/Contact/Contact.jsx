import css from './Contact.module.css';
import { BsFillTelephoneFill } from 'react-icons/bs';
import { IoMdContact } from 'react-icons/io';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContacts } from '../../redux/store';

export default function Contact({ contact }) {
  // const contacts = useSelector(state => state.contacts);
  const dispatch = useDispatch();

  const handleDelete = () => {
    console.log('delete');
    dispatch(deleteContacts(contact.id));
    console.log(dispatch(deleteContacts(contact.id)));
  };

  return (
    <>
      <div>
        <p className={css.item_info}>
          <IoMdContact className={css.icon_man} />
          {contact.name}
        </p>
        <p className={css.item_info}>
          <BsFillTelephoneFill className={css.icon_number} />
          {contact.number}
        </p>
      </div>

      <button type="button" onClick={handleDelete} className={css.btn_delete}>
        Delete
      </button>
    </>
  );
}
