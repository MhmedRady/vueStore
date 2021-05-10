<template>
    <div @click="goTop" class="_deskTop_go_top go-back-top">
        <span>
            <i class="material-icons">expand_less</i>
        </span>
    </div>
</template>
<script>
// import $ from 'jquery'
import helperFun from '../../layout/js/helper'

export default {
    name: "BackTop",
    data() {
        return {
            topId:"#back-top",
        }
    },
    created(){
        window.addEventListener('scroll', helperFun.gotTopScroll);
    },
    methods: {
        goTop: helperFun.goTop,
    },
}
</script>
<style lang="scss" scoped>
    ._deskTop_go_top{
        @media screen and (max-width:$minWidth) {
            display: none !important;
        }
        position: fixed;
        right: 0;
        bottom: 0;
        margin-bottom: 20px;
        margin-right: 10px;
        text-align: center;
        z-index: $headerZ;
        span{
            cursor: pointer;
            background-color: $WebGrn;
            width: 50px;
            height: 50px;
            border-radius: 50%;
            i{
                margin-top: 10px;
                color: $f;
                font-size: 25px;
            }
        }
    }
</style>