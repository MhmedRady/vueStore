<template>
    <div @click="openMenu" id="_mobile_menutop" class="item-mobile-top nov-toggle-page d-flex align-items-center justify-content-center">
        <i class="material-icons">reorder</i>
    </div>
</template>

<script>
import $ from 'jquery'
export default {
    name: "MobaileMenuTop",
    data() {
        return {
            openMenu: function(){
                var DOC = $("#mobile-boxpage");
                DOC.addClass("active");
            }
        }
    },
}
</script>

<style lang="scss" scoped>
    #_mobile_menutop{
        @media screen and(max-width: $maxMobile) {
            position: relative;
            cursor: pointer;
            i{
                color: $b;
                font-size: 24px;
                top: 0;
            }
        }
    }
</style>