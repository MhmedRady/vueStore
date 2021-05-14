<template>
    <Product-Card-Content
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
export default {
    props: ["cardData"],
    components: {ProductCardContent}
}
</script>