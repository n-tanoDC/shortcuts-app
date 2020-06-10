import {
  FETCH_SHORTCUTS_PENDING,
  FETCH_SHORTCUTS_FAILURE,
  FETCH_SHORTCUTS_SUCCESS,
  FETCH_SOFTWARES_PENDING,
  FETCH_SOFTWARES_FAILURE,
  FETCH_SOFTWARES_SUCCESS,
  FETCH_CATEGORIES_PENDING,
  FETCH_CATEGORIES_FAILURE,
  FETCH_CATEGORIES_SUCCESS

} from "../actions/actions";

const initialState = {
  shortcuts: [],
  softwares: [],
  categories: [],
  errors: [],
  loading: false
};

function shortcuts(state = initialState, action) {
  switch (action.type) {
    case FETCH_SHORTCUTS_PENDING:
      return { ...state, loading: true };
    case FETCH_SHORTCUTS_FAILURE:
      return { ...state, loading: false, errors: [ ...state.errors, action.payload.error ] };
    case FETCH_SHORTCUTS_SUCCESS:
      return { ...state, loading: false, shortcuts: action.payload.shortcuts };
    case FETCH_SOFTWARES_PENDING:
      return { ...state, loading: true };
    case FETCH_SOFTWARES_FAILURE:
      return { ...state, loading: false, errors: [ ...state.errors, action.payload.error ] };
    case FETCH_SOFTWARES_SUCCESS:
      return { ...state, loading: false, softwares: action.payload.softwares };
    case FETCH_CATEGORIES_PENDING:
      return { ...state, loading: true };
    case FETCH_CATEGORIES_FAILURE:
      return { ...state, loading: false, errors: [ ...state.errors, action.payload.error ] };
    case FETCH_CATEGORIES_SUCCESS:
      return { ...state, loading: false, categories: action.payload.categories };
    default:
      return state;
  }
}

export default shortcuts;
