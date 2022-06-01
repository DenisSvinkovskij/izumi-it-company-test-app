export interface GetAnimeDataResponse {
  pageInfo: {
    hasNextPage: number;
  };
  media: AnimePreview;
}

export interface AnimePreview {
  id: number;
  title: {
    english: string;
    native: string;
  };
  coverImage: {
    large: string;
  };
}
