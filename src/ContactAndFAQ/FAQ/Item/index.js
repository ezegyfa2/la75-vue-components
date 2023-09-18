export default {
    install(Vue) {
        registerVueComponent(
            'la75-faq-item',
            require('./Component.vue').default,
            Vue
        )
    }
}