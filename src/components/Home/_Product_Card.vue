<template>
    <Product-Card-Content
     :id="_id?`${_id+'-'+tryHash}`:`product-card-`+tryHash"
     :cardClass="cardClass?cardClass:''"
     :cardTitle="cardData.title"
     :img_1="cardData.img_1"
     :img_2="cardData.img_2"
     :_new="cardData.new"
     :sale="cardData.sale"
     :price="cardData.price"
     :vendor="cardData.vendor"
     :rating="cardData.rate"
     :reviews="cardData.views"
     :cropTitle="cropT"
     />
</template>

<script>
import ProductCardContent from '@/components/Home/productCard/_block_content_card';
import helperFun from '@/Helpers/Helper.js'

export default {
    props: ["_id","cardClass","cardData","cropT"],
    data() {
        return {
            tryHash : helperFun.hashId(this.cardData.id),
        }
    },
    methods: {
        hashFun: helperFun.hashId,
    },
    created(){
        
    },
    components: {ProductCardContent}
}
</script>