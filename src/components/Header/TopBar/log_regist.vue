<template>
  <div
    class="col-lg-4 col-md-3 d-flex align-items-center justify-content-end group-login"
  >
  <div class="language-selector groups-selector hidden-sm-down">
    <span class="title_header badge">English</span>
      <ul class="list-inline">
        <li @click.stop="clickFlag('en', 'English')" class="list-inline-item current active">
          <a href="#">
            <img
              class="img-fluid"
              src="../../../assets/svg/flags/lang_1.jpg"
              width="16"
              alt="en"
              height="11"/>
          </a>
        </li>
        <li @click.stop="clickFlag('ar', 'Arabic')" class="list-inline-item">
          <a href="#">
            <img
              class="img-fluid"
              src="../../../assets/svg/flags/lang_6.jpg"
              width="16"
              alt="ar"
              height="11"/>
            </a>
        </li>
        <li @click.stop="clickFlag('it', 'Italy')" class="list-inline-item">
          <a href="#">
            <img
              class="img-fluid"
              src="../../../assets/svg/flags/lang_2.jpg"
              width="16"
              alt="it"
              height="11"/>
            </a>
        </li>
        <li @click.stop="clickFlag('es', 'Español')" class="list-inline-item">
          <a href="#">
            <img
              class="img-fluid"
              src="../../../assets/svg/flags/lang_4.jpg"
              width="16"
              alt="es"
              height="11"/>
          </a>
        </li>
      </ul>
    </div>
    <div class="group-account">
      <button
          type="button"
          class="register oggle-popup-login badge"
          data-toggle="modal"
          data-target="#toggle_popup_login"
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
    name : "login_regist",
    mounted(){
      this.checkCurrentLang();
    },
    methods: {
        showLoginModal: function (){
              console.log("dfdsf");
        },
        checkCurrentLang(){
          let lang = JSON.parse(localStorage.getItem('lang')),
          items    = document.querySelectorAll('.language-selector img'),
          title    = document.getElementsByClassName('title_header');
          
          title.forEach((el)=>el.innerText = lang.name.toUpperCase());
          let filter = Array.prototype.filter;
          let imgs = filter.call(items,(el)=>el.getAttribute('alt') == (lang.lang||'en'));
          // console.log(imgs);
          let flags = document.querySelectorAll('.language-selector li');
          flags.forEach((el) => {
            el.classList.remove('current', 'active');
          });
          imgs.forEach((el)=>el.parentElement.parentElement.classList.add('current', 'active'))
        },
        clickFlag: function(lang, name){
          // localStorage.clear();
          let langStore = JSON.parse(localStorage.getItem('lang'));
          console.log(lang, name);
          
          if (langStore.lang !== (lang || 'en')) 
          {
            let newLang = new Object({lang , name });
            console.log(langStore);
            localStorage.setItem('lang',JSON.stringify(newLang));
            window.location.reload();
          }      
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
  .groups-selector {
      .title_header {
        margin-left: -5px;
        text-transform: uppercase;
        font-family: "Poppins", sans-serif;
        top: 2px;
        position: relative;
      }
      .list-inline {
        list-style: none;
        padding: 0;
        margin-bottom: 0;
        background: transparent;
        li {
          display: inline-block;
          text-align: center;
          font-family: "Roboto", sans-serif;
          text-transform: uppercase;
          position: relative;
          a {
            display: inline-block;
            font-weight: 700;
            text-decoration: none;
            @include fontSize(.6);
            img {
              opacity: 0.4 !important;
              @include filter(blur(.5px));
              @include transition();
              &:hover{
                @include opacity();
                @include filter();
              }
            }
          }
          &:not(:last-child) {
            margin-right: 5px;
          }
        }
        li.active {
          a {
            color: $Grn;
          }
          img {
            opacity: 1 !important;
            @include filter();
          }
        }
      }
    }
}
</style>
