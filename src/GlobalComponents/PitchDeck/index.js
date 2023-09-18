export default {
    install(Vue) {
        registerVueComponent(
            'la75-pitch-deck',
            require('./Component.vue').default,
            Vue
        )
    }
}