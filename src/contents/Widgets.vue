
<template>
    <section id="widgets">
        <nav-Bottom-Mobile />
        <login-Regist/>
        <mobile-Page-Menu />
        <side-Menu />
        <canvas-Overlay />
        <goTop />
        <loader :LoadVal = "loaded"/>
    </section>
</template>

<script>
import NavBottomMobile from '@/components/Widgets/Nav_Bottom_Mobile';
import LoginRegist from '@/components/Widgets/_login_Regist';

import MobilePageMenu from '@/components/Widgets/_mobile_Page_Menu.vue';
import sideMenu from '@/components/Widgets/_side_menu';
import canvasOverlay from '@/components/Widgets/_canvas_Overlay.vue';

import loader from '@/components/Widgets/loader.vue';

import goTop from '@/components/Widgets/_go_Top';
export default {
    name: "Widgets",
    data() {
        return {
            loaded: false
        }
    },
    mounted() {
        this.chechLoaded();
    },
    methods:{
        chechLoaded(){
            document.onreadystatechange = () => {
                if (document.readyState == 'complete') {
                    this.loaded = true
                }
            }
        }
    },
    components: {
        NavBottomMobile,
        LoginRegist,
        MobilePageMenu,
        sideMenu,
        canvasOverlay,
        goTop,
        loader
    },
    
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

