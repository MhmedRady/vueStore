<template>
    <div class="footer_top row wpb_row row-fluid mb-0 pt-3r custom-container">
        
        <div class="col-sm-8 wpb_column column_container">
            
            <Links-Col />

        </div>

        <div class="col-sm-4 wpb_column column_container">
            
            <Contact-Form />

        </div>

    </div>
</template>

<script>
import LinksCol from '@/components/Footer/footer-Top/_Links-Col'
import ContactForm from '@/components/Footer/footer-Top/_Form-Col'

export default {
    components:{LinksCol,ContactForm}
}
</script>