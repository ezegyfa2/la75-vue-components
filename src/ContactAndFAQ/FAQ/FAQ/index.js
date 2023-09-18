export default {
    install(Vue) {
        registerVueComponent(
            'la75-faq',
            require('./Component.vue').default,
            Vue
        )
    }
}