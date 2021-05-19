<template>
    <Product-Card-Content
     :id="_id?`${_id+'-'+cardData.id}`:'product-card'"
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
     />
</template>

<script>
import ProductCardContent from '@/components/Home/productCard/_block_content_card';
// import helper from '../../layout/js/helper'

export default {
    props: ["_id","cardClass","cardData"],
    data() {
        return {
            // tryHash : helper.cyrb53(this.cardData.id),
        }
    },
    created(){
        // console.log("product card"+this.tryHash);
    },
    components: {ProductCardContent}
}
</script>