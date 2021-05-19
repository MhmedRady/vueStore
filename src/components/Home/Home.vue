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

            <!-- /** ROW 3 IMAGES **/ -->
            <Row-Imgs />

            <!-- /** RECOMMENDED LIST **/ -->
            <Recommended-List />
        </div>
    </div>
</template>

<script>
import SliderTop from '@/components/Home/_Slider_Top.vue';
import FlashSale from '@/components/Home/_Flash_Sale.vue';
import BlockContent from '@/components/Home/_Category_Block_Content.vue';
import SaleList from '@/components/Home/_Sale_Data_List';
import RowImgs from '@/components/Home/_Row_3_Img';
import RecommendedList from '@/components/Home/_Recommended';

export default {
    components: {
        SliderTop,
        FlashSale,
        BlockContent,
        SaleList,
        RowImgs,
        RecommendedList
    }
}
</script>
