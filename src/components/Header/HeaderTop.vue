<template>
  <div class="header-top hidden-sm-down">
    <div class="container">
      <div class="row align-items-center">
        <Logo />
        <HeaderTopSearch />
      </div>
    </div>
  </div>
</template>

<script>
import Logo from "@/components/Header/HeaderTop/_desktop_logo.vue";
import HeaderTopSearch from "@/components/Header/HeaderTop/_Header_Top_Search.vue";

export default {
  components: {
    Logo,
    HeaderTopSearch,
  },
};
</script>

<style lang="scss" scoped>
.header-top {
  .container {
    @extend %queryCONTAINER;
  }
}
</style>
