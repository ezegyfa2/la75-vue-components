<script>
    import Layout from '../Layout/Component.vue'

    export default {
        mixins: [
            Layout
        ],
        data() {
            return {
                templates: {
                    layoutWithHeader: require('./layoutWithHeader').default,
                    header: require('./header').default,
                }
            }
        }
    }
</script>
