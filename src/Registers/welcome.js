export default {
    install(Vue) {
        registerVueComponent('ediwheel-welcome-template', require('../Templates/Welcome/Component.vue').default, Vue)

        registerVueComponent('ediwheel-roadmap', require('../Roadmap/Component.vue').default, Vue)
        registerVueComponent('ediwheel-timeline', require('../Timeline/Timeline/Component.vue').default, Vue)
        registerVueComponent('ediwheel-timeline-item', require('../Timeline/TimelineItem/Component.vue').default, Vue)
        registerVueComponent('ediwheel-two-title-text-content', require('../TextContents/TwoTitleTextContent/Component.vue').default, Vue)

        registerVueComponent('ediwheel-main-numbers', require('../MainNumbers/MainNumbers/Component.vue').default, Vue)
        registerVueComponent('ediwheel-main-number-text-content', require('../MainNumbers/TextContent/Component.vue').default, Vue)
    }
}