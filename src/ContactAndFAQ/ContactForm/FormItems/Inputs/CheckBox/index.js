export default {
    install(Vue) {
        require('helper-vue-components/Form/BootstrapFormItems/FormItemsWithoutLabel/Inputs/CheckBox').default.install(Vue)

        registerVueComponent(
            'la75-contact-checkbox-input',
            require('./Component.vue').default,
            Vue
        )
    }
}