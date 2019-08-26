import asyncComponent from '@/pages/config/AsyncComponent';

const TodoList = asyncComponent(() => import('./TodoList'));
const routes=[
    {
        path: '/todo-list',
        component: TodoList
    }
]

export default routes;