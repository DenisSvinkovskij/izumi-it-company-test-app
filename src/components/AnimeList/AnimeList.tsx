import React, { FC, MouseEvent } from 'react';
import { Button } from '../Button/Button';
import styles from './AnimeList.module.css';

interface AnimeListProps {
  children: React.ReactNode;
  withShowMore?: boolean;
  onClickShowMore?: (e: MouseEvent<HTMLButtonElement>) => void;
  disabledButtonShowMore?: boolean;
}

export const AnimeList: FC<AnimeListProps> = ({
  children,
  withShowMore = false,
  onClickShowMore,
  disabledButtonShowMore = false,
}) => {
  return (
    <>
      <ul className={styles.list}>{children}</ul>
      {withShowMore && onClickShowMore && (
        <div className={styles.showMore}>
          <Button
            text="MORE"
            withArrow
            onClick={onClickShowMore}
            disabled={disabledButtonShowMore}
          />
        </div>
      )}
    </>
  );
};
