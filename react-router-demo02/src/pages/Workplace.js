import React, { Fragment } from 'react';
import { NavLink, Switch } from 'react-router-dom';
import { renderRoutes } from 'react-router-config'
function Workplace(props) {
    return (
        <Fragment>
            <div className="head-nav">
                <ul>
                    <li><NavLink activeClassName="active-nav" to="/workplace/get-up">程序员早起攻略详情</NavLink></li>
                    <li><NavLink activeClassName="active-nav" to="/workplace/salary">程序员加薪攻略详情</NavLink></li>
                </ul>
            </div>
            <div className="workplace-content">
                <h1>职场软技能</h1>
                <Switch>
                {renderRoutes(props.route.routes)}

                </Switch>
            </div>
        </Fragment>
    )
}

export default Workplace;