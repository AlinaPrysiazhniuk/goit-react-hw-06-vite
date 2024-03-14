import css from './Contact.module.css';
import { BsFillTelephoneFill } from 'react-icons/bs';
import { IoMdContact } from 'react-icons/io';

export default function Contact({ data: { id, name, number }, onDelete }) {
  return (
    <>
      <div>
        <p className={css.item_info}>
          <IoMdContact className={css.icon_man} />
          {name}
        </p>
        <p className={css.item_info}>
          <BsFillTelephoneFill className={css.icon_number} />
          {number}
        </p>
      </div>

      <button
        type="button"
        onClick={() => onDelete(id)}
        className={css.btn_delete}
      >
        Delete
      </button>
    </>
  );
}
