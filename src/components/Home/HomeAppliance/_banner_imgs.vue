<template>
    <div class="category-banner row mt-2r">
        <div data-aos="zoom-in-right" data-aos-once="true" data-aos-duration="1500" data-aos-anchor-placement="top-bottom" v-for="bannerImg in BannerImgs" :key="bannerImg.id" class="col-md-4 mb-1r">
            <div class="banner1">
                <a href="#" class="img">
                    <img class="img-max image" :src="require(`../../../assets/images/Home/home-app/${bannerImg.img}`)" alt="">
                </a>
            </div>
        </div>
    </div>
</template>

<script>
import bannerJson from '../../../assets/models/Home/homeAppliance/banner-imgs.json'
export default {
    data() {
        return {
            BannerImgs: bannerJson
        }
    },
}
</script>

<style lang="scss" scoped>
    .category-banner{
        .banner1{
            @extend  %wpb_wrapper-2;
        }
    }
</style>

