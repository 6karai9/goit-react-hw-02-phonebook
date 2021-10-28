import React from 'react';
import s from './Filter.module.css';

const Filter = ({ value, onChange }) => {
  return (
    <div className={s.wrap}>
      <h3>Find contacts by name</h3>
      <label>
        <input type="text" value={value} onChange={onChange} />
      </label>
    </div>
  );
};

export default Filter;
