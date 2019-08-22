import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Index from './pages/Index';
import About from './pages/About';
import List from './pages/List';
import Home from './pages/Home';
function AppRouter() {
    return (
        <Router>
            <ul>
                <li><Link to='/'>首页</Link></li>
                <li><Link to='/list/213'>列表</Link></li>
                <li><Link to='/about/charbo'>关于</Link></li>
            </ul>
            <Route path='/' exact component={Index} />
            <Route path='/home' component={Home} />
            <Route path='/list/:id' component={List} />
            <Route path='/about/:id' component={About} />
        </Router>
    )
}

export default AppRouter;