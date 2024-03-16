import { useId } from 'react';
import css from './SearchBox.module.css';
import { useDispatch } from 'react-redux';
import { changeFilter } from '../../redux/filtersSlice';
import { useState } from 'react';

export default function SearchContact() {
  const serchBboxId = useId();
  const dispatch = useDispatch();
  const [value, setValue] = useState('');

  const valueChange = e => {
    e.preventDefault();
    setValue(e.target.value);
    dispatch(changeFilter(e.target.value));
  };

  return (
    <div className={css.searchBox}>
      <label htmlFor={serchBboxId}>Find contacts by name</label>
      <input
        type="text"
        name="searchbox"
        id={serchBboxId}
        value={value}
        onChange={valueChange}
        className={css.input_filter}
      />
    </div>
  );
}
