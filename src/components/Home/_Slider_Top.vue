<template>
    <div class="row row wpb_row row-fluid  slider-top mt-15 mb-0 hidden">
        <div class="col-sm-2 col-lg-2 hidden-md hidden-sm idden-xs mr-0 mt-15 wpb_column column_container">
    		<div class="column-inner ">
	    		<div class="wpb_wrapper"></div>
            </div> 
        </div>
        <div class="col-sm-6 col-lg-6 col-md-6 pl-0 pl-lg-15 pl-15 pr-15 pr-lg-0 pr-xs-15 wpb_column column_container">    
            <top-Carousel />
        </div>
        <div class="_slider_next col-sm-6 col-lg-6 col-xl-4 col-md-6 pl-0 mb-0 pl-lg-15 wpb_column column_container">
            <slider-Next-Img />
        </div>
    </div>
</template>

<script>
import topCarousel from '@/components/Home/sliderTop/_Carousel.vue';
import sliderNextImg from '@/components/Home/sliderTop/_slider_next_Imgs.vue';
export default {
    components: {
        topCarousel,
        sliderNextImg
    }
}
</script>

<style lang="scss" scoped>
    .HomePage-container{
        .slider-top{
            position: relative;
            left: 0px;
            box-sizing: border-box;
            width: auto;
            padding-left: 0px;
            padding-right: 0px;
            > .pl-15{
                @media screen and (min-width: $minWidth) {
                    padding-left: 0 !important;
                }
            }
        }
    }
</style>