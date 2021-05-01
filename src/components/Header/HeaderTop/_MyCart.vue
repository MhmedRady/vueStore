<template>
  <div @mouseover="hover()" class="blockcart cart-preview" data-refresh-url="">
    <div class="header-cart">
      <div class="cart-left">
        <div class="shopping-cart">Cart Icon</div>
      </div>
      <div class="cart-right">
        <span class="title-cart title_icon badge">My Cart</span>
      </div>
      <span class="cart-products-count">0</span>
    </div>
    <div class="cart_block">
      <div class="cart-block-content">
        <div class="no-items">No products in the cart</div>
      </div>
    </div>
  </div>
</template>

<script>
import $ from "jquery";
export default {
  methods: {
    hover: function () {
      $(".cart-preview").hover(
        function () {
          // over
          $(".cart_block").addClass("hover-active");
        },
        function () {
          // out
          $(".cart_block").removeClass("hover-active");
        }
      );
    },
  },
};
</script>

<style lang="scss" scoped>
.cart-preview {
  position: relative;
  .header-cart {
    text-align: center;
    cursor: pointer;
    display: -webkit-box;
    display: -moz-box;
    display: box;
    display: -webkit-flex;
    display: -moz-flex;
    display: -ms-flexbox;
    display: flex;
    height: 46px;
    line-height: 46px;
    border-radius: 3px;
    background-color: $WebGrn;
    margin-left: 10px;
    -webkit-align-items: center;
    -moz-align-items: center;
    -ms-align-items: center;
    align-items: center;
    -webkit-justify-content: center;
    -moz-justify-content: center;
    -ms-justify-content: center;
    justify-content: center;
    -ms-flex-pack: center;
    padding: 0 17px;
    .shopping-cart {
      background-repeat: no-repeat;
      margin: 0 auto;
      font-size: 0;
      width: 22px;
      height: 22px;
      background-position: -27px 0;
      background-image: $cartIcon;
    }
    .cart-right {
      display: block;
      padding-left: 10px;
      .title_icon {
        font-weight: 700;
        text-transform: uppercase;
        display: block !important;
        color: #fff;
      }
    }
    .cart-products-count {
      display: inline-block;
      font-family: "Roboto", sans-serif;
      font-size: 0.8rem;
      font-weight: 700;
      min-width: 19px;
      height: 19px;
      line-height: 19px;
      border: none;
      -webkit-border-radius: 50%;
      -moz-border-radius: 50%;
      -ms-border-radius: 50%;
      -o-border-radius: 50%;
      border-radius: 50%;
      position: absolute;
      background: #fff;
      color: $Grn;
      top: -13px;
      left: 0px;
      -webkit-transform: translateX(28px);
      -ms-transform: translateX(28px);
      transform: translateX(28px);
    }
  }
  .cart_block {
    position: absolute;
    top: 100%;
    right: 0;
    z-index: 100;
    visibility: hidden;
    filter: alpha(opacity=0);
    -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=0)";
    -webkit-opacity: 0;
    -moz-opacity: 0;
    -ms-opacity: 0;
    -o-opacity: 0;
    opacity: 0;
    height: auto;
    width: 300px;
    .cart-block-content {
      padding-top: 20px;
      background: #fff;
      text-align: $textAlign;
      -webkit-box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.35);
      -moz-box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.35);
      -ms-box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.35);
      -o-box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.35);
      box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.35);
      -webkit-border-radius: 3px;
      -moz-border-radius: 3px;
      -ms-border-radius: 3px;
      -o-border-radius: 3px;
      border-radius: 3px;
      .no-items {
        display: inline-block;
        padding: 0 20px 20px 20px;
        margin-bottom: 0;
        font-size: 0.9rem;
        font-weight: 400;
        text-align: $textAlign;
        text-transform: capitalize;
      }
    }
  }
  .cart_block.hover-active {
    visibility: visible;
    filter: alpha(opacity=100);
    -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)";
    -webkit-opacity: 1;
    -moz-opacity: 1;
    -ms-opacity: 1;
    -o-opacity: 1;
    opacity: 1;
    -webkit-animation-name: slideInUpNov;
    animation-name: slideInUpNov;
    -webkit-animation-duration: 0.5s;
    animation-duration: 0.5s;
    animation-timing-function: ease;
    -webkit-animation-timing-function: ease;
    -webkit-animation-fill-mode: both;
    animation-fill-mode: both;
  }
}

.fixed-header{
.cart-products-count{
    position: relative !important;
    top: 0 !important;
    right: 0px;
    left: -21px !important;
  }
}

</style>
