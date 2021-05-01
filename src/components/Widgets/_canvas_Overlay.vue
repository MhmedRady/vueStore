<template>
        <div class="canvas-overlay" @click="closeSideMenu"></div>
</template>



<script>
import $ from 'jquery';
export default {
    methods: {
        closeSideMenu: function (){
            $(".canvas-overlay").removeClass("open_side_mobile_menu");
            $("#mobile_top_menu_widget").removeClass("active");
            $("#verticalmenu-content").removeClass("active");
        }
    },
}
</script>

<style lang="scss" scope>
@media screen and (max-width: $maxIpad) {
        .canvas-overlay {
                &.open_side_mobile_menu{
                        width: 100%;
                        height: 100%;
                        filter: progid:DXImageTransform.Microsoft.Alpha(Opacity=100);
                        opacity: 1;
                        -webkit-transition: width 0s 0s,height,0s 0s,opacity 0.5s 0s;
                        -moz-transition: width 0s 0s,height,0s 0s,opacity 0.5s 0s;
                        -ms-transition: width 0s 0s,height,0s 0s,opacity 0.5s 0s;
                        -o-transition: width 0s 0s,height,0s 0s,opacity 0.5s 0s;
                        transition: width 0s 0s,height,0s 0s,opacity 0.5s 0s;
                        cursor: url(../../assets/svg/close.png),auto;
                }
        }    
}
</style>