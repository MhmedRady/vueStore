<template>
    <div class="slick-content wpb_wrapper">
        <div class="nov-productdeals type-slider-1 mt-11 mb-11">
            <div class="block-product clearfix">
                <div class="block_content">
                    
                        <div class="slick-container">
                            <!-- <div class="row flex-nowrap"> -->
                            <OwlCarousel
                                :dots="true"
                                :nav="false"
                                :autoWidth="true"
                                >
                                <slick-item v-for="slickItem in slickItems" :key="slickItem.id"
                                    :Title="slickItem.title"
                                    :img1="slickItem.img_1"
                                    :img2="slickItem.img_2"
                                    :stock="slickItem.tag_stock"
                                    :cost="slickItem.price"
                                    :sale="slickItem.sale"
                                    :vendor="slickItem.vendor"
                                    :rate="slickItem.rate"
                                    :date="slickItem.date" 
                                    :iId="slickItem.id"/>
                            </OwlCarousel>
                            <!-- </div> -->
                        </div>        
                            
                    
                    <!-- <SlickCarousel 
                    :arrows="false" 
                    :dots="false"
                    :swipeToSlide="true"
                    :slidesToShow= "1"
                    :slidesToScroll="1"
                    :swipe="true"
                    :focusOnSelect="true"
                    :autoplay="true"
                    >
                        <div class="slick-container">
                            <div class="row flex-nowrap">
                                
                                <slick-item v-for="slickItem in slickItems" :key="slickItem.id"
                                    :Title="slickItem.title"
                                    :img1="slickItem.img_1"
                                    :img2="slickItem.img_2"
                                    :stock="slickItem.tag_stock"
                                    :cost="slickItem.price"
                                    :sale="slickItem.sale"
                                    :vendor="slickItem.vendor"
                                    :date="slickItem.date" 
                                    :iId="slickItem.id"/>
                                
                            </div>
                        </div>
                    </SlickCarousel> -->
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import slickItem from '@/components/Home/flashSale/_slick_Item'
import slickItemJson from '../../../assets/models/Home/flashSale/flashSale.json'
export default {
    data() {
        return {
            slickItems: slickItemJson,
        }
    },
    components:{slickItem}
}
</script>


