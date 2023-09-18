export default {
    install(Vue) {
        window.templates.la75_navigation_bar = require('./Template').default
        require('./NavigationBar').default.install(Vue)
        require('./NavigationLink').default.install(Vue)
    }
}