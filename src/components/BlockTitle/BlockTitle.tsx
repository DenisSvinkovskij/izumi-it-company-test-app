import React, { FC } from 'react';
import styles from './BlockTitle.module.css';
interface BlockTitleProps {
  children: React.ReactNode | string;
}

export const BlockTitle: FC<BlockTitleProps> = ({ children }) => {
  return <h2 className={styles.title}>{children}</h2>;
};
