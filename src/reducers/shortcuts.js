import {
  FETCH_SHORTCUTS_PENDING,
  FETCH_SHORTCUTS_FAILURE,
  FETCH_SHORTCUTS_SUCCESS,
  FETCH_SOFTWARES_PENDING,
  FETCH_SOFTWARES_FAILURE,
  FETCH_SOFTWARES_SUCCESS,
  FETCH_CATEGORIES_PENDING,
  FETCH_CATEGORIES_FAILURE,
  FETCH_CATEGORIES_SUCCESS,
  ADD_SHORTCUT_PENDING,
  ADD_SHORTCUT_FAILURE,
  ADD_SHORTCUT_SUCCESS
} from "../actions/actions";

const initialState = {
  shortcuts: [],
  softwares: [],
  categories: [],
  errors: [],
  loading: {
    form: false,
    softwares: false,
    shortcuts: false,
    categories: false
  }
};

function shortcuts(state = initialState, action) {
  switch (action.type) {
    case FETCH_SHORTCUTS_PENDING:
      return { ...state, loading: {...state.loading, shortcuts: true} };
    case FETCH_SHORTCUTS_FAILURE:
      return { ...state, loading: {...state.loading, shortcuts: false}, errors: [ ...state.errors, action.payload.error ] };
    case FETCH_SHORTCUTS_SUCCESS:
      return { ...state, loading: {...state.loading, shortcuts: false}, shortcuts: action.payload.shortcuts };
    case FETCH_SOFTWARES_PENDING:
      return { ...state, loading: {...state.loading, softwares: true} };
    case FETCH_SOFTWARES_FAILURE:
      return { ...state, loading: {...state.loading, softwares: false}, errors: [ ...state.errors, action.payload.error ] };
    case FETCH_SOFTWARES_SUCCESS:
      return { ...state, loading: {...state.loading, softwares: false}, softwares: action.payload.softwares };
    case FETCH_CATEGORIES_PENDING:
      return { ...state, loading: {...state.loading, categories: true} };
    case FETCH_CATEGORIES_FAILURE:
      return { ...state, loading: {...state.loading, categories: false}, errors: [ ...state.errors, action.payload.error ] };
    case FETCH_CATEGORIES_SUCCESS:
      return { ...state, loading: {...state.loading, categories: false}, categories: action.payload.categories };
      case ADD_SHORTCUT_PENDING:
      return { ...state, loading: { ...state.loading, form: true } };
    case ADD_SHORTCUT_FAILURE:
      return {
        ...state,
        loading: { ...state.loading, form: false },
        error: { ...state.error, form: action.payload.error }
      };
    case ADD_SHORTCUT_SUCCESS:
      return {
        ...state,
        loading: { ...state.loading, form: false },
        error: { ...state.error, form: null },
        shortcuts: [ action.payload.shortcut, ...state.shortcuts ]
      };
    default:
      return state;
  }
}

export default shortcuts;
