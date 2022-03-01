<template>
    <div id="_mobile_back_top">
        <button @click="goTop" id="go-back-top" class="go-back-top disabled" disabled>
            <span>
                <i class="fa fa-arrow-circle-up move-top"></i>
            </span>
            <span class="text">On Top</span>
        </button>
    </div>
</template>

<style lang="scss" scoped>
#nav_bottom_mobile{
    .stickymenu-item{
        .go-back-top{
            cursor: pointer;
            background-color: $f;
            .move-top{
                position: relative;
                top: -5px;
                @include transition(1);
                @include fontSize(1.3);
            }
        }
    }
}
</style>

<script>
// import $ from 'jquery'
import helperFun from '@/Helpers/Helper.js'

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