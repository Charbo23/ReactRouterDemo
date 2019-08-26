import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import { Breadcrumb } from 'antd';
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
const BreadCrumbWithRouter = (props) => {
    const { location } = props;
    const pathSnippets = location.pathname.split('/').filter(i => i);
    const extraBreadcrumbItems = pathSnippets.map((_, index) => {
        const url = `/${pathSnippets.slice(0, index + 1).join('/')}`;
        return (
            <Breadcrumb.Item key={url}>
                <Link to={url}>{breadcrumbNameMap[url]}</Link>
            </Breadcrumb.Item>
        );
    });
    const breadcrumbItems = [
        <Breadcrumb.Item key="home">
            <Link to="/">Home</Link>
        </Breadcrumb.Item>,
    ].concat(extraBreadcrumbItems);
    return (
        
        <Breadcrumb className={props.className}>
            {breadcrumbItems}
        </Breadcrumb>
    )
}

export default withRouter(BreadCrumbWithRouter);