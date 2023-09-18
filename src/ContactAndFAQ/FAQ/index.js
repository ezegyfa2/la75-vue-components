export default {
    install(Vue) {
        window.templates.la75_faq = require('./Template').default
        require('./FAQ').default.install(Vue)
		require('./Item').default.install(Vue)
		require('la75-vue-components/GlobalComponents/TextContents/MediumTextContent').default.install(Vue)
    }
}