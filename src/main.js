import { createApp } from 'vue'
import i18n from './i18n'
import App from './App.vue'
import router from './router'
import store from './store'
import installElementPlus from './plugins/element'
import './styles/index.scss'
import installIcons from '@/icons'
import './permission'
// filter
import installFilter from '@/filters'

const app = createApp(App)
installElementPlus(app)
installIcons(app)
installFilter(app)
app.use(store).use(router).mount('#app')
app.use(i18n)
