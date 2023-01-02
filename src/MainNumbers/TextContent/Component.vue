<script>
    import TextContent from './../../../../text-contents-vue-components/src/TextContent/Component.vue'

    export default {
        mixins: [
            TextContent,
        ],
        data() {
            return {
                addedClasses: {
                    '.title': 'h2',
                    '.content': 'h1'
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import "Style.scss";
</style>
