export default {
    install(Vue) {
        registerVueComponent(
            'la75-timeline-item',
            require('./Component.vue').default,
            Vue
        )
    }
}