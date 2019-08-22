import React from 'react';
import {Route,Link} from 'react-router-dom';
import GetUp from './workplace/GetUp';
import Salary from './workplace/Salary';

function Workplace(){
    return (
        <div>
            <div className="head-nav">
                <ul>
                    <li><Link to="/workplace/get-up">程序员早起攻略详情</Link></li>
                    <li><Link to="/workplace/salary">程序员加薪攻略详情</Link></li>
                </ul>
            </div>
            <div className="workplace-content">
                <h1>职场软技能</h1>
                <Route path="/workplace/get-up" component={GetUp}></Route>
                <Route path="/workplace/salary" component={Salary}></Route>
            </div>
        </div>
    )
}

export default Workplace;