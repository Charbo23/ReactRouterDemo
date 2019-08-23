import React, { Component, Fragment } from 'react';
import {  Route, Link, withRouter,NavLink,Switch } from 'react-router-dom';
import { Layout, Menu, Icon, Breadcrumb } from 'antd';
import antStyle from './style/antd-style.module.scss';
import Index from './pages/Index';
import Video from './pages/Video';
import Workplace from './pages/Workplace';
const { Header, Sider, Content } = Layout;
const { SubMenu } = Menu;
const breadcrumbNameMap = {
    '/': 'Home',
    '/video': 'Video',
    '/workplace': 'Workplace',
    '/video/react-page': 'React',
};
class AppRouter extends Component {

    constructor(props) {
        super(props);
        this.state = {
            collapsed: false,
            routeConfig: [
                { id: '/', iconType: 'home', path: '/', title: '博客首页', exact: true, hasSub: false, component: Index },
                { id: '/video', iconType: 'video-camera', path: '/video', title: '视频教程', exact: false, hasSub: true, component: Video },
                { id: '/workplace', iconType: 'radar-chart', path: '/workplace', title: '职场技能', exact: false, hasSub: true, component: Workplace },
            ]
        };
        this.toggle = () => {
            this.setState({
                collapsed: !this.state.collapsed,
            });
        };
        
        this.location = props.location
        this.pathSnippets = this.location.pathname.split('/').filter(i => i);
        this.curUrl=`/${this.pathSnippets.join('/')}`;
        this.extraBreadcrumbItems = this.pathSnippets.map((_, index) => {
            const url = `/${this.pathSnippets.slice(0, index + 1).join('/')}`;
           
            // if(!breadcrumbNameMap[url]){
            //     return null;
            // }
            return (
                <Breadcrumb.Item key={url}>
                    <Link to={url}>{breadcrumbNameMap[url]}</Link>
                </Breadcrumb.Item>
            );
        });
        this.breadcrumbItems = [
            <Breadcrumb.Item key="home">
                <Link to="/">Home</Link>
            </Breadcrumb.Item>,
        ].concat(this.extraBreadcrumbItems);
    }
    UNSAFE_componentWillReceiveProps(nextProps) {
        this.location = nextProps.location
        this.pathSnippets = this.location.pathname.split('/').filter(i => i);
        this.extraBreadcrumbItems = this.pathSnippets.map((_, index) => {
            const url = `/${this.pathSnippets.slice(0, index + 1).join('/')}`;
           
            // if(!breadcrumbNameMap[url]){
            //     return null;
            // }
                return (
                    <Breadcrumb.Item key={url}>
                        <Link to={url}>{breadcrumbNameMap[url]}</Link>
                    </Breadcrumb.Item>
                );
                
        });
        
        this.breadcrumbItems = [
            <Breadcrumb.Item key="home">
                <Link to="/">Home</Link>
            </Breadcrumb.Item>,
        ].concat(this.extraBreadcrumbItems);
    }
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



            <Layout className={antStyle['ant-layout']}>
                <Sider className={antStyle['ant-sider']} trigger={null} collapsible collapsed={this.state.collapsed}>
                    <div className={antStyle['logo']}><img src={require('./assets/logo-sidebar.svg')} alt="logo" /></div>
                    <Menu 
                    theme="dark" 
                    mode="inline" 
                    defaultSelectedKeys={[`${this.curUrl}`]}  
                    defaultOpenKeys={[`parent-${this.curUrl}`]}
                    >
                        {
                            this.state.routeConfig.map((item) => {
                                if (item.hasSub) {
                                    return (

                                        <SubMenu
                                            key={"parent-"+item.id}
                                            title={
                                                <Fragment>
                                                    <Icon type={item.iconType} />
                                                    <span>{item.title}</span>
                                                </Fragment>
                                            }
                                        >
                                            <Menu.Item key={item.id}>
                                                <Link to={item.path}>{item.title}</Link>
                                            </Menu.Item>
                                        </SubMenu>
                                    );
                                } else {
                                    return (

                                        <Menu.Item key={item.id}>
                                            <Link to={item.path}>
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
                        <Breadcrumb style={{ margin: '16px 20px 0px' }}>
                            {this.breadcrumbItems}
                        </Breadcrumb>
                        <div className={antStyle['ant-layout-content-main']} >
                            <Switch>
                            {
                                this.state.routeConfig.map((item) => {
                                    return (
                                        <Route key={item.id} path={item.path} exact={item.exact} component={item.component} />
                                    )
                                })
                            }
                            <Route render={()=><h1>Not Found</h1>}></Route>
                        </Switch>
                        </div>
                    </Content>
                </Layout>
            </Layout>

        )
    }
}

export default withRouter(AppRouter);