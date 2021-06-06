<template>
  <div class="topBar hidden-sm-down mb-10">
    <div class="container">
      <div class="row">
        <Social />
        <group-connect />
      </div>
    </div>
  </div>
</template>

<script>
import Social from "@/components/Header/TopBar/socials.vue";
import GroupConnect from "@/components/Header/TopBar/GroupConnect.vue";

export default {
  components: {
    Social,
    GroupConnect,
  },
};
</script>

<style lang="scss" scoped>
.topBar {
  .container {
    width: 100%;
    max-width: 1800px;
  }
  @media screen and (max-width: $mobile) {
    display: none;
  }
  border-bottom: 1px solid rgba(255, 255, 255, 0.18);
  background-color: $blueBlack;
}
</style>
