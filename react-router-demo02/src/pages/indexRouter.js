import asyncComponent from './config/AsyncComponent';
import videoRoutes from './video/router';
import workplaceRoutes from './workplace/router';
import todoListRoutes from './todo-list/router';
import exceptionRoutes from './exception/router';
const Index = asyncComponent(() => import('@/pages/Index'));
const FileUpload = asyncComponent(() => import('@/utils/FileUpload'));

const routes = [
    {
        path: '/',
        exact: true,
        component: Index,
    },
    ...videoRoutes,
    ...workplaceRoutes,
    ...todoListRoutes,
    {
        path: '/file-upload',
        component: FileUpload
    },
    ...exceptionRoutes
]

export default routes;