<template>
  <div class="_logo col-md-2">
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
  a {
    background: #fff;
    width: 100%;
    height: 128px;
    line-height: 128px;
    padding-left: 20px;
    padding-right: 20px;
    -moz-border-radius-topleft: 10px;
    -webkit-border-top-left-radius: 10px;
    border-top-left-radius: 10px;
    -moz-border-radius-topright: 10px;
    -webkit-border-top-right-radius: 10px;
    border-top-right-radius: 10px;
  }
  @media screen and(max-width: $maxIpad) {
      -webkit-flex: 0 0 21%;
      -ms-flex: 0 0 21%;
      flex: 0 0 21%;
      max-width: 21%;  
  }

}
</style>
