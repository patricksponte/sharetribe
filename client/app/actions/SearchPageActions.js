import * as actionTypes from '../constants/SearchPageConstants';

export function updateCurrentPage(page) {
  return {
    type: actionTypes.SEARCH_CURRENT_PAGE_UPDATE,
    payload: {
      currentPage: page,
    },
  };
}
