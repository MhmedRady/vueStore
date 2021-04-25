<template>
  <div class="banner-top banner-top-alert">
    <a href="#">
      <img class="img-fluid" src="../../assets/images/popup-top-1.jpg" alt="" />
      <hr />
    </a>
    <button
      @click.stop="closeAlert()"
      type="button"
      class="btn-close"
      aria-label="Close"
    ></button>
  </div>
</template>

<script>
import $ from "jquery";
export default {
  name: "topAlert",
  methods: {
    closeAlert: function () {
      $(".banner-top-alert").slideUp();
    },
  },
};
</script>

<style lang="scss" scoped>
.banner-top {
  position: relative;
  text-align: center;
  hr {
    margin-top: 4px;
    margin-bottom: 0;
    background-color: #fff;
    height: 1px;
  }
  a {
    position: relative;
    color: #444;
    display: inline-block;
    z-index: 0;
    background-color: #B2DAFE;
    @media screen and(max-width:$minIpad) {
      max-height: 25px;
    }
    img {
      transform: scale(120%);
      @media screen and (max-width: $minIpad){
        transform: scale(170%);
      }
    }
  }
  .btn-close {
    box-sizing: content-box;
    width: 1em;
    height: 1em;
    padding: 0.25em 0.25em;
    color: #000;
    background: transparent
      url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%23000'%3e%3cpath d='M.293.293a1 1 0 011.414 0L8 6.586 14.293.293a1 1 0 111.414 1.414L9.414 8l6.293 6.293a1 1 0 01-1.414 1.414L8 9.414l-6.293 6.293a1 1 0 01-1.414-1.414L6.586 8 .293 1.707a1 1 0 010-1.414z'/%3e%3c/svg%3e")
      center/1em auto no-repeat;
    border: 0;
    border-radius: 0.25rem;
    opacity: 0.5;
    position: absolute;
    right: 0;
    margin-top: 8px;
    margin-right: 10px;
    font-size: 12px;
    font-weight: 900;
    z-index: 1;
    @media screen and (max-width: $mobile) {
      margin-top: 5px;
      margin-right: 10px;
      font-size: 9px;
    }
  }
}
</style>
