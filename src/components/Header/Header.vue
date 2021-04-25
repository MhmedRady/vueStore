<template>
  <header class="HeaderBar">
    <alert-Top />
    <div class="_deskTop_header">
      <top-Bar />
      <head-Top />
      <header-bottom />
    </div>
    
    <!-- /* ** START MOBALIE HEADER *** */ -->

      <header-mobile />

  </header>
</template>

<script>
import alertTop from "@/components/Header/AlertComp.vue";
import topBar from "@/components/Header/topBar.vue";
import HeadTop from "@/components/Header/HeaderTop.vue";
import HeaderBottom from "@/components/Header/HeaderBottom.vue";
import HeaderMobile from '@/components/Header/HeaderMobaile.vue';
export default {
  name: "HeaderBar",
  components: {
    alertTop,
    topBar,
    HeadTop,
    HeaderBottom,

    HeaderMobile,
  },
};
</script>

<style lang="scss" scoped>
.HeaderBar {
  position: relative;
  @media screen and(max-width: $maxMobile) {
      position: fixed !important;
      z-index: $headerZ;
    }
  width: 100%;
  ._deskTop_header{
    background-color: $HeaderBar_Co;
    @extend %maxMobile;
  }
}
</style>
