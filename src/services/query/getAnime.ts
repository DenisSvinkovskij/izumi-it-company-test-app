import { gql } from '@apollo/client';
import { DEFAULT_PER_PAGE } from '../../consts/consts';

export const GET_ANIME = gql`
  query ($search: String, $page: Int) {
    Page(page: $page, perPage: ${DEFAULT_PER_PAGE}) {
      pageInfo {
        hasNextPage
      }
      media(search: $search, type: ANIME) {
        id
        title {
          english
          native
        }
        coverImage {
          large
        }
      }
    }
  }
`;
