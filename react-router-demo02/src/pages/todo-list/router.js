import asyncComponent from '@/pages/config/AsyncComponent';
// import TodoList from './TodoList';
const TodoList = asyncComponent(() => import('./TodoList'));
const routes=[
    {
        path: '/todo-list',
        component: TodoList
    }
]

export default routes;