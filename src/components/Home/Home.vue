<template>
    <div class="HomePage-container">
        <div class="home-1-edit">
            <!-- /** TOP SLIDER AND NEXT **/ -->
            <Slider-Top />

            <!-- /** TOP FLASH SALE **/ -->
            <Flash-Sale />

            <!-- /** CATEGORY BLOCK CONTENT **/ -->
            <Block-Content />

            <!-- /** SALE DATA LIST **/ -->
            <Sale-List />

            <!-- /** ROW 3 IMAGES **/ -->
            <Row-Imgs />

            <!-- /** RECOMMENDED LIST **/ -->
            <Recommended-List />

            <!-- /** HOMEAPPLIANCE LIST **/ -->
            <Home-Appliance />
             
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

import HomeAppliance from '@/components/Home/_Home_Apps'

export default {
    components: {
        SliderTop,
        FlashSale,
        BlockContent,
        SaleList,
        RowImgs,
        RecommendedList,
        HomeAppliance
    }
}
</script>
