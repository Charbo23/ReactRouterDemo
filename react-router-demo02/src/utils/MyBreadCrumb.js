import React from 'react';
import { Link} from 'react-router-dom';
import withBreadcrumbs from 'react-router-breadcrumbs-hoc';
import { Breadcrumb, Badge, Icon } from 'antd';
const userNamesById = { '1': 'charbo' }

const DynamicUserBreadcrumb = ({ match }) => (
  <span>{userNamesById[match.params.id]}</span>
);
// 更多配置请移步 https://github.com/icd2k3/react-router-breadcrumbs-hoc
const routes = [
    { path: '/todo-list/:id' },
];

const Breadcrumbs = ({ data,className }) => {
   
   data=routes
    if (data && Array.isArray(data)) {
        const AntdBreadcrumb = withBreadcrumbs(data)(({ breadcrumbs }) => {
            console.log(breadcrumbs);
            return (
                <Breadcrumb separator={<Icon type="double-right" />} className={className}>
                    {breadcrumbs.map((breadcrumb, index) => (
                        <Breadcrumb.Item key={breadcrumb.key}>
                            {breadcrumbs.length - 1 === index ? (
                                <Badge status="processing" text={breadcrumb.breadcrumb} />
                            ) : (
                                    <Link
                                        to={{
                                            pathname: breadcrumb.match.url,
                                            state: breadcrumb.match.params ? breadcrumb.match.params : {},
                                            query: breadcrumb.location.query ? breadcrumb.location.query : {},
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
    }
    const DefaultBreadcrumb = withBreadcrumbs(routes)(({ breadcrumbs }) => {
    console.log(breadcrumbs);
    return(

    
        <div  className={className}>
            {breadcrumbs.map((breadcrumb, index) => (
                <span key={breadcrumb.key}>
                    <Link
                        to={{
                            pathname: breadcrumb.match.url,
                            state: breadcrumb.match.params ? breadcrumb.match.params : {},
                            query: breadcrumb.location.query ? breadcrumb.location.query : {},
                        }}
                    >
                        {breadcrumb.breadcrumb}
                    </Link>
                    {index < breadcrumbs.length - 1 && <i> / </i>}
                </span>
            ))}
        </div>
        )
    });
    return <DefaultBreadcrumb />;
};

export default Breadcrumbs;


