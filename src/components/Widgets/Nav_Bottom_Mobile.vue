<template>
    <div id="nav_bottom_mobile">
        <div class="row align-items-center justify-content-center hidden-md-up text-center no-gutters">
            <div class="stickymenu-item col">
            <a href="#">
                <i class="icon-house"></i>
                <span>Home</span>
            </a>
        </div>

            <div class="stickymenu-item col">
                <a href="#"><i class="material-icons heart-icon">favorite_border</i>
                <span>Wishlist</span></a>
            </div>

            <bottom-Cart />

            <div class="stickymenu-item col">
                <a href="#" class="nov-toggle-page" data-target="#mobile-pageaccount">
                    <i class="icon-settings"></i>
                    <span>Setting</span>
                </a>
            </div>

            <div class="stickymenu-item col">
                <back-Top />
            </div>
        </div>
    </div>
</template>

<script>
// import Wish from '@/components/Widgets/Nav_Bottom/_Wish.vue';
import BottomCart from '@/components/Widgets/Nav_Bottom/_Bottom_Cart.vue';

import backTop from '@/components/Widgets/Nav_Bottom/_Back_Top.vue';

export default {
    name: "BottomNavBar",
    components: {
        BottomCart,
        backTop
    },
    created (){
        console.log("created");
    }
}
</script>

<style lang="scss">
    .icon, [class^="icon-"] {
        display: inline-block;
        font: normal normal normal 14px/1 FontAwesome;
            font-size: 14px;
        font-size: inherit;
        text-rendering: auto;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        transform: translate(0,0);
    }
    #nav_bottom_mobile{
        @media screen and(max-width: $maxMobile) {
            position: fixed;
            width: 100%;
            bottom: 0;
            left: 0;
            z-index: $headerZ;
            padding: 8px 15px;
            background: #fff;
                background-color: rgb(255, 255, 255);
            -webkit-box-shadow: 0 -2px 5px -2px rgba(0,0,0,.2);
            -moz-box-shadow: 0 -2px 5px -2px rgba(0,0,0,.2);
            -ms-box-shadow: 0 -2px 5px -2px rgba(0,0,0,.2);
            -o-box-shadow: 0 -2px 5px -2px rgba(0,0,0,.2);
            box-shadow: 0 -2px 5px -2px rgba(0,0,0,.2);
        }
        background-color: $f;
        i{
            color: #222 !important;
        }
    }
    .no-gutters > .col, .no-gutters > [class*="col-"] {
        padding-right: 0;
        padding-left: 0;
    }
    .stickymenu-item{
        @media screen and(max-width: 767px) {
            
            i {
                font-size: 23px;
                color: #000;
                background: transparent;
                width: auto;
                height: auto;
                margin: 0;
                    margin-bottom: 0px;
                vertical-align: top;
                margin-bottom: 0;
            }
            a {
                display: inline-block;
                i{
                    color: #222;
                    @include filter(drop-shadow(0 1px 1px #646464));
                }
            }
            .heart-icon{
                font-size: 23px !important;
                margin-bottom: 5px;
            }
            .icon-house{
                width: 21px;
                height: 18px;
                background-size: contain;
                margin-bottom: 5px;
                background-image: url(../../assets/svg/nav/home.png);
            }
            .icon-settings{
                width: 17px;
                height: 17px;
                background-size: contain;
                margin-bottom: 6px;
                background-image: url(../../assets/svg/nav/gear.png);
            }
            
            
            span {
                display: block !important;
                margin-top: 0;
                line-height: 1;
                color: #505050;
                font-size: 10px;
                font-weight: 700;
                font-family: "Roboto",sans-serif;
            }
        }
    }

</style>