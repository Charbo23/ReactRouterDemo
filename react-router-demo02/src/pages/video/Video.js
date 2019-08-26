import React,{Fragment} from 'react';
import { NavLink, Switch } from 'react-router-dom';

import { renderRoutes } from 'react-router-config'
function Video(props) {
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
                    {renderRoutes(props.route.routes)}
                </Switch>
            </div>
        </Fragment>
    )
}

export default Video;