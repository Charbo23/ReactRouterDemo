import Index from '@/pages/Index';
import Video from '@/pages/Video';
import Workplace from '@/pages/Workplace';
import TodoList from '@/TodoList';
import FileUpload from '@/utils/FileUpload';


const routes = [
    {
        path: '/',
        exact: true,
        component: Index,
    },
    {
        path: '/video',
        component: Video,
    },
    {
        path: '/workplace',
        component: Workplace,
    },
    {
        path: '/todo-list',
        component: TodoList
    },
    {
        path: '/file-upload',
        component: FileUpload

    }
]

export default routes;