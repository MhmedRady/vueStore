<template>

    <div class="our-brands">
        <div class="custom_heading wpb_content_element mt-35">
            <h2>our brands</h2>
        </div>
        <div class="group_image_text">
            <div class="block_content clearfix">
                <div class="row no-flow spacing-5">
                    
                    <div v-for="brand in brands" :key="brand.id"  class="col-xl-6 col-lg-6 col-md-6 col-xs-12 mb-5">
                        <div :class="`pos-r item ${brand.id%2==0? 'r-05r' :'l-05r'}`">
                            <a href="#">
                                <span>
                                    <img :src="require(`../../../assets/images/Home/recommended-list/brand-images/${brand.img}`)" alt="">
                                </span>
                            </a>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>

</template>

<script>
import brandJson from '../../../assets/models/Home/recommended/ourBrands.json'

export default {
    data() {
        return {
            brands: brandJson,
        }
    },
}
</script>

<style lang="scss" scoped>
    .our-brands{
        h2{
            @include fontSize(20,px);
            color: $f;
            text-align: $textAlign;
            @include f-F(PopB);
            font-weight: 700;
            font-style: normal;
        }
        .group_image_text{
            background: #fff;
            .row{
                >div{
                    @media screen and(max-width: $minIpad){
                        &:not(:last-of-type){
                            border-bottom: 1px solid $liBorder;
                        }
                    }
                }
            }
            .item {

                height: 82px;
                border: none;
                line-height: 80px;
                @media screen and(max-width: $maxMobile){
                    left: 0;
                    right: 0;
                        
                    &:last-of-type{
                        border: none;
                    }
                    span{
                        max-width: 30%;
                    }
                }
                @media screen and (min-width:$maxIphone) {
                    span{
                        max-width: 50%;
                    }
                }
                @media screen and (min-width:$minIpad) {
                    span{
                        max-width: 100%;
                    }
                }
                img{
                    transform: scale(1.1);
                }

            }
        }
    }
</style>