import asyncComponent from '@/pages/config/AsyncComponent';
const Workplace = asyncComponent(() => import('./Workplace'));
const GetUp = asyncComponent(() => import('./GetUp'));
const Salary = asyncComponent(() => import('./Salary'));
const routes=[
    {
        path: '/workplace',
        component: Workplace,
        routes: [
            {
                path: '/workplace/get-up',
                component: GetUp
            },
            {
                path: '/workplace/salary',
                component: Salary
            }
        ]
    }
]

export default routes;