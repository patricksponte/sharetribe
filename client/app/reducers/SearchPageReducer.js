import * as actionTypes from '../constants/SearchPageConstants';

const initialState = {
  searchPage: {
    prevPage: null,
    currentPage: null,
    nextPage: null,
  },
};

export default function searchPageReducer(state = initialState, action) {
  const { type, payload } = action;

  /* eslint-disable no-inline-comments */
  switch (type) {
    case actionTypes.SEARCH_CURRENT_PAGE_UPDATE:
      return Object.assign({}, state, {
        lastActionType: type,           // TODO: probably not needed
        prevPage: state.currentPage,    // current -> prev
        currentPage: payload.listings,  // payload -> current
        nextPage: null,                 // null -> next
      });
    default:
      return state;
  }

  /* eslint-enable no-inline-comments */

}
