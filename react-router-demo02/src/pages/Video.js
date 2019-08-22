import React,{Fragment} from 'react';
import { Route, NavLink, Switch } from 'react-router-dom';
import ReactPage from './video/ReactPage';
import Vue from './video/Vue';
import Flutter from './video/Flutter';

function Video() {
    return (
        <Fragment>
            <div className="head-nav">
                <ul>
                    <li><NavLink activeClassName="active-nav" to="/video/react-page">React教程</NavLink></li>
                    <li><NavLink activeClassName="active-nav" to="/video/vue">Vue教程</NavLink></li>
                    <li><NavLink activeClassName="active-nav" to="/video/flutter">Flutter教程</NavLink></li>
                </ul>
            </div>
            <div className="video-content">
                <Switch>
                    <Route path="/video/react-page" component={ReactPage}></Route>
                    <Route path="/video/vue" component={Vue}></Route>
                    <Route path="/video/flutter" component={Flutter}></Route>
                    <Route path="/video"  component={ReactPage}></Route>
                </Switch>
            </div>
        </Fragment>
    )
}

export default Video;