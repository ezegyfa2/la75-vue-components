export default {
    install(Vue) {
        require('helper-vue-components/IconLinks/ButtonIconLink2').default.install(Vue)

        registerVueComponent(
            'la75-button-icon-link',
            require('./Component.vue').default,
            Vue,
			'la75-vue-components/Footer/ButtonLink/Component.vue'
        )
    }
}