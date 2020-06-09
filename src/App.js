import React from 'react';
import {createStore, applyMiddleware} from "redux";
import {Provider} from "react-redux";
import thunkMiddleware from "redux-thunk";
import {composeWithDevTools} from "redux-devtools-extension";
import reducers from "./reducers/reducers";
import {fetchShortcuts} from "./actions/actions";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import NavBar from "./components/navbar/NavBar";
import HomePage from "./components/pages/home/HomePage";
import SoftwaresPage from "./components/pages/softwares/SoftwaresPage";
import AddShortcutPage from "./components/pages/add-shortcut/AddShortcutPage";
import ShortcutDetails from "./components/shortcut/details/ShortcutDetailsContainer";
import 'bootstrap';
import './App.scss';

const store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(thunkMiddleware))
);

store.dispatch(fetchShortcuts());

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <NavBar/>
        <Switch>
          <Route exact path='/' component={HomePage}/>
          <Route path='/softwares' component={SoftwaresPage}/>
          <Route path='/add-shortcut' component={AddShortcutPage}/>
          <Route path='/shortcut/:id' component={ShortcutDetails}/>
        </Switch>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
