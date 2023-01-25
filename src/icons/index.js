import SvgIcon from '@/components/SvgIcon'

// 获取到所有的 svg 文件夹下的 svg 文件
const svgRequire = require.context('./svg', false, /\.svg$/)
svgRequire.keys().forEach((SvgIcon) => svgRequire(SvgIcon))

export default (app) => {
  app.component('svg-icon', SvgIcon)
}
