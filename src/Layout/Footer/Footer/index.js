export default {
    install(Vue) {
        require('helper-vue-components/Footer/Footer').default.install(Vue)

        registerVueComponent(
            'la75-footer',
            require('./Component.vue').default,
            Vue
        )
    }
}
