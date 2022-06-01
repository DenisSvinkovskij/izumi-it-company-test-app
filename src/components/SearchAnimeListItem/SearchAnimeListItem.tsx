import React, { FC } from 'react';
import styles from './SearchAnimeListItem.module.css';
import Heart from '../../assets/svg/heart-svgrepo-com.svg';
import FilledHeart from '../../assets/svg/heart-filled-svgrepo-com.svg';

interface SearchAnimeListItemProps {
  titleJP?: string;
  titleEN?: string;
  img?: string;
  liked?: boolean;
  onToggleFollow: () => void;
}

export const SearchAnimeListItem: FC<SearchAnimeListItemProps> = ({
  liked = false,
  img,
  titleEN,
  titleJP,
  onToggleFollow,
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
          <img
            src={liked ? FilledHeart : Heart}
            alt={`${liked ? 'like' : 'unlike'}`}
            className={styles.likeImg}
          />
        </button>
      </div>
    </li>
  );
};
