<template> 
    <div :id="`homeApp-tap-${hashFun(parent)}`" :class="`tab-content fade ${index==0?'show active':''}`">
        
        <OwlCarousel
            :dots="false"
            :nav="false"
            :autoWidth="true">

                <Product-card v-for="cardData in cardParent" :key="cardData.id" :cardData="cardData" class="col-md-11 col-11" />

        </OwlCarousel>
    </div>

</template>

<script>
import helperFun from '@/Helpers/Helper.js'

import ProductCard from '@/components/Home/_Product_Card';


export default {
    props:["id","index","parent","listCard"],
    data() {
        return {
            listDataCard: this.listCard,
        }
    },
    methods: {
        hashFun: helperFun.hashId,
    },
    computed:{
        cardParent:function () {
            var data = this.listCard.filter(i=>i.parent==this.parent);
            return data;
        }
    },
    components:{ProductCard},
}
</script>
