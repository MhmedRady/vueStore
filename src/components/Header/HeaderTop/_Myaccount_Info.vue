<template>
  <div class="myaccount_info groups-selector hidden-sm-down dropdown">
    <button
      id="accountSitting"
      type="button"
      class="my_account_tiile dropdown-toggle"
      data-toggle="dropdown"
      aria-haspopup="true"
      value=""
      aria-expanded="false"
    >
      <i class="novicon_accountblock"></i>
    </button>

    <div class="account-list dropdown-menu dropdown-menu-right">
      <div class="account-list-content">
        <div class="list">
          <a
            class="login"
            href="#"
            rel="nofollow"
            title="Log in to your customer account"
            ><i class="fa fa-sign-in"></i><span>Sign in</span></a
          >
        </div>
        <div class="list">
          <a class="register" href="#" rel="nofollow" title="Register Account"
            ><i class="fa fa-user"></i><span>Register Account</span></a
          >
        </div>
        <div class="list">
          <a class="check-out" href="#" rel="nofollow" title="Checkout"
            ><i class="material-icons">check_circle</i><span>Checkout</span></a
          >
        </div>
        <div class="link_wishlist">
          <a href="#" title="My Wishlists">
            <i class="fa fa-heart"></i><span>My Wishlists</span>
          </a>
        </div>
        <li>
          <a href="">
            <span class="material-icons"> storefront </span>
            Become a seller
          </a>
        </li>
        <div class="language-selector groups-selector hidden-sm-down">
          <div class="title_header badge">English</div>
          <ul class="list-inline">
            <li @click.stop="clickFlag" class="list-inline-item current active">
              <a href=""
                ><img
                  class="img-fluid"
                  src="../../../assets/svg/flags/lang_1.jpg"
                  alt="English"
                  width="16"
                  height="11"
              /></a>
            </li>
            <li @click.stop="clickFlag" class="list-inline-item">
              <a href="#"
                ><img
                  class="img-fluid"
                  src="../../../assets/svg/flags/lang_2.jpg"
                  alt="Español"
                  width="16"
                  height="11"
              /></a>
            </li>
            <li @click.stop="clickFlag()" class="list-inline-item">
              <a href="#"
                ><img
                  class="img-fluid"
                  src="../../../assets/svg/flags/lang_3.jpg"
                  alt="Español"
                  width="16"
                  height="11"
              /></a>
            </li>
            <li @click.stop="clickFlag()" class="list-inline-item">
              <a href="#"
                ><img
                  class="img-fluid"
                  src="../../../assets/svg/flags/lang_4.jpg"
                  alt="Español"
                  width="16"
                  height="11"
              /></a>
            </li>
            <li @click.stop="clickFlag()" class="list-inline-item">
              <a href="#"
                ><img
                  class="img-fluid"
                  src="../../../assets/svg/flags/lang_5.jpg"
                  alt="Español"
                  width="16"
                  height="11"
              /></a>
            </li>
            <li @click.stop="clickFlag()" class="list-inline-item">
              <a href="#"
                ><img
                  class="img-fluid"
                  src="../../../assets/svg/flags/lang_6.jpg"
                  alt="Español"
                  width="16"
                  height="11"
              /></a>
            </li>
          </ul>
        </div>
        <div class="currency-selector groups-selector hidden-sm-down">
          <div class="title_header badge">Currency</div>
          <ul class="list-inline">
            <li>
              <a title="United Arab Emirates Dirham" rel="nofollow" href=""
                >AED</a
              >
            </li>
            <li>
              <a title="EUR" rel="nofollow" href="">EUR</a>
            </li>
            <li class="active">
              <a title="EUR" rel="nofollow" href="">USD</a>
            </li>
            <li>
              <a title="British Pound" rel="nofollow" href="">GBP</a>
            </li>
            <li>
              <a title="Polish Zloty" rel="nofollow" href="">PLN</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.myaccount_info {
  
  position: relative;
  .my_account_tiile {
    width: 46px;
    height: 46px;
    line-height: 46px;
    border-radius: 3px;
    text-align: center;
    margin-left: 15px;
    box-shadow: $btnShadow;
    cursor: pointer;
    background-color: rgba(0, 0, 0, 0.4);
    &::after {
      display: none;
    }
    .novicon_accountblock {
      width: 21px;
      height: 21px;
      background: $groupIcon;
      background-position-x: 0%;
      background-position-y: 0%;
      vertical-align: middle;
      cursor: pointer;
      background-position: -26px -87px;
    }
    &:hover {
      .novicon_accountblock {
        background-position: -104px -87px;
      }
    }
  }
  .account-list {
    border: none;
    position: absolute;
    top: 100%;
    right: 0;
    z-index: 100;
    height: auto;
    min-width: 255px !important;

    .account-list-content {
      padding: 10px 25px 27px;
      background: #fff;
      border-radius: 5px;
      -webkit-box-shadow: 1px 5px 10px rgba(0, 0, 0, 0.35);
      -moz-box-shadow: 1px 5px 10px rgba(0, 0, 0, 0.35);
      -ms-box-shadow: 1px 5px 10px rgba(0, 0, 0, 0.35);
      -o-box-shadow: 1px 5px 10px rgba(0, 0, 0, 0.35);
      box-shadow: 1px 5px 10px rgba(0, 0, 0, 0.35);
      > div {
        padding: 10px 0;
        border-bottom: 1px solid #f4f4f4;
        a {
          width: 100%;
          height: 100%;
          i {
            min-width: 16px;
            text-align: center;
            color: #9c9c9c;
            vertical-align: middle;
            font-size: 16px;
            margin-right: 15px;
            border: none;
          }
          span {
            display: inline-block;
            vertical-align: middle;
            color: #666;
            font-weight: 700;
            font-size: 10px;
            text-transform: uppercase;
          }
          &:not(:last-child) {
            border-bottom: 1px solid #f4f4f4;
          }
        }
      }
      > li {
        border-bottom: 1px solid #f4f4f4;
        padding: 10px 0;
        a {
          color: #666;
          font-weight: 700;
          font-size: 10px;
          text-transform: uppercase;
          i {
            margin-right: 5px;
          }
        }
      }

      .groups-selector {
        .title_header {
          margin-left: -5px;
          text-transform: uppercase;
          font-family: "Poppins", sans-serif;
        }
        .list-inline {
          list-style: none;
          padding: 0;
          margin-bottom: 0;
          background: #fff;
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
          }
          .active img {
            opacity: 1 !important;
            @include filter();
          }
        }
      }
    }
  }
}
</style>
