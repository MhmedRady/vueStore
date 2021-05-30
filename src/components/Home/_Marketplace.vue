<template>
    <div class="row wpb_row row-fluid pt-4r">
        <Marketplace-Content />
        <Contact-Form />
    </div>
</template>

<script>
import MarketplaceContent from '@/components/Home/marketplace/_marketplace_Content'
import ContactForm from '@/components/Home/marketplace/_contact_Form'

export default {
    components: {MarketplaceContent,ContactForm}
}
</script>