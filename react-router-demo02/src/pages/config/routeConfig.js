const routeConfig= [
    { id: '/', iconType: 'home', path: '/', title: '博客首页', exact: true, hasSub: false },
    { id: '/video', iconType: 'video-camera', path: '/video', title: '视频教程', exact: false, hasSub: true },
    { id: '/workplace', iconType: 'radar-chart', path: '/workplace', title: '职场技能', exact: false, hasSub: true },
    { id: '/todo-list', iconType: 'file-text', path: '/todo-list', title: '待办事项', exact: false, hasSub: false },
    { id: '/file-upload', iconType: 'cloud-upload', path: '/file-upload', title: '文件上传', exact: false, hasSub: false},
]

export default routeConfig;