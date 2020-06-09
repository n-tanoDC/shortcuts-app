import {
  FETCH_SOFTWARE_PENDING,
  FETCH_SOFTWARE_FAILURE,
  FETCH_SOFTWARE_SUCCESS
} from "../actions/actions";

const initialState = {
  software: [],
  errors: [],
  loading: false
};

function software(state = initialState, action) {
  switch (action.type) {
    case FETCH_SOFTWARE_PENDING:
      return { ...state, loading: true };
    case FETCH_SOFTWARE_FAILURE:
      return { ...state, loading: false, errors: [ ...state.errors, action.payload.error ] };
    case FETCH_SOFTWARE_SUCCESS:
      return { ...state, loading: false, software: action.payload.software };
    default:
      return state;
  }
}

export default software;
