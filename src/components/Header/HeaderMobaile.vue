<template>
        <div class="header-mobile hidden-md-up">
            <div class="hidden-md-up text-xs-center mobile d-flex align-items-center">
                <menu-Logo />
                <nav-Search />
                <menu-Top />
            </div>
        </div>
</template>

<script>
import MenuLogo from '@/components/Header/HeaderMobile/_Menu_Logo.vue';
import NavSearch from '@/components/Header/HeaderMobile/_Mobile_navSearch.vue';
import MenuTop from '@/components/Header/HeaderMobile/_Mobile_menu_top.vue';

export default {
    name: "HeaderMobail",
    components: {
        MenuLogo,
        NavSearch,
        MenuTop
    }
}
</script>

<style lang="scss" scoped>
.header-mobile{
    display: none;
    @media screen and(max-width: 767px) {
        display: block;
        padding: 10px 15px;
        margin-bottom: 10px;
        @include shadow();
    }
    background-color: #ffffff !important;
  }
</style>