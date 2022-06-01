import React from 'react';
import './App.css';
import { AnimeList } from './components/AnimeList/AnimeList';
import { BlockTitle } from './components/BlockTitle/BlockTitle';
import { FavoritesAnimeListItem } from './components/FavoritesAnimeListItem/FavoritesAnimeListItem';
import { Header } from './components/Header/Header';
import { Search } from './components/Search/Search';
import { SearchAnimeListItem } from './components/SearchAnimeListItem/SearchAnimeListItem';
import { useInput } from './hooks/useInput';
import { useAnimeList } from './hooks/useAnimeList';
import { useFavoritesAnime } from './hooks/useFavoritesAnime';

function App() {
  const {
    value: searchInput,
    onChange: onChangeSearchInput,
    resetValue: resetSearchInput,
  } = useInput('');

  const { loading, animeList, handleFetchMore, error, hasNextPage } =
    useAnimeList(searchInput);

  const { checkAnimeInFavor, favoritesAnime, toggleFavoriteAnime } =
    useFavoritesAnime();

  if (error) {
    return (
      <div className="App">
        <Header />
        <div className="App-wrapper error-page" onClick={() => {}}>
          Something went wrong with the request, try to reload the page
        </div>
      </div>
    );
  }

  return (
    <div className="App">
      {loading && (
        <div className="spinner-container">
          <div className="spinner" />
        </div>
      )}
      <Header />
      <div className="App-wrapper" onClick={() => {}}>
        <BlockTitle>List Anime</BlockTitle>

        <Search
          value={searchInput}
          onChange={onChangeSearchInput}
          resetValue={resetSearchInput}
          placeholder="Text here"
        />

        {searchInput.length === 0 && animeList && animeList.length === 0 && (
          <div className="search-input-empty-message">
            Type something in input for search...
          </div>
        )}

        {searchInput.length !== 0 && animeList && animeList.length === 0 && (
          <div className="search-input-empty-message">
            Sorry, there is no anime for your query, try changing the query you
            entered.
          </div>
        )}

        {animeList && animeList.length > 0 && (
          <AnimeList
            withShowMore
            onClickShowMore={handleFetchMore}
            disabledButtonShowMore={!hasNextPage}
          >
            {animeList.map(anim => (
              <SearchAnimeListItem
                img={anim.coverImage.large}
                key={anim.id + anim.coverImage.large}
                liked={checkAnimeInFavor(anim)}
                titleEN={anim.title.english}
                titleJP={anim.title.native}
                onToggleFollow={() => toggleFavoriteAnime(anim)}
              />
            ))}
          </AnimeList>
        )}

        {favoritesAnime.length > 0 && (
          <>
            <BlockTitle>Favorites Anime</BlockTitle>

            <AnimeList>
              {favoritesAnime.map(anim => (
                <FavoritesAnimeListItem
                  img={anim.coverImage.large}
                  key={anim.id + anim.coverImage.large}
                  titleEN={anim.title.english}
                  onToggleFollow={() => toggleFavoriteAnime(anim)}
                  titleJP={anim.title.native}
                />
              ))}
            </AnimeList>
          </>
        )}
      </div>
    </div>
  );
}

export default App;
