import React from 'react';
import {Route,Link} from 'react-router-dom';
import ReactPage from './video/ReactPage';
import Vue from './video/Vue';
import Flutter from './video/Flutter';

function Video(){
    return (
        <div>
            <div className="head-nav">
                <ul>
                    <li><Link to="/video/react-page">React教程</Link></li>
                    <li><Link to="/video/vue">Vue教程</Link></li>
                    <li><Link to="/video/flutter">Flutter教程</Link></li>
                </ul>
            </div>
            <div className="video-content">
                <Route path="/video" exact component={ReactPage}></Route>
                <Route path="/video/react-page" component={ReactPage}></Route>
                <Route path="/video/vue" component={Vue}></Route>
                <Route path="/video/flutter" component={Flutter}></Route>
            </div>
        </div>
    )
}

export default Video;