const treeMenu = [
    {
        id: 1,
        icon: 'home',
        title: '博客首页',
        path: '/'
    },
    {
        id: 101,
        icon: 'video-camera',
        title: '视频教程',
        children: [
            {
                id: 102,
                title: '视频教程',
                path: '/video'
            }],
    },
    {
        id: 201,
        title: '职场技能',
        icon: 'radar-chart',
        children: [
            {
                id: 202,
                title: '职场技能',
                path: '/workplace',
            }
        ],
    },
    {
        id: 301,
        title: '待办事项',
        icon: 'file-text',
        path: '/todo-list'
    },
    {
        id: 401,
        title: '文件上传',
        icon: 'cloud-upload',
        path: '/file-upload'
    }
]

export default treeMenu;