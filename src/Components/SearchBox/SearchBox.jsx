import { useId } from 'react';
import css from './SearchBox.module.css';

export default function SearchContact({ value, onFilter }) {
  const serchBboxId = useId();
  return (
    <div className={css.searchBox}>
      <label htmlFor={serchBboxId}>Find contacts by name</label>
      <input
        type="text"
        name="searchbox"
        id={serchBboxId}
        value={value}
        onChange={e => onFilter(e.target.value)}
        className={css.input_filter}
      />
    </div>
  );
}
