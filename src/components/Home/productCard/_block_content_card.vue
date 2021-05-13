<template>
<!-- <div class="slick-container"> -->
    <!-- <div class="raw flex-nowrap"> -->
        <div class="item col- pl-xs-5 pr-xs-5 pt-5 mb-30 slick-slide slick-current slick-active">
            <div class="product-miniature js-product-miniature item-one lupanh first_item">
                <div class="thumbnail-container nov-productdeals">
                    <!-- <b-card-group> -->
                    
                        <b-card class="rounded-0 p-0" img-top>

                            <a href="#" class="two-image">
                                <b-card-img-lazy :src="require(`../../../assets/images/data-list/list-content/suspeised-eleifend-velitee.jpg`)" class="xh-n rounded-0 p-5 img-fluid image-cover"></b-card-img-lazy>
                                <b-card-img-lazy :src="require(`../../../assets/images/data-list/list-content/_suspeised-eleifend-velitee.jpg`)" class="xh-n rounded-0 p-5 img-fluid image-secondary image-cover"></b-card-img-lazy>
                                <span class="product-flags discount">-20%</span>
                                <span class="product-flags new">New</span>
                                <div class="button-top">
                                    <a href="#" class="addToWishlist">
                                        <i class="material-icons">favorite_border</i>
                                    </a>
                                    <a href="#" class="quick-view hidden-sm-down pt-bt">
                                        <i class="material-icons">preview</i>
                                    </a>
                                </div>
                            </a>
                            
                            <b-card-text class="p-15">
                                
                                <b-card-title>
                                    <h5><a href="#">name</a></h5>
                                </b-card-title>
                                <div class="product-group-price">
                                    <span itemprop="price" class="price">£789.00</span>
                                </div>

                                <div class="product-comment row text-center m-auto">
                                    <Rarting :rate="rate" :iId="iId"/>
                                    <span class="ml-30">0 Reviews</span>
                                </div>
                                <a class="addToCart" href="#">
                                    <i class="icon-cart"></i>
                                    <span>add to cart</span>
                                </a>
                            </b-card-text>

                            <b-card-footer>
                                <Vendor />
                            </b-card-footer>
                        </b-card>

                    <!-- <b-card-group> -->
                </div>
                        
            </div>
        <!-- </div> -->
    </div>
<!-- </div> -->
</template>

<script>

import Rarting from '@/components/Home/productCard/_product-rating';
import Vendor from '@/components/Home/productCard/_product-vendor'

export default {
    components:{Rarting,Vendor}
}
</script>

<style lang="scss" scoped>
    .block_content_card{
        .tab-content{
            .item{
                width:230px !important;
                &:not(:last-child){
                    margin-#{$right}: 15px;
                }
                &:first-of-type{
                    margin-#{$left}: 15px;
                }
            }
            .product-miniature{
                position: relative;
                overflow: hidden;
                background-color: $f;
                @include transition(.5,linear);
                margin-bottom: 30px;
                border: 1px solid #eaeaea;
                margin-bottom: 0;
                &:hover{
                    @include BShadow(0 0 20px 0 rgba(0,0,0,.15));
                }
                .card{
                    .card-body{
                        padding: 0 !important;
                    .product-flags{
                        position: absolute;
                        top: 15px;
                        min-width: 48px;
                        height: 20px;
                        -moz-border-radius-topright: 8px;
                        -webkit-border-top-right-radius: 8px;
                        border-top-right-radius: 8px;
                        -moz-border-radius-bottomleft: 8px;
                        -webkit-border-bottom-left-radius: 8px;
                        border-bottom-left-radius: 8px;
                        color: $f;
                        text-align: center;
                        line-height: 20px;
                        font-size: 10px;
                        font-weight: 700;
                        text-transform: uppercase;
                        @include f-F;
                        box-shadow: 2px 5px 2px 0px #2226;
                        &.new{
                            left: 10px;
                            background: $Grn;
                            top: 10px !important;
                        }
                        &.discount{
                            left: 10px;
                            background: $w_red;
                            top: 40px !important;
                        }
                    }
                    .two-image
                    {
                        .image-secondary {
                            // display: none;
                            position: absolute;
                            overflow: hidden;
                            bottom: 0;
                            left: 0;
                            right: 0;
                            top: 0;
                            filter: alpha(opacity=0);
                            -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=0)";
                            @include opacity(0,1);
                            -webkit-transition: all 0.6s linear;
                            -moz-transition: all 0.6s linear;
                            -ms-transition: all 0.6s linear;
                            -o-transition: all 0.6s linear;
                            transition: all 0.6s linear;
                            margin: 0 auto;
                        }
                    }
                    .card-text{
                        .card-title{
                            @include f-F(PopB);
                            text-align: $textAlign;
                            a{
                                @include fontSize;
                                &:hover{
                                    color: $WebGrn;
                                }
                            }
                        }
                        .product-group-price{
                            text-align: $textAlign;
                            @include f-F(PopB);
                            span{
                                color: $w_red;
                                @include fontSize;
                            }
                        }
                    }
                        
                }
                .product-comment{
                    @include fontSize(.75);
                    >span{
                        @include f-F;
                        color: $subColor;
                        line-height: 2.2;
                        display: block;
                    }
                }
            }
            .button-top {
                margin-right: 10px;
                padding-top: 10px;
                padding-bottom: 10px;
                position: absolute;
                text-align: center;
                right: 0;
                left: 0;
                margin-top: -50px;
                
                .addToWishlist,.quick-view {
                    background-color: $f;
                    text-align: center;
                    margin: 0px 10px;
                    border-radius: 2px;
                    transform: translateY(30px);
                    width: 35px;
                    height: 30px;
                    visibility: hidden;
                    opacity: 0;
                    @include BShadow(2px 2px 5px 0px #1114);
                    @include transition;
                    
                    i{
                        color: #727272;
                        font-size: 1.1rem;
                    }
                    &:hover{
                        background-color: $WebGrn;
                        i{
                            color: $f;
                        }
                    }
                }
                .addToWishlist{
                    @include transition(.75);
                }
            }
            .addToCart{
                position: absolute;
                text-align: center;
                width: 100%;
                right: 0;
                padding: 10px;
                margin-top: -35px;
                background-color: #444;
                z-index: 1;
                visibility: hidden;
                opacity: 0;
                @include transform(translateY(30px));
                @include transition;

                .icon-cart{
                    display: inline-block;
                    width: 10px;
                    height: 12px;
                    margin-right: 10px;
                    background-position: -142px 0;
                    background-repeat: no-repeat;
                    vertical-align: middle;
                    background-image: url(../../../assets/svg/cart-icon.png);
                }
                span{
                    color: $f;
                    @include fontSize(0.7);
                    @include f-F(PopB);
                    margin-bottom: 5px;
                    text-transform: uppercase;
                }
                &:hover{
                    background-color: $WebGrn;
                    span,i{
                        color: $f;
                    }
                }
            }
            &:hover{
                .two-image
                    {
                    .image-cover{
                        // display: none;
                        filter: alpha(opacity=0);
                        -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=0)";
                        -webkit-opacity: 0;
                        -moz-opacity: 0;
                        -ms-opacity: 0;
                        -o-opacity: 0;
                        opacity: 0;
                        }
                    .image-secondary{
                        // display: block;
                        filter: alpha(opacity=100) !important;
                        -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)"!important;
                        @include opacity(1);
                    }
                    
                }
                .button-top {
                    .addToWishlist,.quick-view{
                        @include returnC();
                    }
                }
                .addToCart{
                    @include returnC();
                }
            }
            .image-cover{
                max-height: 150px;
                min-width: 150px;
            }
            } 
    
        }
    }
    

</style>