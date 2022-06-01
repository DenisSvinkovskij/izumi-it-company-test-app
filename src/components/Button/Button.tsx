import React, { FC, MouseEvent } from 'react';
import Arrow from '../../assets/svg/arrow-in-circle.svg';
import styles from './Button.module.css';

interface ButtonProps {
  withArrow: boolean;
  text: string;
  disabled: boolean;
  onClick: (e: MouseEvent<HTMLButtonElement>) => void;
}

export const Button: FC<ButtonProps> = ({
  text,
  withArrow,
  onClick,
  disabled,
}) => {
  return (
    <button
      type="button"
      className={styles.button}
      onClick={onClick}
      disabled={disabled}
    >
      {text}

      {withArrow && (
        <img src={Arrow} alt="arrow-right" className={styles.arrow} />
      )}
    </button>
  );
};
