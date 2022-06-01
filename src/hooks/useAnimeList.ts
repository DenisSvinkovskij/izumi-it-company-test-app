import { useQuery } from '@apollo/client';
import { useEffect, useMemo, useRef, useState } from 'react';
import { GET_ANIME } from '../services/query/getAnime';
import { AnimePreview } from '../types/anime';

export const useAnimeList = (searchInput: string) => {
  const [animeList, setAnimeList] = useState<AnimePreview[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [localInput, setLocalInput] = useState('');

  const timer = useRef<ReturnType<typeof setTimeout> | null>();

  const { data, loading, error, fetchMore, ...rest } = useQuery(GET_ANIME, {
    notifyOnNetworkStatusChange: true,
    variables: {
      search: localInput,
      page: currentPage,
    },
  });

  const hasNextPage: boolean = useMemo(
    () => !!data?.Page?.pageInfo?.hasNextPage,
    [data?.Page?.pageInfo?.hasNextPage],
  );

  const handleFetchMore = () => {
    fetchMore({
      variables: {
        page: currentPage + 1,
      },
      updateQuery: (_, { fetchMoreResult }) => {
        fetchMoreResult.Page.media = [
          ...data.Page.media,
          ...fetchMoreResult.Page.media,
        ];
        return fetchMoreResult;
      },
    });
    setCurrentPage(prev => prev + 1);
  };

  useEffect(() => {
    if (timer.current) {
      clearTimeout(timer.current);
    }

    if (searchInput) {
      const fetchAnime = () => {
        setLocalInput(searchInput);
        setCurrentPage(1);
      };

      timer.current = setTimeout(fetchAnime, 1000);
    }
    if (searchInput.length === 0) {
      setLocalInput(searchInput);
      setCurrentPage(1);
    }
  }, [searchInput]);

  useEffect(() => {
    if (searchInput === localInput && data) {
      setAnimeList(data?.Page?.media);
    }
  }, [data, localInput, searchInput]);

  return {
    hasNextPage,
    animeList,
    handleFetchMore,
    loading,
    error,
    ...rest,
  };
};
