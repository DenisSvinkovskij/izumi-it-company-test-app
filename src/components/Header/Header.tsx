import React, { FC } from 'react';
import styles from './Header.module.css';
import Logo from '../../assets/svg/logo.svg';

interface HeaderProps {}

export const Header: FC<HeaderProps> = () => {
  return (
    <header className={styles.header}>
      <img src={Logo} alt="logo" className={styles.logo} />
    </header>
  );
};
