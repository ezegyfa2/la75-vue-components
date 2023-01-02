<template lang="pug">
    include Template.pug
</template>

<script>
    import TextContent from './../../../../text-contents-vue-components/src/TextContent/Component.vue'

    export default {
        mixins: [
            TextContent
        ],
        props: {
            sub_title: {
                type: String
            }
        },
        data() {
            return {
                addedClasses: {
                    '.title': 'h3',
                    '.sub-title': 'h3',
                    '.content': 'text-muted'
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import "Style.scss";
</style>