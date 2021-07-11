import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Switch,
} from 'react-router-dom';

import { Navbar } from '../components/ui/Navbar';


export const MainRouter = () => {
    return <Router>

        <Navbar />
        <Switch>
            <Route exact path='/'>
                Inicio
            </Route>
        </Switch>
    </Router>
}