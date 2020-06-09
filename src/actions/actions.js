export const FETCH_SHORTCUTS_PENDING = 'FETCH_SHORTCUTS_PENDING';
export const FETCH_SHORTCUTS_FAILURE = 'FETCH_SHORTCUTS_FAILURE';
export const FETCH_SHORTCUTS_SUCCESS = 'FETCH_SHORTCUTS_SUCCESS';

export const FETCH_SOFTWARE_PENDING = 'FETCH_SOFTWARE_PENDING';
export const FETCH_SOFTWARE_FAILURE = 'FETCH_SOFTWARE_FAILURE';
export const FETCH_SOFTWARE_SUCCESS = 'FETCH_SOFTWARE_SUCCESS';

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

export function fetchSoftware() {
  return dispatch => {
    dispatch(fetchSoftwarePending());
    fetch(process.env.REACT_APP_API_URL + '/software')
      .then(response => response.json())
      .then(data => dispatch(fetchSoftwareSuccess(data['hydra:member'])))
      .catch(error => dispatch(fetchSoftwareFailure(error)));
  };
}

export function fetchSoftwarePending() {
  return { type: FETCH_SOFTWARE_PENDING, payload: null };
}

export function fetchSoftwareFailure(error) {
  return { type: FETCH_SOFTWARE_FAILURE, payload: { error: error } };
}

export function fetchSoftwareSuccess(software) {
  return { type: FETCH_SOFTWARE_SUCCESS, payload: { software: software } };
}

