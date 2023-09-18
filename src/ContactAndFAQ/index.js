export default {
    install(Vue) {
        window.templates.la75_contact_and_faq = require('./Template').default
        require('./ContactForm').default.install(Vue)
        require('./FAQ').default.install(Vue)
    }
}