const { override, fixBabelImports,addWebpackAlias } = require('customize-cra');
const path = require('path')
module.exports = override(
  fixBabelImports('import', {
    libraryName: 'antd',
    libraryDirectory: 'es',
    style: 'css', // style: true 会加载 less 文件，,不加引号,且必须添加addLessLoader！！
  }),
  addWebpackAlias({
    '@': path.resolve('src')
  }),
  // addLessLoader({
  //   javascriptEnabled: true,
  //   modifyVars: { '@primary-color': '#1DA57A' },
  // }),
);