<template>
  <div class="topBar hidden-sm-down">
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
    background-color: $HeaderBar_Co;
  }
  @media screen and (max-width: $mobile) {
    display: none;
  }
}
</style>
