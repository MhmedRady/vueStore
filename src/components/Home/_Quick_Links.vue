<template>
    <div class="row wpb_row row-fluid  mb-5r">
        <div class="col-sm-12 wpb_column column_container">
            <div class="column-inner">
                <div class="wpb_wrapper">
                    <Text-Titles />
                
                    <Quick-Links />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import TextTitles from '@/components/Home/quickLinks/_text_Titles'
import QuickLinks from '@/components/Home/quickLinks/_quick_links'

export default {
    components: {TextTitles,QuickLinks}
}
</script>