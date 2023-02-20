export default {
    install(Vue) {
        require('helper-vue-components').default.install(Vue);
        require('text-contents-vue-components').default.install(Vue);
        require('description-vue-components').default.install(Vue);

        require('./Registers/layout').default.install(Vue);
        require('./Registers/welcome').default.install(Vue);
        require('./Registers/contactAndFAQ').default.install(Vue);
        require('./Registers/aboutUs').default.install(Vue);

        registerVueComponent(
            'ediwheel-medium-text-content',
            require('./TextContents/MediumTextContent/Component.vue').default,
            Vue,
			'gurulo-lofasz-vue-components/TextContents/MediumTextContent/Component.vue'
        );
        registerVueComponent(
            'ediwheel-black-large-text-content',
            require('./TextContents/BlackLargeTextContent/Component.vue').default,
            Vue,
			'gurulo-lofasz-vue-components/TextContents/BlackLargeTextContent/Component.vue'
        );
        registerVueComponent(
            'ediwheel-small-text-content',
            require('./TextContents/SmallTextContent/Component.vue').default,
            Vue,
			'gurulo-lofasz-vue-components/TextContents/SmallTextContent/Component.vue'
        );
        registerVueComponent(
            'ediwheel-icon-link',
            require('./ButtonIconLink/Component.vue').default,
            Vue,
			'gurulo-lofasz-vue-components/ButtonIconLink/Component.vue'
        );
        registerVueComponent(
            'ediwheel-table',
            require('./Table/Component.vue').default,
            Vue,
			'gurulo-lofasz-vue-components/Table/Component.vue'
        );
    },
};
