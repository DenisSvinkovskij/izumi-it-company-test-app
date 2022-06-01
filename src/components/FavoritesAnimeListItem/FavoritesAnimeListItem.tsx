import React, { FC } from 'react';
import styles from './FavoritesAnimeListItem.module.css';
import Cross from '../../assets/svg/cross.svg';

interface FavoritesAnimeListItemProps {
  titleJP: string;
  titleEN?: string;
  img?: string;
  onToggleFollow: () => void;
}

export const FavoritesAnimeListItem: FC<FavoritesAnimeListItemProps> = ({
  onToggleFollow,
  img,
  titleEN,
  titleJP,
}) => {
  return (
    <li className={styles.item}>
      <div className={styles.imgWrapper}>
        <img src={img} alt={titleEN} className={styles.img} />
      </div>
      <div className={styles.infoWrapper}>
        {titleEN && <div className={styles.titleEN}>{titleEN}</div>}
        {titleJP && <div className={styles.titleJP}>{titleJP}</div>}
        <button
          type="button"
          className={styles.likeBtn}
          onClick={onToggleFollow}
        >
          <img src={Cross} alt="unlike" className={styles.crossImg} />
        </button>
      </div>
    </li>
  );
};
