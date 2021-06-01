<template>
    <div class="block_content">
        <div class="row">
            <div class="under-badge col-xl-2 col-lg-3 col-md-4 col-sm-5 col-sm-4 wpb_column column_container">
                <router-link to="/" class="banner-special">
                    <img src="../../../assets/images/Home/under-$10/banner-2.jpg" alt="banner-under-10" class="img-max image">
                </router-link>
            </div>
            <div class="list-content col-lg-9 col-md-8 col-sm-7">
                <div class=" nov-productslick product_list grid spacing-15 slick-initialized slick-slider">

                    <OwlCarousel
                        :dots="false"
                        :nav="false"
                        :autoWidth="true"
                    >
                        <Product-card v-for="cardData in under10" :key="cardData.id" :cardData="cardData" :cropT="20" :class="'mr-5'"/>
                        
                        <!-- <View-More :img="'Home/under-$10/banner-2.jpg'"/> -->
                    
                    </OwlCarousel>
                    
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import jsonData from '../../../assets/models/Home/list-content/list-content.json'
import ProductCard from '@/components/Home/_Product_Card';
// import ViewMore from '@/components/Home/_View_more';

export default {
    data() {
        return {
            listDataCard: jsonData,
        }
    },
    components: {ProductCard},
    computed:{
        under10: function(){
            var items = this.listDataCard.filter(i=>Math.round(i.price)<=10);
            return items;
        }
    }
}
</script>

<style lang="scss" scoped>
.Under-10{
    .block_content{
        .banner-special{
            @extend %banner-special;
        }
        .product-card.item{
            width: 190px !important;
        }
    }
}

</style>