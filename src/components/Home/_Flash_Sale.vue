<template>
    <div class="flashSale ow wpb_row row-fluid  mr-0 ml-0 mb-0 productdeal  row-has-fill">
        
        <div class="col-xl-2 col-lg-3 col-md-4 col-sm-4 wpb_column column_container">
            <flash-Badge />
        </div>
        <div class="col-xl-10 col-lg-9 col-md-8 col-sm-8 product_right wpb_column column_container">
            <flash-Slick />
        </div>
        
    </div>
</template>

<script>
import flashBadge from '@/components/Home/flashSale/_flash_badge.vue';
import flashSlick from '@/components/Home/flashSale/_slick_carousel.vue'

export default {
    components: {
        flashBadge,
        flashSlick
    }
}
</script>

<style lang="scss" scoped>
.home-1-edit{
    .flashSale{
        background-color: #eb4f19 !important;
    }
}
</style>