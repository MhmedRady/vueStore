<template>
    <div id="marketplace-counter" class="marketplace col-sm-12 col-xl-6 col-12 mb-30 wpb_column vc_column_container">
        <div class="column-inner back-cover">
            <div class="wpb_wrapper">
                <div class="custom_heading wpb_content_element">
                    <h2>
                        Our Marketplace
                    </h2>
                </div>
                <div class="wpb_text_column wpb_content_element mb-3r">
                    <div class="wpb_wrapper">
                        <p>
                            <span>Nuranium Marketplace</span>
                             unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aper iam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit sed quia consequuntur magni dolores eos.
                        </p>
                    </div>
                </div>
                <div class="row wpb_row row-fluid  mb-40 number-counter">
                    
                    <div class="col-md-6 col-sm-6 col-6 wpb_column vc_column_container">
                        <div class="vc_column-inner ">
                            <div class="wpb_wrapper">

                                <div class="nav-count-number mb-2r">
                                    <div class="block-count-number clearfix">
                                        <div class="number increment-counter mt-5 d-flex"
                                        data-count="14000">
                                            0
                                        </div>
                                        <div class="title">
                                            products
                                        </div>
                                    </div>
                                </div>

                                <div class="nav-count-number">
                                    <div class="block-count-number clearfix">
                                        <div class="number increment-counter mt-5 d-flex"
                                        data-count="5500">
                                            0
                                        </div>
                                        <div class="title">
                                            customers
                                        </div>
                                    </div>
                                </div>
                                
                            </div>
                        </div>
                    </div>

                    <div class="col-md-6 col-sm-6 col-6 wpb_column vc_column_container">
                        <div class="vc_column-inner ">
                            <div class="wpb_wrapper">

                                <div class="nav-count-number mb-2r">
                                    <div class="block-count-number clearfix">
                                        <div class="number increment-counter mt-5 d-flex"
                                        data-count="180200">
                                            0
                                        </div>
                                        <div class="title">
                                            products were sold
                                        </div>
                                    </div>
                                </div>

                                <div class="nav-count-number">
                                    <div class="block-count-number clearfix">
                                        <div class="number increment-counter mt-5 d-flex"
                                        data-count="300">
                                            0
                                        </div>
                                        <div class="title">
                                            sellers
                                        </div>
                                    </div>
                                </div>
                                
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>
</template>

<script>
import helperFun from '../../../layout/js/helper'
    export default {
        
        mounted() {
            
            var MP = document.querySelector("#marketplace-counter").offsetTop;
                document.addEventListener("scroll",function(){
                    var windowScroll = window.scrollY;
                
                    if (windowScroll > MP) {
                        helperFun.autoCounter();                
                    }
                });
        },

    }
</script>

<style lang="scss" scoped>
    .marketplace{
        .column-inner{
            background-image: url("../../../assets/images/Home/marketplace/marketplace.jpg");
            background-size: cover;
            padding: 50px 70px 70px 50px;
            @media screen and(min-width: $minWidth) and (max-width: 1439px) {
                padding: 50px 70px 38px 50px;
            }
            @media screen and(max-width: $maxMobile){
                padding: 20px 20px 20px 20px;
            }
            .custom_heading h2{
                position: relative;
                padding-right: 30px;
                position: relative;
                background: none;
                line-height: 1 !important;
                padding-left: 0;
                &::before{
                    content: "";
                    background: rgba(255,255,255,.1);
                    width: calc(100% - 240px);
                    height: 6px;
                    position: absolute;
                    top: 10px;
                    padding-right: 30px;
                    right: 0;
                }                
            }
            .wpb_text_column{
                p{
                    @include fontSize;
                    @include f-F;
                    color: $f;
                    text-align: $textAlign;
                    span{
                        text-transform: capitalize;
                        color: $WebGrn;
                    }
                }
            }
            .number-counter{
                .nav-count-number {
                    text-align: $textAlign;
                    .number{
                        position: relative;
                        @include f-F(PopB);
                        @include fontSize(2);
                        color: $f;
                        
                        &::after{
                            @include MIcon('\e145',2);
                        }
                        @media screen and(max-width: $maxMobile){
                            @include fontSize(1.5);
                            &::after{
                                @include fontSize(1.5);
                            }   
                        }
                    }
                    .title{
                        color: $WebGrn;
                        text-transform: uppercase;
                        @include f-F(PopB);
                        @include fontSize(.7);
                    }
                }
            }
        }
    }
</style>