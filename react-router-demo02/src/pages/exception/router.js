import asyncComponent from '@/pages/config/AsyncComponent';

const NotFound = asyncComponent(() => import('./NotFound'));
const routes=[
    {
        path: '*',
        component: NotFound
    }
]

export default routes;