export default {
    install(Vue) {
        window.templates.la75_main_numbers = require('./Template').default
        require('./MainNumbers').default.install(Vue)
        require('./TextContent').default.install(Vue)
    }
}