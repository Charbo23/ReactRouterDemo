import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Layout, Menu, Icon } from 'antd';
import antStyle from './style/antd-style.module.scss';
import Index from './pages/Index';
import Video from './pages/Video';
import Workplace from './pages/Workplace';
const { Header, Sider, Content } = Layout;
const { SubMenu } = Menu;
class AppRouter extends Component {
    state = {
        collapsed: false,
        routeConfig: [
            { id: 1, iconType: 'home', path: '/', title: '博客首页', exact: true, hasSub: false, component: Index },
            { id: 2, iconType: 'video-camera', path: '/video', title: '视频教程', exact: false, hasSub: false, component: Video },
            { id: 3, iconType: 'radar-chart', path: '/workplace', title: '职场技能', exact: false, hasSub: false, component: Workplace },
        ]
    };
    toggle = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    };
    render() {
        return (
            // <Router>
            //     <div className="container">
            //         <div className="left-nav">
            //             <h1>一级导航</h1>
            //             <ul>
            //                 {
            //                     this.state.routeConfig.map((item) => {

            //                         return (
            //                             <li key={item.id}><NavLink exact={item.activeExact} activeClassName="active-nav" to={item.path}>{item.title}</NavLink></li>
            //                         )

            //                     })
            //                 }
            //             </ul>
            //         </div>
            //         <div className="right-main">
            //             {
            //                 this.state.routeConfig.map((item) => {

            //                     return (
            //                         <Route key={item.id} path={item.path} exact={item.exact} component={item.component} />
            //                     )

            //                 })
            //             }
            //         </div>
            //     </div>
            // </Router>
            <Router>


                <Layout className={antStyle['ant-layout']}>
                    <Sider className={antStyle['ant-sider']} trigger={null} collapsible collapsed={this.state.collapsed}>
                        <div className={antStyle['logo']}><img src={require('./assets/logo-sidebar.svg')} alt="logo" /></div>
                        <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']} >
                            {
                                this.state.routeConfig.map((item) => {
                                    if (item.hasSub) {
                                        return (

                                            <SubMenu
                                                key={item.id}
                                                title={
                                                    <Fragment>
                                                        <Icon type={item.iconType} />
                                                        <span>{item.title}</span>
                                                    </Fragment>
                                                }
                                            >
                                                <Menu.Item key={'sub' + item.id}>
                                                    <Link to={item.path}>{item.title}</Link>
                                                </Menu.Item>
                                            </SubMenu>
                                        );
                                    } else {
                                        return (

                                            <Menu.Item key={item.id}>
                                                <Link to={item.path} style={{ display: 'inline-block' }}>
                                                    <Icon type={item.iconType} />
                                                    <span>{item.title}</span>
                                                </Link>
                                            </Menu.Item>
                                        );
                                    }


                                })
                            }

                        </Menu>
                    </Sider>
                    <Layout className={antStyle['ant-main-layout']}>
                        <Header className={antStyle['ant-layout-header']}>
                            <Icon
                                className={antStyle['trigger']}
                                type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
                                onClick={this.toggle}
                            />
                        </Header>
                        <Content
                            className={antStyle['ant-layout-content']}
                        >
                            Content
                    </Content>
                    </Layout>
                </Layout>
            </Router>
        )
    }
}

export default AppRouter;