export default {
    install(Vue) {
        registerVueComponent('ediwheel-about-us-template', require('../Templates/AboutUs/Component.vue').default, Vue)
		
        registerVueComponent('ediwheel-team', require('../Team/Team/Component.vue').default, Vue)
        registerVueComponent('ediwheel-team-member', require('../Team/Member/Component.vue').default, Vue)
        
        registerVueComponent('ediwheel-description-container', require('../Description/Container/Component.vue').default, Vue)
        registerVueComponent('ediwheel-description', require('../Description/Description/Component.vue').default, Vue)
        registerVueComponent('ediwheel-description-text-content', require('../Description/TextContent/Component.vue').default, Vue)
    }
}
