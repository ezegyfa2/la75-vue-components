export default {
    install(Vue) {
        require('helper-vue-components/Link').default.install(Vue)

        registerVueComponent(
            'la75-button-icon-link',
            require('./Component.vue').default,
            Vue
        )
    }
}