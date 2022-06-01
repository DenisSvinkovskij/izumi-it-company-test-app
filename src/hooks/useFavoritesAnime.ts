import { useCallback, useState } from 'react';
import { AnimePreview } from '../types/anime';

export const useFavoritesAnime = () => {
  const [favoritesAnime, setFavoritesAnime] = useState<AnimePreview[]>([]);

  const checkAnimeInFavor = useCallback(
    (animeForCheck: AnimePreview) => {
      return favoritesAnime.some(animovie => animovie.id === animeForCheck.id);
    },
    [favoritesAnime],
  );

  const toggleFavoriteAnime = useCallback(
    (animeForToggle: AnimePreview) => {
      setFavoritesAnime(prev => {
        let newList: AnimePreview[];

        if (checkAnimeInFavor(animeForToggle)) {
          newList = prev.filter(anime => anime.id !== animeForToggle.id);
        } else {
          newList = [...prev, animeForToggle];
        }
        return newList;
      });
    },
    [checkAnimeInFavor],
  );

  return {
    favoritesAnime,
    checkAnimeInFavor,
    toggleFavoriteAnime,
  };
};
