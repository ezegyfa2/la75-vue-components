<script>
    import Layout from '../Layout/Component.vue'

    export default {
        mixins: [
            Layout
        ],
        data() {
            return {
                mainTemplatePath: 'aboutUs',
                templates: {
                    aboutUs: require('./aboutUs').default,
                    description: require('./description').default,
                    team: require('./team').default,
                    teamMember: require('./teamMember').default
                }
            }
        }
    }
</script>
