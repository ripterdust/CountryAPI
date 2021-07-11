import React from 'react';
import {
    BrowserRouter as Router,
    Redirect,
    Route,
    Switch,
} from 'react-router-dom';

import { Navbar } from '../components/ui/Navbar';


export const MainRouter = () => {
    return <Router>

        <Navbar />
        <Switch>
            <Route exact path='/'/>

            <Redirect to='/'/>
        </Switch>

    </Router>
}
