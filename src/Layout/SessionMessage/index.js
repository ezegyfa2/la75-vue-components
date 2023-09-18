export default {
    install(Vue) {
        require('helper-vue-components/SessionMessages/MessageBox').default.install(Vue)

        registerVueComponent(
            'la75-session-message',
            require('./Component.vue').default,
            Vue
        )
    }
}