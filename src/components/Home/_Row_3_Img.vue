<template>
    <div class="row_img_banner mb-5r">
        <div class="container">
            <div class="row">
                <Row-Content v-for="imgs in bannetData" :key="imgs.id" :img="imgs.img"/>
            </div>     
        </div>      
    </div>
</template>

<script>
import RowContent from '@/components/Home/row3Img/_row_content.vue'

import BannerJson from '../../assets/models/Home/ImgBanner/BannerImg.json'

export default {
    data() {
        return {
            bannetData: BannerJson,
        }
    },
    components: {RowContent}
}
</script>

<style lang="scss" scoped>
    .row_img_banner{
        .container{
            @extend %queryCONTAINER;
        }
    }
</style>

