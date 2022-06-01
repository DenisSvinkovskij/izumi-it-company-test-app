import React, { ChangeEvent, FC } from 'react';
import styles from './Search.module.css';
import Cross from '../../assets/svg/cross.svg';

interface SearchProps {
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
  resetValue: () => void;
}

export const Search: FC<SearchProps> = ({
  onChange,
  value,
  placeholder,
  resetValue,
}) => {
  const needCross = value.length > 0;
  return (
    <form className={styles.form}>
      <div className={styles.inputWrapper}>
        <input
          type="text"
          value={value}
          onChange={onChange}
          className={styles.input}
          placeholder={placeholder}
        />
        {needCross && (
          <img
            src={Cross}
            alt="cross"
            className={styles.cross}
            onClick={resetValue}
          />
        )}
      </div>
    </form>
  );
};
