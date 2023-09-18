export default {
    install(Vue) {
        require('helper-vue-components/Form/BootstrapFormItems/FormItemsWithoutLabel/Inputs/Number').default.install(Vue)

        registerVueComponent(
            'la75-contact-number-input',
            require('./Component.vue').default,
            Vue
        )
    }
}