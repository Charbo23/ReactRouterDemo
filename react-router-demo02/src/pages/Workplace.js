import React,{Fragment} from 'react';
import {Route,NavLink} from 'react-router-dom';
import GetUp from './workplace/GetUp';
import Salary from './workplace/Salary';

function Workplace(){
    return (
        <Fragment>
            <div className="head-nav">
                <ul>
                    <li><NavLink activeClassName="active-nav"  to="/workplace/get-up">程序员早起攻略详情</NavLink></li>
                    <li><NavLink activeClassName="active-nav"  to="/workplace/salary">程序员加薪攻略详情</NavLink></li>
                </ul>
            </div>
            <div className="workplace-content">
                <h1>职场软技能</h1>
                <Route path="/workplace/get-up" component={GetUp}></Route>
                <Route path="/workplace/salary" component={Salary}></Route>
            </div>
        </Fragment>
    )
}

export default Workplace;