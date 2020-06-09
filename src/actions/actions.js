export const FETCH_SHORTCUTS_PENDING = 'FETCH_SHORTCUTS_PENDING';
export const FETCH_SHORTCUTS_FAILURE = 'FETCH_SHORTCUTS_FAILURE';
export const FETCH_SHORTCUTS_SUCCESS = 'FETCH_SHORTCUTS_SUCCESS';

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
