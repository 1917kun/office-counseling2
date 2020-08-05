import '@babel/polyfill'
import 'mutationobserver-shim'
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faAngleRight, faCrown, faEye, faHeart, faWifi, faCoffee, faBabyCarriage } from '@fortawesome/free-solid-svg-icons'
import { faGratipay, faFacebook, faInstagram, faLine } from '@fortawesome/free-brands-svg-icons'
import VueSweetalert2 from 'vue-sweetalert2'
import Lightbox from 'vue-easy-lightbox'
import axios from 'axios'
import VueAxios from 'vue-axios'
import Vuesax from 'vuesax'
import Photoswipe from 'vue-pswipe'
import 'vuesax/dist/vuesax.css'
import './plugins/bootstrap-vue'
import './style/css/style.css'
import 'sweetalert2/dist/sweetalert2.min.css'

Vue.use(BootstrapVue)
Vue.use(BootstrapVueIcons)
Vue.use(Lightbox)
Vue.use(VueAxios, axios)
Vue.use(Vuesax)
library.add(faAngleRight, faCrown, faEye, faHeart, faGratipay, faWifi, faCoffee, faBabyCarriage, faFacebook, faInstagram, faLine)
Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.config.productionTip = false
Vue.use(Photoswipe)

Vue.use(VueSweetalert2)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
