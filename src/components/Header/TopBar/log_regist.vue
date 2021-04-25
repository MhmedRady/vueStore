<template>
  <div
    class="col-lg-4 col-md-3 d-flex align-items-center justify-content-end group-login"
  >
    <div class="group-account">
      <button
          type="button"
          class="register oggle-popup-login badge"
          data-toggle="modal"
          data-target="#toggle_popup_login"
          href=""
          rel="nofollow"
          title="Register Account"
          @click="showLoginModal">
        <i class="material-icons">personoutlin</i>
        Register | Login
      </button>
    </div>
  </div>
</template>

<script>
// import $ from 'jquery';
export default {
    name: "login_regist",
    methods: {
        showLoginModal: function (){
              console.log("dfdsf");
        }
    }
}
/* 01003530967 */ 
</script>

<style lang="scss" scoped>
.group-login {
  font-size: 1rem;
  font-weight: 700;
  text-transform: uppercase;
  .group-account {
    border: none;
    cursor: pointer;
    i {
      color: $Grn;
    }
    button {
      cursor: pointer;
      color: #fff;
      text-decoration: none;
      font-size: 11px;
      padding: 10px 0px 10px 5px;
      font-family: Pop;
      background-color: transparent;
      font-weight: 900;
      text-transform: uppercase;
    }
    &:hover button{
      color: $Grn;
    }
  }
}
</style>
