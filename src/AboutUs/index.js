export default {
    install(Vue) {
        window.templates.la75_about_us = require('./Template').default
        require('./Description').default.install(Vue)
        require('./Team').default.install(Vue)
    }
}