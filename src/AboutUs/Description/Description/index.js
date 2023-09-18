export default {
    install(Vue) {
        require('description-vue-components/WhiteDescription').default.install(Vue)

        registerVueComponent(
            'la75-description',
            require('./Component.vue').default,
            Vue
        )
    }
}