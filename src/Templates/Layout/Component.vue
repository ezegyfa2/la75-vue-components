<script>
    import Template from '../../../../helper-vue-components/src/Template/Component.vue'

    export default {
        mixins: [
            Template
        ],
        data() {
            return {
                templates: {
                    layout: require('./layout').default,
                    navbar: require('./navbar').default,
                    footer: require('./footer').default,
                }
            }
        }
    }
</script>
