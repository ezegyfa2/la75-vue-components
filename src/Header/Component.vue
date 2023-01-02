<script>
    import Header from './../../../helper-vue-components/src/Headers/VideoBackgroundHeader/Component.vue'

    export default {
        mixins: [
            Header
        ],
        data() {
            return {
                backgroundVideo: {
                    url: '/assets/header/background.mp4',
                    type: 'video/mp4',
                    posterUrl: 'assets/dessert.png'
                }
            }
        }
    }
</script>
