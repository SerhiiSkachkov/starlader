import React from 'react';
import {
  BrowserRouter,
  Route,
  Switch,
  Redirect
} from "react-router-dom";

import Header from './components/Header/Header';
import Tabs from './components/Tabs/Tabs';
import Matches from './components/Matches/Matches';
import Battles from './components/Battles/Battles';

import './App.css';

const App = () => {
    return (
        <div className="App">
            <BrowserRouter>
                <Header />
                <main>
                    <Tabs />
                    <Switch>
                        <Route path="/matches" component={Matches} />
                        <Route path="/battles" component={Battles} />
                        <Redirect from="/" to="/matches" />
                    </Switch>
                </main>
            </BrowserRouter>
        </div>
    );
}

export default App;
