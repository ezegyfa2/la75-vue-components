export default {
    install(Vue) {
        registerVueComponent('ediwheel-navigation-bar', require('../NavigationBar/NavigationBar/Component.vue').default, Vue)
        registerVueComponent('ediwheel-navigation-link', require('../NavigationBar/NavigationLink/Component.vue').default, Vue)

        registerVueComponent('ediwheel-header', require('../Header/Component.vue').default, Vue)
        registerVueComponent('ediwheel-large-text-content', require('../TextContents/LargeTextContent/Component.vue').default, Vue)

        registerVueComponent('ediwheel-session-message', require('../SessionMessage/Component.vue').default, Vue)
        
        registerVueComponent('ediwheel-footer', require('../Footer/Footer/Component.vue').default, Vue)
        registerVueComponent('ediwheel-footer-link', require('../Footer/Link/Component.vue').default, Vue)
        registerVueComponent('ediwheel-button-icon-link', require('../Footer/ButtonLink/Component.vue').default, Vue)
    }
}