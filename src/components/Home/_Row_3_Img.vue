<template>
    <div class="row_img_banner">
        <!-- <div class="container"> -->
            <div class="row">
                <Row-Content v-for="imgs in bannetData" :key="imgs.id" :img="imgs.img"
                    data-aos="zoom-in-center" data-aos-once="true" data-aos-duration="1500" data-aos-anchor-placement="top-bottom"
                />
            </div>     
        <!-- </div>   -->
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

