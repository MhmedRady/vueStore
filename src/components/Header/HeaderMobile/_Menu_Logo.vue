<template>
    <div class="hidden-md-up text-xs-center mobile d-flex align-items-center">
        <div id="_mobile_mainmenu" @click="openSideMenu" class="item-mobile-top">
            <i class="material-icons">sort</i>
        </div>
        <div class="mobile_logo item-mobile-top">
            <router-link to="/" title="Home">
                <img class="banner-top img-fluid" src="../../../assets/images/logo-mobile-1.png" alt="Nuranium Marketplace">
            </router-link>
        </div>
    </div>
</template>

<script>
import $ from 'jquery';
export default {
    methods: {
        openSideMenu: function (){
            $(".canvas-overlay").addClass("open_side_mobile_menu");
            $("#mobile_top_menu_widget").addClass("active");
        }
    },
}
</script>

<style lang="scss" scoped>
    .item-mobile-top{
        @media screen and (max-width: $maxMobile){
            position: relative;
            cursor: pointer;
            font-size: 19px;
            margin-right: 15px;

            i{
                color: #111;
                @include transform(rotateX(180deg));
            }
        }
    }
    .mobile_logo {
        @media screen and(max-width: $maxMobile) {
            position: relative;
            cursor: pointer;

            min-width: 90px;
            margin-right: 15px;
            @media screen and(max-width: $maxMinMobile) {
                width: 90px;
            }
        }
    }
</style>