<template>
  <div class="group-login col-lg-10 col-md-9">
    <div class="borde-bottom">
      <div class="row">
        <HotLines />
        <logRegist />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.group-login {
  color: #fff;
  .borde-bottom {
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  }
}
</style>

<script>
import HotLines from "@/components/Header/TopBar/Hotline.vue";
import logRegist from "@/components/Header/TopBar/log_regist.vue";
export default {
  components: {
    HotLines,
    logRegist,
  },
};
</script>
