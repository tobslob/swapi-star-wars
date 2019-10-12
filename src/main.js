import Vue from 'vue'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import BootstrapVue from 'bootstrap-vue'
import { library } from "@fortawesome/fontawesome-svg-core";
import { faSearch, faArrowRight, faChevronLeft, faChevronRight,
  faSortDown, faCaretRight, faCaretLeft
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import VueGlide from 'vue-glide-js'
import 'vue-glide-js/dist/vue-glide.css'

library.add(faSearch, faArrowRight, faChevronLeft,
  faChevronRight, faSortDown, faCaretLeft, faCaretRight);

Vue.component("font-awesome-icon", FontAwesomeIcon);

Vue.use(VueGlide)
Vue.use(BootstrapVue)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
