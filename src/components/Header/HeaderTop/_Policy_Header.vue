<template>
  <div class="policy-header d-flex">
    <div class="policy-1 p-item d-flex align-items-center">
      <div class="icon-p"></div>
      <div class="text-p">
        <p class="badge">Free Delivery</p>
        <p class="badge">From $ 250</p>
      </div>
    </div>
    <div class="policy-2 p-item d-flex align-items-center">
      <div class="icon-p"></div>
      <div class="text-p">
        <p class="badge">Money back</p>
        <p class="badge">GUARANTEED</p>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.policy-header {
  margin-left: 0;
  // margin-right: auto;
  .p-item {
    &:not(:last-child) {
      margin-right: 30px;
    }
  }
  .policy-1 .icon-p {
    width: 33px;
    height: 29px;
    background-position: 0 0;
    background-image: url("../../../assets/svg/index.png");
  }
  .policy-2 .icon-p {
    width: 43px;
    height: 28px;
    background-position: -33px 0;
    background-image: url("../../../assets/svg/index1.png");
  }
  .text-p {
    display: block;
    color: #fff;
    font-weight: 500;
    font-size: 1rem;
    text-transform: uppercase;
    margin-left: 20px;
    p {
      text-align: initial;
      display: block;
      font-size: 70%;
    }
  }
  @media screen and (max-width: $ipad10Pro) {
    display: none !important;
  }
}
</style>
