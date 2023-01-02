<script>
    import MediumTextContent from './../../../../text-contents-vue-components/src/MediumTextContent.vue'

    export default {
        mixins: [
            MediumTextContent
        ],
        data() {
            return {
                addedClasses: {
                    '.title': 'h3',
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import "Style.scss";
</style>