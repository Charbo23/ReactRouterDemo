import asyncComponent from '@/pages/config/AsyncComponent';
const Video = asyncComponent(() => import('../Video'));
const ReactPage = asyncComponent(() => import('./ReactPage'));
const Vue = asyncComponent(() => import('./Vue'));
const Flutter = asyncComponent(() => import('./Flutter'));
const routes=[
    {
        path: '/video',
        component: Video,
        routes: [
            {
                path: '/video/react-page',
                component: ReactPage
            },
            {
                path: '/video/vue',
                component: Vue
            },
            {
                path: '/video/flutter',
                component: Flutter
            },
            {
                path: '/video',
                component: ReactPage
            }
        ]
    }
]

export default routes;