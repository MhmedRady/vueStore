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

            <!-- /** OUR BLOG **/ -->
            <Our-Blog />
             
            <!-- /** UNDER 10 **/ -->
             <Unde-10 />

            <!-- /** MARKETPLACE & CONNECT **/ -->
             <Marketplace-Connect />

            <!-- /** MARKETPLACE Text CONNECT **/ -->
             <Marketplace-Text-Connect />

            <!-- /** QUICK LINKS **/ -->
             <Quick-Links />
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
import OurBlog from '@/components/Home/_Our_Blog'
import Unde10 from '@/components/Home/_Under_$10'
import MarketplaceConnect from '@/components/Home/_Marketplace'
import MarketplaceTextConnect from '@/components/Home/_Marketplace_Text'
import QuickLinks from '@/components/Home/_Quick_Links'

export default {
    components: {
        SliderTop,
        FlashSale,
        BlockContent,
        SaleList,
        RowImgs,
        RecommendedList,
        HomeAppliance,
        OurBlog,
        Unde10,
        MarketplaceConnect,
        MarketplaceTextConnect,
        QuickLinks
    }
}
</script>
