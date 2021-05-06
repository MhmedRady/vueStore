<template>
    <div class="container">
        <div class="row flex-nowrap">
            <div class="col-12 pr-0 item">
                <div class="item stick-item">
                    <b-card no-body class="overflow-hidden" style="max-width: 540px;">
                        <b-row no-gutters>
                        <b-col md="6" class="thumbnail-container">
                            <a href="#" class="thumbnail product-thumbnail two-image">
                                <b-card-img :src="require(`../../../assets/images/flash-sale/${img1}`)" alt="Image" class="rounded-0 p-20 img-fluid image-cover"></b-card-img>
                                <b-card-img :src="require(`../../../assets/images/flash-sale/${img2}`)" alt="Image" class="rounded-0 p-20 img-fluid image-secondary image-back"></b-card-img>
                            </a>
                        </b-col>
                        <b-col md="6">
                            <b-card-body class="p-0 pt-15">
                                <b-card-title>
                                <div class="product-title d-ruby">
                                    <a href="#">
                                        {{Title}}
                                    </a>
                                </div>
                            </b-card-title>
                            <b-card-sub-title class="mb-2">
                            <div class="quantity">
                                <i class="material-icons">local_offer</i>
                                    {{stock}} <span>items in stock</span>
                            </div>    
                            </b-card-sub-title>   
                            <b-card-text text-tag="div">
                                <div class="product-group-price">
                                    <div class="product-price-and-shipping">
                                        <span itemprop="price" class="price">{{cost}}</span>
                                        <span class="regular-price">{{sale}}</span>                     
                                    </div>                                      
                                </div>
                                <div class="product-groups" itemprop="offers" itemtype="http://schema">
                                    <div class="product-buttons d-flex">
                                        <form action="" method="post">
                                            <input type="hidden" name="_token">
                                            <input type="hidden" name="product_id" :value="iId"> 
                                            <input type="hidden">

                                            <a href="#" class="add-to-cart show_popup has-text align-self-center">
                                                <span class="loading">
                                                    <i class="fa fa-spinner fa-spin"></i>
                                                </span>
                                                <i class="icon-cart"></i>
                                            </a>
                                            <a class="addToWishlist" href="#" data-rel="50" tabindex="0">
                                                <i class="material-icons">favorite_border</i>
                                            </a>
                                            <a href="#" class="quick-view hidden-sm-down pt-bt"
                                                data-link-action="quickview" tabindex="0">
                                                <i class="material-icons">search</i>
                                            </a>
                                        </form>
                                    </div>
                                </div>
                                
                            </b-card-text>
                            
                            </b-card-body>
                        </b-col>
                        </b-row>
                        <b-list-group class="n-b m-auto" flush>
                            <b-list-group-item class="pb-0 pt-0">
                                <div class="mt-auto">
                                    <countdown-Offer :date="date" :iId="iId"/>
                                </div>
                            </b-list-group-item>
                        </b-list-group>
                        <template >
                            <em class="pr-20 pl-20">
                                <div class="title-seller d-flex align-items-center">
                                    <a href="#">
                                        <span class="p-item d-flex align-items-center">
                                            <i class="material-icons pr-6">storefront</i>
                                            {{vendor}}
                                        </span>
                                    </a>
                                    <product-Rarting :rate="rate" :iId="iId"/>
                                </div>
                                
                            </em>
                        </template>
                    </b-card>
                </div>        
            </div>
        </div>
    </div>
</template>

<script>
import countdownOffer from '@/components/Home/_Counter-Offer'
import productRarting from '@/components/Home/_Product-Rate'

export default {
    props: ["Title","img1","img2","stock","cost","sale","vendor","rate","date","iId"],
    
    components:{countdownOffer, productRarting}
}

</script>

<style lang="scss" scope>
    .item{
        .stick-item{
            @media screen and(min-width: $maxMobile) {
                width: 360px;
            }
            .p-0.pt-15{
                padding-top: 15px !important;
            }
            padding: 10px 5px;
            overflow: hidden;
            &::before{
                content: "";
                width: 52px;
                height: 52px;
                background-image: url("../../../assets/svg/flash-sale/before.png");
                position: absolute;
                top: 5px;
                left: 15px;
                z-index: 1;
            }
            a{
                color: #666;
            }
            .product-title {
                margin-bottom: 17px;
                padding-top: 5px;
                font-family: Pop;
                font-weight: 600;
                @include fontSize(.71);
                margin-bottom: 11px;
                a {
                    display: block;
                    line-height: 1.5;
                    &:hover{
                        color: $Grn;
                    }
                }
            }
            .quantity{
                font-family: PopB;
                padding-top: 4px;
                font-size: 11px;
                color: $subColor;

                i{
                    font-size: 14px;
                }
                span {
                    padding-left: 5px;
                }
            }
            .product-group-price{
                padding-top: 5px;
                .price {
                    font-size: 18px;
                    color: $WebGrn;
                    font-family: PopB;
                }
                .regular-price {
                    font-weight: 700;
                    font-size: 0.8rem;
                    color: $subColor;
                    margin-left: 10px;
                    text-decoration: line-through;
                    font-family: PopB;
                }   
            }
            .product-groups{
                // margin-top: 5px;
                visibility: hidden;
                filter: alpha(opacity=0);
                -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=0)";
                -webkit-opacity: 0;
                -moz-opacity: 0;
                -ms-opacity: 0;
                -o-opacity: 0;
                opacity: 0;
                -webkit-transform: translateX(30px);
                -ms-transform: translateX(30px);
                transform: translateX(30px);
                -webkit-transition: all 0.3s linear;
                -moz-transition: all 0.3s linear;
                -ms-transition: all 0.3s linear;
                -o-transition: all 0.3s linear;
                transition: all 0.3s linear;
                .add-to-cart{
                    .icon-cart{
                        background-image: url(../../../assets/svg/cart-icon.png);
                    }
                    .icon-cart{
                        background-position: -126px 0;
                    }
                    &:hover{
                        .icon-cart {
                            background-position: -158px 0;
                        }
                            
                    }
                }
            }
            .two-image{
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
                    @include opacity(0);
                    -webkit-transition: all 0.6s linear;
                    -moz-transition: all 0.6s linear;
                    -ms-transition: all 0.6s linear;
                    -o-transition: all 0.6s linear;
                    transition: all 0.6s linear;
                    margin: 0 auto;
                }
            }
            &:hover{
                .product-groups{
                    visibility: visible;
                    filter: alpha(opacity=100);
                    -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)";
                    -webkit-opacity: 1;
                    -moz-opacity: 1;
                    -ms-opacity: 1;
                    -o-opacity: 1;
                    opacity: 1;
                    -webkit-transform: translateX(0);
                    -ms-transform: translateX(0);
                    transform: translateX(0);
                }
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
                        filter: alpha(opacity=100);
                        -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)";
                        @include opacity(1);
                        opacity: 1;
                    } 
                }
                        
            }
            .title-seller {
                min-height: 45px;
                overflow: hidden;
                padding-left: 0;
                margin-top: 5px;
            }
            a{
                display: inline-block;
                position: relative;
            }
            > a{
                &::before {
                content: "";
                border: 1px solid #fff;
                position: absolute;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
            }
            }
            .thumbnail-container{
                position: relativer;
            }
            @media screen and(min-width: $minWidth) {
                .thumbnail-container {
                    -webkit-flex: 0 0 47.288%;
                    -ms-flex: 0 0 47.288%;
                    flex: 0 0 47.288%;
                    max-width: 47.288%;
                }
            }
        }

    }</style>
