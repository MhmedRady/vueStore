<template>
  <div class="col-lg-8 col-md-9">
    <div class="block_hotline">
      <div class="content">
        <p class="email">
          <i class="fa fa-envelope"></i>Email : <span>Support@domain.com </span>
        </p>
        <p class="phone_number">
          <i class="material-icons">phone_in_talk</i>Hotline :
          <span>800-140-10000</span>
        </p>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
%i {
  color: rgba(255, 255, 255, 0.47);;
  font-size: 16px;
  padding-left: 0;
  padding-right: 9px;
}
.block_hotline {
  margin-left: auto;
  margin-right: 0;
  .content {
    line-height: 42px;
    text-align: $textAlign;
    p {
      color: #fff;
      font-size: 12px;
      display: inline-block;
      line-height: 22px;
      font-weight: 800;
      &:first-child {
        padding-right: 40px;
      }
      &.email i {
        @extend %i;
      }
      span {
        font-weight: 400;
      }
      &.phone_number i {
        @extend %i;
        padding-left: 0;
        padding-right: 25px;
        color: $Orenge;
        font-size: 16px;
      }
    }
  }
}
</style>
