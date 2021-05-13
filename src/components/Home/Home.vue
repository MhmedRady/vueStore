<template>
    <div class="HomePage-container">
        <div class="home-1-edit">
            <!-- /** TOP SLIDER AND NEXT **/ -->
            <slider-Top />

            <!-- /** TOP FLASH SALE **/ -->
            <flash-Sale />

            <!-- /** CATEGORY BLOCK CONTENT **/ -->
            <block-Content />

            <!-- /** SALE DATA LIST **/ -->
            <sale-List />
        </div>
    </div>
</template>

<script>
import SliderTop from '@/components/Home/_Slider_Top.vue';
import FlashSale from '@/components/Home/_Flash_Sale.vue';
import BlockContent from '@/components/Home/_Category_Block_Content.vue';
import SaleList from '@/components/Home/_Sale_Data_List';

export default {
    components: {
        SliderTop,
        FlashSale,
        BlockContent,
        SaleList
    }
}
</script>
