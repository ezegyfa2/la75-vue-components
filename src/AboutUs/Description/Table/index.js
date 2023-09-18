export default {
    install(Vue) {
        require('helper-vue-components/Tables/Table').default.install(Vue)
        require('la75-vue-components/GlobalComponents/TextContents/SmallTextContent').default.install(Vue)
        require('la75-vue-components/GlobalComponents/TextContents/TwoTitleTextContent').default.install(Vue)

        registerVueComponent(
            'la75-table',
            require('./Component.vue').default,
            Vue
        )
    }
}