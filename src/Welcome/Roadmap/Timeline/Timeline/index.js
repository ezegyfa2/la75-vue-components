export default {
    install(Vue) {
        registerVueComponent(
            'la75-timeline',
            require('./Component.vue').default,
            Vue
        )
    }
}