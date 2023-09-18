export default {
    install(Vue) {
        window.templates.la75_roadmap = require('./Template').default
        require('./Roadmap').default.install(Vue)
        require('./Timeline').default.install(Vue)
        require('la75-vue-components/GlobalComponents/TextContents/TwoTitleTextContent').default.install(Vue)
        require('la75-vue-components/GlobalComponents/TextContents/SmallTextContent').default.install(Vue)
        require('la75-vue-components/GlobalComponents/TextContents/MediumTextContent').default.install(Vue)
    }
}