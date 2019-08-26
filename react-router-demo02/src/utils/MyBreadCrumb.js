import React from 'react';
import { Link } from 'react-router-dom';
import withBreadcrumbs from 'react-router-breadcrumbs-hoc';
import { Breadcrumb, Icon } from 'antd';
import queryString from 'query-string';

const userNamesById = { '1': 'Charbo' }

const DynamicUserBreadcrumb1 = ({ match }) => (
    userNamesById[match.params.id] ?
        <span>{userNamesById[match.params.id]}</span> : <span>{match.params.id}</span>
);
const DynamicUserBreadcrumb2 = ({ location }) => (
    <span>{queryString.parse(location.search).userId ? '用户信息修改' : '新增用户'}</span>
);


// 更多配置请移步 https://github.com/icd2k3/react-router-breadcrumbs-hoc
let routes = [
    { path: '/', breadcrumb: '首页' },
    { path: '/video', breadcrumb: '视频教程' },
    { path: '/workplace', breadcrumb: '职场技能' },
    { path: '/video/react-page', breadcrumb: 'React' },
    { path: '/video/vue', breadcrumb: 'Vue' },
    { path: '/video/flutter', breadcrumb: 'Flutter' },
    { path: '/workplace/get-up', breadcrumb: '早起攻略' },
    { path: '/workplace/salary', breadcrumb: '加薪攻略' },
    { path: '/todo-list', breadcrumb: '待办事项' },
    { path: '/todo-list/detail', breadcrumb: DynamicUserBreadcrumb2 },
    { path: '/todo-list/:id', breadcrumb: DynamicUserBreadcrumb1 },
    { path: '/file-upload', breadcrumb: '文件上传' },
];

const excludePaths = ['/zh_CN'];

const MyBreadcrumb = ({ routes: externalRoutes, className }) => {
    routes = externalRoutes && Array.isArray(externalRoutes) ? externalRoutes : routes;
    const AntdBreadcrumb = withBreadcrumbs(routes, { excludePaths })(({ breadcrumbs }) => {
        return (
            <Breadcrumb
                separator={<Icon type="double-right" />}
                className={className}
            >
                {breadcrumbs.map((breadcrumb, index) => (
                    <Breadcrumb.Item key={breadcrumb.key}>
                        {breadcrumbs.length - 1 === index ? (
                            breadcrumb.breadcrumb
                        ) : (
                                <Link
                                    to={{
                                        pathname: breadcrumb.match.url,
                                        state: breadcrumb.match.params ? breadcrumb.match.params : {},
                                        search: breadcrumb.location.search ? breadcrumb.location.search : '',
                                    }}
                                >
                                    {breadcrumb.breadcrumb}

                                </Link>
                            )}
                    </Breadcrumb.Item>
                ))}
            </Breadcrumb>
        );
    });
    return <AntdBreadcrumb />;

};
export default MyBreadcrumb;


