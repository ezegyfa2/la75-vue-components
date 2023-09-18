export default {
    install(Vue) {
        require('helper-vue-components/Headers/VideoBackgroundHeader').default.install(Vue)

        registerVueComponent(
            'la75-header',
            require('./Component.vue').default,
            Vue
        )
    }
}