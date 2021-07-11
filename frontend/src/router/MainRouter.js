import React from 'react';
import {
    BrowserRouter as Router,
    Redirect,
    Route,
    Switch,
} from 'react-router-dom';
import { CityScreen } from '../components/city/CityScreen';
import { CountryScreen } from '../components/country/CountryScreen';

import { Navbar } from '../components/ui/Navbar';


export const MainRouter = () => {
    return <Router>

        <Navbar />
        <Switch>
            <Route exact path='/' component={CountryScreen} />
            <Route path='/cities' component={CityScreen} />
            <Redirect to='/'/>
        </Switch>

    </Router>
}
