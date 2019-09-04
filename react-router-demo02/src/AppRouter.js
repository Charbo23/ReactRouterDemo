import React, { Component, Fragment } from 'react';
import { Link, Switch, withRouter } from 'react-router-dom';
import { Layout, Menu, Icon } from 'antd';
import antStyle from './style/antd-style.module.scss';
import MyBreadCrumb from './utils/MyBreadCrumb';
import { renderRoutes } from 'react-router-config'
import routes from './pages/indexRouter';
// import { CSSTransition, TransitionGroup } from 'react-transition-group';
import treeMenu from './pages/config/treeMenu';
const { Header, Sider, Content } = Layout;
const { SubMenu } = Menu;

class AppRouter extends Component {
    updateCurUrl = (props) => {
        const { location } = props;
        let curUrl = location.pathname;
        this.updateCurTitle(treeMenu, curUrl);
    }
    updateCurTitle = (tree, curUrl, parentId) => {
        return tree.some(item => {
            if (item.children) {
                return this.updateCurTitle(item.children, curUrl, item.id);
            } else {
                if (item.path === curUrl) {
                    document.title = `${item.title} | React App`;
                    let curId = item.id;
                    this.curId = curId;
                    this.openId = parentId;
                    return true;
                }
            }
            return false;
        })
    }
    constructor(props) {
        super(props);
        this.state = {
            collapsed: false,
        };
    }
    toggle = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    };
    renderLink = (tree) => {
        return tree.map(item => {
            if (item.children) {
                return (
                    <SubMenu
                        key={item.id}
                        title={
                            <Fragment>
                                <Icon type={item.icon} />
                                <span>{item.title}</span>
                            </Fragment>
                        }
                    >
                        {this.renderLink(item.children)}
                    </SubMenu>
                );
            } else {
                return (
                    <Menu.Item key={item.id}>
                        <Link to={item.path}>
                            {item.icon ? <Icon type={item.icon} /> : ''}
                            <span>{item.title}</span>
                        </Link>
                    </Menu.Item>
                );
            }
        })
    }
    // renderRoute = (item) => {
    //     return (
    //         <Route
    //             key={item.id}
    //             path={item.path}
    //             exact={item.exact}
    //             render={() => {
    //                 document.title = `${item.title} | React App`;
    //                 return React.createElement(item.component);
    //             }}
    //         />
    //     )
    // }
   
    render() {
        this.updateCurUrl(this.props);
        return (
            <Layout className={antStyle['ant-layout']}>
                <Sider className={antStyle['ant-sider']} trigger={null} collapsible collapsed={this.state.collapsed}>
                    <div className={antStyle['logo']}><img src={require('./assets/logo-sidebar.svg')} alt="logo" /></div>
                    <Menu
                        theme="dark"
                        mode="inline"
                        defaultSelectedKeys={[this.curId + '']}
                        defaultOpenKeys={[this.openId + '']}
                    >
                        {this.renderLink(treeMenu)}
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
                    {/* <TransitionGroup>
                        <CSSTransition
                            key={this.props.location.pathname}
                            classNames='page-content'
                            timeout={1000}
                        > */}


                    <Content
                        className={antStyle['ant-layout-content']}
                    >
                        {/* <BreadCrumbWithRouter
                            className={antStyle['ant-breadcrumb']}
                        /> */}
                        <MyBreadCrumb
                            className={antStyle['ant-breadcrumb']}
                        />
                        <div className={antStyle['ant-layout-content-main']} >
                            <Switch>
                                {/* {this.state.routeConfig.map(this.renderRoute)} */}
                                {renderRoutes(routes)}
                            </Switch>
                        </div>
                    </Content>
                    {/* </CSSTransition>
                    </TransitionGroup> */}
                </Layout>
            </Layout>

        )
    }
}

export default withRouter(AppRouter);