<template>
    <div class="block_content">
        <div class="tab-content">
            <div class="nov-productslick spacing-30">
                <div class="tab-pane fade active">
                    <div class="slick-container">
                        <OwlCarousel
                                :dots="true"
                                :nav="false"
                                :autoWidth="true">
                                    <Product-card />

                                    <Product-card />

                                    <Product-card />
                                    <Product-card />

                                    <Product-card />

                                    <Product-card />
                                    <Product-card />

                                    <Product-card />

                                    <Product-card />
                                    <Product-card />

                                    <Product-card />

                                    <Product-card />
                        </OwlCarousel>
                    </div>
                </div>
                <div class="tab-pane fade">
                    
                </div>
            </div>
        </div>
    </div>
</template>

<script>

import ProductCard from '@/components/Home/_Product_Card';

export default {
    components: {ProductCard}
}
</script>

<style lang="scss" scoped>

.dataList{
    overflow: hidden;
    
    .nov-productslick{
        margin-top: 65px;
        
        
        > .tab-pane {
            // display: block;
            // visibility: hidden;
            // width: 100%;
            // height: auto;
            // &:first-child {
            //     display: none;
            // }
            &.active{
                visibility: visible;
                filter: alpha(opacity=100);
                -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)";
                -webkit-opacity: 1;
                -moz-opacity: 1;
                -ms-opacity: 1;
                -o-opacity: 1;
                opacity: 1;
                display: contents !important;
            }
            
        }
    }
}

</style>