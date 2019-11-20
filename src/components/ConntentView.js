import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Profile from './Profile';
import Gallery from '../components/Gallery';
import ErrorPage from '../components/ErrorPage';



const ContentView = () => {
    return (
        <div>
            <Switch>
                <Route path='/' exact component={Profile} />
                <Route path='/gallery' component={Gallery} />
                <Route path='/404' exact component={ErrorPage} />
                <Redirect to='/404' />
            </Switch>
        </div>
    );
}

export default ContentView;