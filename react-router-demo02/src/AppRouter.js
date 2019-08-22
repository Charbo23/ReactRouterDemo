import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Index from './pages/Index';
import Video from './pages/Video';
import Workplace from './pages/Workplace';
function AppRouter() {
    let routeConfig = [
        { id: 1, path: '/', title: '博客首页', exact: true, component: Index },
        { id: 2, path: '/video', title: '视频教程', exact: false, component: Video },
        { id: 3, path: '/workplace', title: '职场技能', exact: false, component: Workplace },
    ]
    return (
        <Router>
            <div className="container">
                <div className="left-nav">
                    <h1>一级导航</h1>
                    <ul>
                        {
                            routeConfig.map((item) => {

                                return (
                                    <li key={item.id}><Link to={item.path}>{item.title}</Link></li>
                                )

                            })
                        }
                    </ul>
                </div>
                <div className="right-main">
                    {
                        routeConfig.map((item) => {

                            return (
                                <Route  key={item.id} path={item.path} exact={item.exact} component={item.component} />
                            )

                        })
                    }
                </div>
            </div>
        </Router>
    )
}

export default AppRouter;