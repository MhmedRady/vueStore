<template>
    <div class="fixed-header hidden-xl">
        <div class="container">
            <div class="row align-items-center pos-r">
                <Logo />
                <div class="fixedHeader_menu col-xl-6 col-lg-7 position-static">
                    <Desktop-navBar />
                </div>
                
                <div class="d-flex justify-content-end col-lg-3">
                    <My-Cart/>
                </div>
            </div>
            <div id="category-nav" class="all-category-nav">
                <All-Categories />
            </div>
        </div>
        
    </div>
</template>

<script>
import helperFun from "../../Helpers/Helper.js";
import Logo from '@/components/Header/FixedHeader/_fixed_logo';
import DesktopNavBar from "@/components/Header/HeaderBottom/_Desktop_navBar.vue";
import AllCategories from '@/components/Header/FixedHeader/_all_categories';
import MyCart from '@/components/Header/HeaderTop/_MyCart.vue';

export default {
    name: "fixedHeader",
    created(){
        window.addEventListener("scroll",this.e);
    },
    methods: {
        e: (e)=>{
            helperFun.scrollFun(e,"fixed-header","showFixed",270);
        },
    },
    mounted() {
        document.addEventListener("scroll",this.onScrolling);
    },
    components:{
        Logo,
        DesktopNavBar,
        AllCategories,
        MyCart
    }
}
</script>

<style lang="scss" scoped>
    .fixed-header{
        position: fixed;
        width: 100%;
        left: 0;
        top: 0;
        z-index: 1020;
        padding: 5px 0;
        @include shadow(0 6px 5px rgba(0,0,0,.1));
        @include transition(0.6, ease);
        @include transform(translateY(-200%));
        display: block;

        background-color: $HeaderBar_Co !important;
        @media screen and(min-width: $maxIpad) {
            &.showFixed {
                visibility: visible;
                @include transform(translateY(0));
            }
        }
        .container{
            @extend %queryCONTAINER;
            >.row{
                &:first-child{
                    background-color: $f;
                    z-index: 1;
                }
            }
        }
        .all-category-nav{
            position: absolute;
            width: 100%;
            left: 0;
            bottom: -38px;
            z-index: -1;
        }
    }
</style>