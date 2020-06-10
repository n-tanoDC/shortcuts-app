export const FETCH_SHORTCUTS_PENDING = 'FETCH_SHORTCUTS_PENDING';
export const FETCH_SHORTCUTS_FAILURE = 'FETCH_SHORTCUTS_FAILURE';
export const FETCH_SHORTCUTS_SUCCESS = 'FETCH_SHORTCUTS_SUCCESS';

export const FETCH_SOFTWARES_PENDING = 'FETCH_SOFTWARES_PENDING';
export const FETCH_SOFTWARES_FAILURE = 'FETCH_SOFTWARES_FAILURE';
export const FETCH_SOFTWARES_SUCCESS = 'FETCH_SOFTWARES_SUCCESS';

export const FETCH_CATEGORIES_PENDING = 'FETCH_CATEGORIES_PENDING';
export const FETCH_CATEGORIES_FAILURE = 'FETCH_CATEGORIES_FAILURE';
export const FETCH_CATEGORIES_SUCCESS = 'FETCH_CATEGORIES_SUCCESS';


export function fetchShortcuts() {
  return dispatch => {
    dispatch(fetchShortcutsPending());
    fetch(process.env.REACT_APP_API_URL + '/shortcuts?order[created_at]=asc')
      .then(response => response.json())
      .then(data => dispatch(fetchShortcutsSuccess(data['hydra:member'])))
      .catch(error => dispatch(fetchShortcutsFailure(error)));
  };
}

export function fetchShortcutsPending() {
  return { type: FETCH_SHORTCUTS_PENDING, payload: null };
}

export function fetchShortcutsFailure(error) {
  return { type: FETCH_SHORTCUTS_FAILURE, payload: { error: error } };
}

export function fetchShortcutsSuccess(shortcuts) {
  return { type: FETCH_SHORTCUTS_SUCCESS, payload: { shortcuts: shortcuts } };
}

export function fetchSoftwares() {
  return dispatch => {
    dispatch(fetchSoftwaresPending());
    fetch(process.env.REACT_APP_API_URL + '/software')
      .then(response => response.json())
      .then(data => dispatch(fetchSoftwaresSuccess(data['hydra:member'])))
      .catch(error => dispatch(fetchSoftwaresFailure(error)));
  };
}

export function fetchSoftwaresPending() {
  return { type: FETCH_SOFTWARES_PENDING, payload: null };
}

export function fetchSoftwaresFailure(error) {
  return { type: FETCH_SOFTWARES_FAILURE, payload: { error: error } };
}

export function fetchSoftwaresSuccess(softwares) {
  return { type: FETCH_SOFTWARES_SUCCESS, payload: { softwares: softwares } };
}

export function fetchCategories() {
  return dispatch => {
    dispatch(fetchCategoriesPending());
    fetch(process.env.REACT_APP_API_URL + '/categories')
      .then(response => response.json())
      .then(data => dispatch(fetchCategoriesSuccess(data['hydra:member'])))
      .catch(error => dispatch(fetchCategoriesFailure(error)));
  };
}

export function fetchCategoriesPending() {
  return { type: FETCH_CATEGORIES_PENDING, payload: null };
}

export function fetchCategoriesFailure(error) {
  return { type: FETCH_CATEGORIES_FAILURE, payload: { error: error } };
}

export function fetchCategoriesSuccess(categories) {
  return { type: FETCH_CATEGORIES_SUCCESS, payload: { categories: categories } };
}

