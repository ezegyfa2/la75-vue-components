export default {
    install(Vue) {
        require('description-vue-components/Container').default.install(Vue)

        registerVueComponent(
            'la75-description-container',
            require('./Component.vue').default,
            Vue
        )
    }
}