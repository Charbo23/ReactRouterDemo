import React, { Component, Fragment } from 'react';
import { Route, Link, Switch, withRouter } from 'react-router-dom';
import { Layout, Menu, Icon } from 'antd';
import antStyle from './style/antd-style.module.scss';
import Index from './pages/Index';
import Video from './pages/Video';
import Workplace from './pages/Workplace';
import TodoList from './TodoList';
import FileUpload from './utils/FileUpload';
import BreadCrumbWithRouter from './utils/BreadCrumbWithRouter';
import MyBreadCrumb from './utils/MyBreadCrumb';
const { Header, Sider, Content } = Layout;
const { SubMenu } = Menu;
const breadcrumbNameMap = {
    '/': 'Home',
    '/video': 'Video',
    '/workplace': 'Workplace',
    '/video/react-page': 'React',
    '/video/vue': 'Vue',
    '/video/flutter': 'Flutter',
    '/workplace/get-up': 'GetUp',
    '/workplace/salary': 'Salary',
    '/todo-list': 'TodoList',
    '/file-upload': 'FileUpload'
};
class AppRouter extends Component {
    updateCurUrl = (curUrl) => {
        const { location } = this.props;
        const pathSnippets = location.pathname.split('/').filter(i => i);
        this.curUrl = `/${pathSnippets.join('/')}`;
    }
    constructor(props) {
        super(props);
        this.state = {
            collapsed: false,
            routeConfig: [
                { id: '/', iconType: 'home', path: '/', title: '博客首页', exact: true, hasSub: false, component: Index },
                { id: '/video', iconType: 'video-camera', path: '/video', title: '视频教程', exact: false, hasSub: true, component: Video },
                { id: '/workplace', iconType: 'radar-chart', path: '/workplace', title: '职场技能', exact: false, hasSub: true, component: Workplace },
                { id: '/todo-list', iconType: 'file-text', path: '/todo-list', title: 'TodoList', exact: false, hasSub: false, component: TodoList },
                { id: '/file-upload', iconType: 'cloud-upload', path: '/file-upload', title: 'FileUpload', exact: false, hasSub: false, component: FileUpload },
            ]
        };
        this.toggle = () => {
            this.setState({
                collapsed: !this.state.collapsed,
            });
        };


    }

    renderLink(item) {
        if (item.hasSub) {
            return (
                <SubMenu
                    key={"parent-" + item.id}
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
    }
    renderRoute(item) {
        return (
            <Route
                key={item.id}
                path={item.path}
                exact={item.exact}
                render={() => {
                    document.title = `${item.title} | React App`;
                    return React.createElement(item.component);
                }}
            />
        )
    }
    render() {
        this.updateCurUrl();
        return (
            <Layout className={antStyle['ant-layout']}>
                <Sider className={antStyle['ant-sider']} trigger={null} collapsible collapsed={this.state.collapsed}>
                    <div className={antStyle['logo']}><img src={require('./assets/logo-sidebar.svg')} alt="logo" /></div>
                    <Menu
                        theme="dark"
                        mode="inline"
                        defaultSelectedKeys={[`${this.curUrl}`]}
                        defaultOpenKeys={[`parent-${this.curUrl}`]}
                    >
                        {this.state.routeConfig.map(this.renderLink)}
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
                        <BreadCrumbWithRouter
                            breadcrumbNameMap={breadcrumbNameMap}
                            className={antStyle['ant-breadcrumb']}
                        />
                        <MyBreadCrumb
                            className={antStyle['ant-breadcrumb']}
                        />
                        <div className={antStyle['ant-layout-content-main']} >
                            <Switch>
                                {this.state.routeConfig.map(this.renderRoute)}
                                <Route render={() => <h1>Not Found</h1>}></Route>
                            </Switch>
                        </div>
                    </Content>
                </Layout>
            </Layout>

        )
    }
}

export default withRouter(AppRouter);