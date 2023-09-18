export default {
    install(Vue) {
        registerVueComponent(
            'la75-roadmap',
            require('./Component.vue').default,
            Vue
        )
    }
}