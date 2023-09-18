export default {
    install(Vue) {
        window.templates.la75_layout_with_header = require('./Template').default
        require('./Header').default.install(Vue)
    }
}