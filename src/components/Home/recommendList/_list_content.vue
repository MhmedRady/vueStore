<template>
    <div :id="`recom-tab-link-${parent}`" :class="`tab-pane fade ${id==1?`show active`:``}`">
        <div class="slick-container">
            <SlickCarousel
                :touchMove="false"
                :autoplay="false"
                :dots="false"
                :arrows="false"
                :swipeToSlide="true"
                :rows="1"
                > 
                <div class="row spacing-15">
                    <P-Card v-for="card in parentItems" :key="card.id" :_id="`recomm-item`" :cardClass="'col-md-4 col-lg-3'" :cropT="20" :cardData="card" />
                </div>
            </SlickCarousel>
        </div>
    </div>
</template>

<script>
import PCard from '@/components/Home/_Product_Card';

export default {
    props: ["id","parent","cardContent"],
    created() {
        // console.log("cardContent => " + this.cardContent)
        this.parentItems;
    },
    computed:{
        parentItems: function(){
            var items = this.cardContent.filter(i=>i.parent==this.parent)
            return items;
        }
    },
    components:{PCard}

}
</script>

<style lang="scss" scoped>
    #recom-content{
        .product-card{
            // display: none !important;
            width: 16.3% ;
            margin-left: 2px;
            margin-right: 2px;
            @media screen and(max-width: $ipad10Pro) and(min-width: $minIpad10Pro){
                width: 50%;
                margin: 0;
            }
            @media screen and(max-width: $minIpad) {
                width: 50%;
                margin: 0;
                .product-comment{
                    font-size: 0.71rem !important;
                }
            }
        }
    }
</style>