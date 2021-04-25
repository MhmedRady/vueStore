<template>
<div class="stickymenu-item col">
    <div id="_mobile_cart_bottom" class="nov-toggle-page" data-target="#mobile-blockcart">
        <div class="blockcart cart-preview">
            <div class="header-cart">
                <div class="cart-left">
                    <span class="shopping-cart"></span>
                </div>
                <div class="cart-right">
                    <span class="title-cart title_icon">
                        My Cart
                    </span>
                </div>
                <span class="cart-products-count">0</span>
            </div>
            <div class="cart_block">
                <div class="cart-block-content">
                    <div class="no-items">No products in the cart</div>
                </div>
            </div>
        </div>
    </div>
</div>
    
</template>

<style lang="scss" scoped>
    .stickymenu-item{
        .blockcart {
            position: relative;
            @media screen and(max-width: $maxMobile) {
                width: 70px;
                margin: auto;
            }
            .header-cart {
                text-align: center;
                cursor: pointer;
                @media screen and(max-width: $maxMobile){
                    -webkit-flex-direction: column;
                    -moz-flex-direction: column;
                    -ms-flex-direction: column;
                    flex-direction: column;
                    position: relative;
                    -webkit-align-items: center;
                    -moz-align-items: center;
                    -ms-align-items: center;
                    align-items: center;
                    margin-bottom: 4px;
                    
                    .shopping-cart{
                        font-size: 0;
                        background-size: contain;
                        width: 18px;
                        height: 18px;
                        margin: 0 auto;
                        background-image: url(../../../assets/svg/nav/cart.png);
                    }
                    .cart-right {
                        margin-left: 0 !important;
                        margin-top: 5px;
                        align-self: center !important;
                        padding: 0;
                        display: block !important;

                        span{
                            color: #505050;
                        }
                    }
                }
            }
            .cart_block{
                position: absolute;
                top: 100%;
                right: 0;
                z-index: 100;
                visibility: hidden;
                filter: alpha(opacity=0);
                -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=0)";
                -webkit-opacity: 0;
                -moz-opacity: 0;
                -ms-opacity: 0;
                -o-opacity: 0;
                opacity: 0;
                height: auto;
                width: 300px;
                .cart-block-content {
                    padding-top: 20px;
                    background: #fff;
                    -webkit-box-shadow: 0 0 10px 0 rgba(0,0,0,.35);
                    -moz-box-shadow: 0 0 10px 0 rgba(0,0,0,.35);
                    -ms-box-shadow: 0 0 10px 0 rgba(0,0,0,.35);
                    -o-box-shadow: 0 0 10px 0 rgba(0,0,0,.35);
                    box-shadow: 0 0 10px 0 rgba(0,0,0,.35);
                    -webkit-border-radius: 3px;
                    -moz-border-radius: 3px;
                    -ms-border-radius: 3px;
                    -o-border-radius: 3px;
                    border-radius: 3px;
                }
                .no-items{
                    margin-bottom: 30px;
                    display: inline-block;
                    padding: 0 20px 20px 20px;
                    margin-bottom: 0;
                    font-size: 1.4rem;
                    font-weight: 400;
                    text-transform: capitalize;
                }
            }
        }
        .cart-products-count {
            display: inline-block;
            font-family: "Roboto",sans-serif;
            color: #fff;
            font-size: 1.1rem;
            font-weight: 700;
            min-width: 19px;
            height: 19px;
            line-height: 19px;
            border: none;
            -webkit-border-radius: 50%;
            -moz-border-radius: 50%;
            -ms-border-radius: 50%;
            -o-border-radius: 50%;
            border-radius: 50%;
            position: absolute;
            top: -23px;
            left: 50%;
            -webkit-transform: translateX(-50%);
            -ms-transform: translateX(-50%);
            transform: translateX(-50%);
        }
        @media screen and(max-width: $maxMobile){
            span{
                display: block;
                margin-top: 0;
                line-height: 1;
                color: #bebebe;
                font-size: 10px;
            }
            .title-cart {
                font-size: 10px;
                text-transform: capitalize;
                font-family: "Roboto",sans-serif;
            }
            .cart-products-count {
                position: absolute;
                top: -7px;
                left: 61%;
                bottom: inherit;
                background: #fd6666;
                color: #fff;
                width: 14px;
                height: 14px;
                -webkit-border-radius: 50%;
                -moz-border-radius: 50%;
                -ms-border-radius: 50%;
                -o-border-radius: 50%;
                border-radius: 50%;
                text-align: center;
                min-width: 14px;
                line-height: 14px;
                @include fontSize(.8); 
            }
        }
    }
</style>