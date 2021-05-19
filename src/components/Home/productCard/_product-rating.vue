<template>
    <div class="card-rating">
        <Product-Rate :rating="rate"/>
    </div>
</template>

<script>

import ProductRate from '@/components/Home/_Product-Rate'
export default {
    props:["rate"],
    components:{ProductRate},
}
</script>