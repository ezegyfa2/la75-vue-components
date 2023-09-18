export default {
    install(Vue) {
        window.templates.la75_team = require('./Template').default
        require('./Team').default.install(Vue)
        require('./Member').default.install(Vue)
        require('la75-vue-components/GlobalComponents/TextContents/MediumTextContent').default.install(Vue)
    }
}