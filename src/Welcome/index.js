export default {
    install(Vue) {
        window.templates.la75_welcome = require('./Template').default
        require('la75-vue-components/LayoutWithHeader').default.install(Vue)
        require('./Roadmap').default.install(Vue)
        require('./MainNumbers').default.install(Vue)
    }
}