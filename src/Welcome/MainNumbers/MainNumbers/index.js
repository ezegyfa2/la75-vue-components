export default {
    install(Vue) {
        registerVueComponent(
            'la75-main-numbers',
            require('./Component.vue').default,
            Vue
        )
    }
}