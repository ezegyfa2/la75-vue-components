export default {
	install(Vue) {
		require('helper-vue-components').default.install(Vue)
		require('text-contents-vue-components').default.install(Vue)
		require('description-vue-components').default.install(Vue)

		require('./Registers/layout').default.install(Vue)
		require('./Registers/welcome').default.install(Vue)
		require('./Registers/contactAndFAQ').default.install(Vue)
		require('./Registers/aboutUs').default.install(Vue)

        registerVueComponent('ediwheel-medium-text-content', require('./TextContents/MediumTextContent/Component.vue').default, Vue)
        registerVueComponent('ediwheel-black-large-text-content', require('./TextContents/BlackLargeTextContent/Component.vue').default, Vue)
        registerVueComponent('ediwheel-small-text-content', require('./TextContents/SmallTextContent/Component.vue').default, Vue)
        registerVueComponent('ediwheel-icon-link', require('./ButtonIconLink/Component.vue').default, Vue)
        registerVueComponent('ediwheel-table', require('./Table/Component.vue').default, Vue)
	}
};