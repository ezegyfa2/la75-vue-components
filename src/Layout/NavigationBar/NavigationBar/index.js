export default {
    install(Vue) {
        require('helper-vue-components/NavigationBar/CollapsableNavigationBar').default.install(Vue)

        registerVueComponent(
            'la75-navigation-bar',
            require('./Component.vue').default,
            Vue
        )
    }
}