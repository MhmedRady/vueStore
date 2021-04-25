<template>
  <div class="header-bottom hidden-sm-down header-color-2">
    <div class="container hidden-sm-down d-flex align-items-center">
      <verticalmenu-Main />
      <verticalmenu-Content />
      <desktop-navBar />
      <block-Setting />
    </div>
  </div>
</template>

<script>
import verticalmenuMain from '@/components/Header/HeaderBottom/_Vertical-menu-Main.vue';
import verticalmenuContent from "@/components/Header/HeaderBottom/_Vertical-menu-content.vue";
import desktopNavBar from "@/components/Header/HeaderBottom/_Desktop_navBar.vue";
import blockSetting from "@/components/Header/HeaderBottom/_Block_Setting.vue";

export default {
  name: "Header-Bottom",
  components: {
    verticalmenuMain,
    verticalmenuContent,
    desktopNavBar,
    blockSetting
  },
};
</script>

<style lang="scss" scoped>
.header-bottom {
  background-color: $HeaderBottom_Co !important;
  .container {
    @extend %queryCONTAINER;
  }
}
</style>
