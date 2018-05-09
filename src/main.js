// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueCookie from "vue-cookie";
import Carousel from 'element-ui'
// import { Carousel, Loading } from 'element-ui'
import { Message } from "element-ui";
import 'element-ui/lib/theme-chalk/index.css'
import { Radio, RadioGroup } from 'vue-ydui/dist/lib.px/radio'
import {
    Icon,
    NoticeBar,
    Actionsheet,
    Popup,
    Stepper,
    Dialog,
    Swipe,
    SwipeItem,
    Collapse,
    CollapseItem
} from 'vant';
import 'vant/lib/vant-css/index.css'
import 'lib-flexible/flexible.js'
import './assets/iconfont/iconfont.css'
import axios from 'axios'
import VueAxios from 'vue-axios'
import store from './vuex/store'
import {
    Tab,
    Tabs
} from 'vant';
import {
    CountDown
} from 'vue-ydui/dist/lib.px/countdown';
import {
    CountUp
} from 'vue-ydui/dist/lib.px/countup';
import {
    CheckBox,
    CheckBoxGroup
} from 'vue-ydui/dist/lib.px/checkbox';
import 'vue-ydui/dist/ydui.px.css';
import md5 from 'js-md5';
import { SendCode } from 'vue-ydui/dist/lib.px/sendcode';

Vue.component(SendCode.name, SendCode);
Vue.use(Collapse).use(CollapseItem)
Vue.use(Swipe).use(SwipeItem);
Vue.component(CheckBox.name, CheckBox);
Vue.component(CheckBoxGroup.name, CheckBoxGroup);
axios.defaults.withCredentials = true;
Vue.prototype.$axios = axios;
window.axios = axios;
Vue.component(CountUp.name, CountUp);
Vue.component(CountDown.name, CountDown);
Vue.use(VueCookie);
Vue.use(Stepper);
Vue.use(Popup);
Vue.use(Tab).use(Tabs);
Vue.use(VueAxios, axios);
Vue.use(Actionsheet);
Vue.use(NoticeBar);
Vue.use(Icon);
Vue.component(Radio.name, Radio);
Vue.component(RadioGroup.name, RadioGroup);
Vue.use(Carousel);
Vue.config.productionTip = false
    /* eslint-disable no-new */

// 超时时间
axios.defaults.timeout = 5000
    // http请求拦截器
var loadinginstace
    // axios.interceptors.request.use(config => {
    //     // element ui Loading方法
    //     loadinginstace = Loading.service({ fullscreen: true })
    //     return config
    // }, error => {
    //     loadinginstace.close()
    //     Message.error({
    //         message: '加载超时！请检查网络或重新登陆!'
    //     })
    //     return Promise.reject(error)
    // })
    // http响应拦截器
axios.interceptors.response.use(data => { // 响应成功关闭loading
    // loadinginstace.close()
    if (data.data.status === 302) {
        // setTimeout(() => {
            router.push('/login');
        // }, 1000);
    }
    if (data.data.pup === true) {
        console.log(data.data.data);
        if (data.data.data.Message){
            Message.error({
                message: data.data.data.message
            })
        } else {
            Message.error({
                message: data.data.data
            })
        }
        
        
    }
    return data
}, error => {
    // loadinginstace.close()
    // Message.error({
    //     message: '加载失败！请检查网络或重新登陆!'
    // })
    return Promise.reject(error)
})

// export default axios

new Vue({
    el: '#app',
    router,
    store,
    components: {
        App
    },
    template: '<App/>'
})