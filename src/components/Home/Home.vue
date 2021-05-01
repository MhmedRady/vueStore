<template>
    <div class="HomePage-container">
        <div class="home-1-edit">
            <!-- /** TOP SLIDER AND NEXT **/ -->
            <slider-Top />

            <!-- /** TOP FLASH SALE **/ -->
            <flash-Sale />
        </div>
    </div>
</template>

<script>
import SliderTop from '@/components/Home/_Slider_Top.vue';
import FlashSale from '@/components/Home/_Flash_Sale.vue';
export default {
    components: {
        SliderTop,
        FlashSale
    }
}
</script>
