export default {
    install(Vue) {
        window.templates.la75_contact_form = require('./Template').default
        require('./Form').default.install(Vue)
        require('./FormItems').default.install(Vue)
        require('la75-vue-components/GlobalComponents/TextContents/WhiteMediumTextContent').default.install(Vue)
    }
}