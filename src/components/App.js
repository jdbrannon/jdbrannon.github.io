import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Header } from "./Header";
import { HomePage } from './HomePage';
import { AboutPage } from './AboutPage';
import { PageNotFound } from './PageNotFound';

export const App = () => {
    return (
        <div className="container-fluid">
            <Header />
            <Switch>
                <Route exact path="/" component={HomePage} />
                <Route path="/about" component={AboutPage} />
                <Route component={PageNotFound} />
            </Switch>
        </div>
    );
}