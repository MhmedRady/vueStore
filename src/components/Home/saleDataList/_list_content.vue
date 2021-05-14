<template>
    <div class="block_content">
        <div class="tab-content">
            <div class="nov-productslick spacing-30">
                
                <div id="New-tab" class="tab-pane fade active" role="tabpanel" aria-labelledby="sale-home-list">
                    <div v-if="listDataCard.length > 0" class="slick-container">
                        <OwlCarousel
                            :dots="false"
                            :nav="false"
                            :autoWidth="true">

                                <Product-card v-for="cardData in listDataCard" :key="cardData.id" :cardData="cardData" />
                        
                        </OwlCarousel>
                    </div>
                    <BSalert v-else :msg="'No products at this time !.'" />
                </div>
                
                <div id="Best-tab" class="tab-pane fade" role="tabpanel" aria-labelledby="sale-home-list">
                    <BSalert :msg="'No products at this time !.'"/>
                </div>

                <div id="noSale-tab" class="tab-pane fade" role="tabpanel" aria-labelledby="sale-home-list">
                    <div v-if="onSales.length > 0" class="slick-container">
                        <OwlCarousel
                            :dots="false"
                            :nav="false"
                            :autoWidth="true">

                                <Product-card v-for="onSale in onSales" :key="onSale.id" :cardData="onSale" />

                        </OwlCarousel>
                    </div>
                    <BSalert v-else :msg="'No Product in sale'" />
                </div>

            </div>
        </div>
    </div>
</template>

<script>

import ProductCard from '@/components/Home/_Product_Card';
import BSalert from '@/components/Home/_BS_Alert.vue'

import jsonData from '../../../assets/models/dataList/dataList.json'

export default {
    data() {
        return {
            listDataCard: jsonData,
        }
    },
    components: {ProductCard,BSalert},
    
    computed: {
        onSales: function(){
            var data = this.listDataCard.filter(i=>i.sale!="0");
                console.log(data);
                console.log("on Sale length => " + data.length);
            return data;
        }
    },
    created() {
        console.log(this.listDataCard.length);
    },
}
</script>

<style lang="scss" scoped>

.dataList{
    overflow: hidden;
    
    .nov-productslick{
        margin-top: 65px;
        
        
        > .tab-pane {
            // display: block;
            // visibility: hidden;
            // width: 100%;
            // height: auto;
            // &:first-child {
            //     display: none;
            // }
            &.active{
                visibility: visible;
                filter: alpha(opacity=100);
                -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)";
                -webkit-opacity: 1;
                -moz-opacity: 1;
                -ms-opacity: 1;
                -o-opacity: 1;
                opacity: 1;
                display: contents !important;
            }
            
        }
    }
}

</style>