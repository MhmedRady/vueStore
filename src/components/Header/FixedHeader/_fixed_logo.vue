<template>
  <div class="_logo col-xl-3 col-lg-2">
    <router-link to="/" title="Home">
        <img
          class="logo img-fluid"
          src="../../../assets/images/logo-1.png"
          :alt="atr"
        />
    </router-link>
  </div>
</template>

<script>

export default {
  data() {
    return {
      src: "logo-1.png",
      atr: "Nuranium Marketplace",
    };
  },
};
</script>

<style lang="scss" scoped>
._logo {
    img{
      width: 135px;
    }
}
</style>
