<script>
    import LayoutWithHeader from '../LayoutWithHeader/Component.vue'

    export default {
        mixins: [
            LayoutWithHeader
        ],
        data() {
            return {
                mainTemplatePath: 'contactAndFAQ',
                templates: {
                    contactAndFAQ: require('./contactAndFAQ').default,
                    faq: require('./faq').default,
                    contactForm: require('./contactForm').default,
                }
            }
        }
    }
</script>
