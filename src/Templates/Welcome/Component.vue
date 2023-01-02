<script>
    import LayoutWithHeader from '../LayoutWithHeader/Component.vue'

    export default {
        mixins: [
            LayoutWithHeader
        ],
        data() {
            return {
                mainTemplatePath: 'welcome',
                templates: {
                    welcome: require('./welcome').default,
                    roadmap: require('./roadmap').default,
                }
            }
        }
    }
</script>
