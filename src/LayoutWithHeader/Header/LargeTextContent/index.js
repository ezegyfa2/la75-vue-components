export default {
    install(Vue) {
        require('text-contents-vue-components/LargeTextContent').default.install(Vue)

        registerVueComponent(
            'la75-large-text-content',
            require('./Component.vue').default,
            Vue
        )
    }
}