<template>
    <div class="fixed-header">
        <div class="container">
            <div class="row align-items-center">
                <Logo />
                <div class="fixedHeader_menu col-xl-6 col-lg-7 position-static">
                    <desktop-navBar />
                </div>
                
                <div class="d-flex justify-content-end col-lg-3">
                    <my-Cart/>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import helperFun from "@/layout/js/helper.js";
import Logo from '@/components/Header/FixedHeader/_fixed_logo';
import desktopNavBar from "@/components/Header/HeaderBottom/_Desktop_navBar.vue";
import MyCart from '@/components/Header/HeaderTop/_MyCart.vue';

export default {
    name: "fixedHeader",
    created(){
        window.addEventListener("scroll",this.e)
    },
    methods: {
        e: (e)=>{
            helperFun.scrollFun(e,"fixed-header","showFixed",270);
        },
    },
    components:{
        Logo,
        desktopNavBar,
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
        -webkit-box-shadow: 0 6px 5px rgba(0,0,0,.1);
        -moz-box-shadow: 0 6px 5px rgba(0,0,0,.1);
        -ms-box-shadow: 0 6px 5px rgba(0,0,0,.1);
        -o-box-shadow: 0 6px 5px rgba(0,0,0,.1);
        box-shadow: 0 6px 5px rgba(0,0,0,.1);
        -webkit-transition: all 0.6s ease;
        -moz-transition: all 0.6s ease;
        -ms-transition: all 0.6s ease;
        -o-transition: all 0.6s ease;
        transition: all 0.6s ease;
        -webkit-transform: translateY(-100%);
        -ms-transform: translateY(-100%);
        transform: translateY(-100%);
        display: block;

        background-color: #fff !important;
        @media screen and(min-width: $maxIpad) {
            &.showFixed {
                visibility: visible;
                -webkit-transform: translateY(0);
                -ms-transform: translateY(0);
                transform: translateY(0);
            }
        }
        .container{
            @extend %queryCONTAINER;
        }
        
    }
</style>