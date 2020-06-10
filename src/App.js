import React from 'react';
import 'bootstrap';
import './App.scss';

import {fetchShortcuts, fetchSoftwares, fetchCategories} from "./actions/actions";
import {createStore, applyMiddleware} from "redux";
import {Provider} from "react-redux";
import reducers from "./reducers/reducers";
import thunkMiddleware from "redux-thunk";
import {composeWithDevTools} from "redux-devtools-extension";

import {BrowserRouter, Switch, Route} from "react-router-dom";

import SoftwaresPage from './components/pages/software/SoftwaresPageContainer';
import NavBar from "./components/navbar/NavBar";
import HomePage from "./components/pages/home/HomePage";
import AddShortcutPage from "./components/pages/add-shortcut/AddShortcutPageContainer";
import ShortcutDetails from "./components/shortcut/details/ShortcutDetailsContainer";

const store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(thunkMiddleware))
);

store.dispatch(fetchShortcuts());
store.dispatch(fetchSoftwares());
store.dispatch(fetchCategories());

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <NavBar/>
        <Switch>
          <Route exact path='/' component={HomePage}/>
          <Route path='/software' component={SoftwaresPage}/>
          <Route path='/add-shortcut' component={AddShortcutPage}/>
          <Route path='/shortcut/:id' component={ShortcutDetails}/>
        </Switch>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
