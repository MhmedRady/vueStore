<template>
    <div @click="openSideMenu" class="verticalmenu-main ml-0 mr-0">
        <span class="toggle-nav">
            <i class="material-icons">subject</i>
        </span>
    </div>
</template>

<script>
import $ from 'jquery'
export default {
    methods: {
        openSideMenu: function (){
            $(".canvas-overlay").addClass("open_side_mobile_menu");
            $("#verticalmenu-content").addClass("active");
        }
    },
}
</script>

<style lang="scss" scoped>
.header-bottom{
    .verticalmenu-main {
        cursor: pointer;
        display: none;
        margin-right: 15px;
        width: 46px;
        height: 46px;
        min-width: 46px;
        line-height: 46px;
        text-align: center;
        background-color: $f;

        @media screen and(max-width: $maxIpad) {
            display: block;
        }
    }
    .verticalmenu-main {
        height: 44px;
        min-width: 44px;
        border-radius: 3px;

        .toggle-nav {
            font-size: 24px;
            color: #222;

            i{
                color: #666;
                top: 0px;
            }
        }
    }
}
</style>