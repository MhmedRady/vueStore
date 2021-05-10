<template>
    <section id="widgets">
        <nav-Bottom-Mobile />
        <login-Regist/>
        <mobile-Page-Menu />
        <side-Menu />
        <canvas-Overlay />

        <goTop />
    </section>
</template>

<script>
import NavBottomMobile from '@/components/Widgets/Nav_Bottom_Mobile';
import LoginRegist from '@/components/Widgets/_login_Regist';

import MobilePageMenu from '@/components/Widgets/_mobile_Page_Menu.vue';
import sideMenu from '@/components/Widgets/_side_menu';
import canvasOverlay from '@/components/Widgets/_canvas_Overlay.vue';

import goTop from '@/components/Widgets/_go_Top';
export default {
    name: "Widgets",
    components: {
        NavBottomMobile,
        LoginRegist,
        MobilePageMenu,
        sideMenu,
        canvasOverlay,
        goTop
    }
}
</script>

<style lang="scss">
#widgets{
    @media screen and(min-width: $minIpad) {
        .hidden-md-up {
            display: none !important;
        }
    }
}

</style>

