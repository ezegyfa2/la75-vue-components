export default {
    install(Vue) {
        require('helper-vue-components/Form/BootstrapFormItems/FormItemsWithoutLabel/TextArea').default.install(Vue)

        registerVueComponent(
            'la75-contact-textarea',
            require('./Component.vue').default,
            Vue
        )
    }
}