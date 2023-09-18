export default {
    install(Vue) {
        registerVueComponent(
            'la75-team', 
            require('./Component.vue').default,
            Vue
        )
    }
}