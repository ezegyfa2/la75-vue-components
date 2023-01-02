export default {
    install(Vue) {
        registerVueComponent('ediwheel-contact-and-faq-template', require('../Templates/ContactAndFAQ/Component.vue').default, Vue)
		
		require('../ContactForm/Register.js').default.install(Vue)
		registerVueComponent('ediwheel-white-medium-text-content', require('../TextContents/WhiteMediumTextContent/Component.vue').default, Vue)
		registerVueComponent('ediwheel-faq', require('../FAQ/FAQ/Component.vue').default, Vue)
		registerVueComponent('ediwheel-faq-item', require('../FAQ/Item/Component.vue').default, Vue)
    }
}