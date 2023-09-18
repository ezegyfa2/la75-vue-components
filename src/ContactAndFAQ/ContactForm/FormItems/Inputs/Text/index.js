export default {
    install(Vue) {
        require('helper-vue-components/Form/BootstrapFormItems/FormItemsWithoutLabel/Inputs/Text').default.install(Vue)

        registerVueComponent(
            'la75-contact-text-input',
            require('./Component.vue').default,
            Vue
        )
    }
}