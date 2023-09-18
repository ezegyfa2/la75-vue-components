export default {
    install(Vue) {
        window.templates.la75_team_member = require('./Template').default
        require('helper-vue-components/IconLinks/WerticallyIconLinks').default.install(Vue)
        require('la75-vue-components/GlobalComponents/ButtonLink2').default.install(Vue)
        
        registerVueComponent(
            'la75-team-member', 
            require('./Component.vue').default,
            Vue
        )
    }
}