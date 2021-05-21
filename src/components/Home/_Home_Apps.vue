<template>
    <div class="row row-fluid wpb_row">
        <div class="col-sm-12 wpb_column column_container">
            <div class="vc_column-inner">
                <div class="wpb_wrapper">
                    <div class="nov-category-product">
                        <Home-App-Content />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import HomeAppContent from '@/components/Home/HomeAppliance/_home_app_content.vue'

export default {
     components: {HomeAppContent}   
}

</script>