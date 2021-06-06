<template>
  <div id="verticalmenu-content" class="verticalmenu-content has-showmore">
    <div class="_desktop_verticalmenu">
      <div class="box-content block_content">
        <div class="verticalmenu">
          <div class="title_vertical toggle-vertical act">
            <div @click="toggleList" class="title_vertical toggle-vertical act">
              <i class="material-icons">subject</i>
              <span>All Categories</span>
            </div>
            <ul class="menu level1">
              <li class="item parent group" title="Home">
                <a href="#" title="Home appliances">
                  <div class="hasicon img-icon">
                    <img class="hasicon nov-icon img-fluid" src="../../../assets/svg/menu/ic1.png" alt="icon-vertical">
                  </div>
                  <span class="badge">
                    Home appliances
                  </span>
                </a>
                <span @click="openMenu" class="show-sub fa-active-sub"></span>
                <div class="dropdown-menu" style="width:calc(880px + 10px)">
                  <ul class="row">
                    <li class="item col-xl-3 xol-md-4">
                      <span class="menu-title">Washing machine</span>
                      <div class="menu-content">
                        <ul>
                          <li><a href="#"><span>Door washer on</span></a></li>
                          <li><a href="#"><span>Horizontal door washer</span></a></li>
                          <li><a href="#"><span>Hand washing machine</span></a></li>
                          <li><a href="#"><span>LG washing machine</span></a></li>
                          <li><a href="#"><span>Elextronic washing machine</span></a></li>
                          <li><a href="#"><span>SamSung washing machine</span></a></li>
                          <li><a href="#"><span>Toshiba washing machine</span></a></li>
                          <li><a href="#"><span>Sharp washing machine</span></a></li>
                          <li><a href="#"><span>Inverte washing machine</span></a></li>
                        </ul>
                      </div>
                    </li>
                    <li class="item col-xl-3 xol-md-4">
                      <span class="menu-title">Houseware</span>
                      <div class="menu-content">
                        <ul>
                          <li><a href="#"><span>Iron</span></a></li>
                          <li><a href="#"><span>Steam iron</span></a></li>
                          <li><a href="#"><span>Microwave</span></a></li>
                          <li><a href="#"><span>Electric fan</span></a></li>
                          <li><a href="#"><span>Ceiling fans</span></a></li>
                          <li><a href="#"><span>Steam fan</span></a></li>
                          <li><a href="#"><span>Dryer</span></a></li>
                        </ul>
                      </div>
                    </li>
                    <li class="item col-xl-6 xol-md-4">
                      <div class="menu-content">
                        <p>
                          <img alt="nemu" class="img-fluid" src="../../../assets/images/menu/bg-v-1.jpg">
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
              </li>
              <li class="item  parent group" title="Electronics">
                <a href="#" title="hasicon appliances">
                  <div class="hasicon img-icon">
                    <img class="hasicon nov-icon img-fluid" src="../../../assets/svg/menu/v-2.png" alt="icon-vertical">
                  </div>
                  <span class="badge">
                    Electronics
                  </span>
                </a>
              </li>
              <li class="item parent group" title="Audio equipments">
                <a href="#" title="hasicon appliances">
                  <div class="hasicon img-icon">
                    <img class="hasicon nov-icon img-fluid" src="../../../assets/svg/menu/v-3.png" alt="icon-vertical">
                  </div>
                  <span class="badge">
                    Audio equipments
                  </span>
                </a>
              </li>
              <li class="item parent group" title="Smartphone & Tablets">
                <a href="#" title="hasicon appliances">
                  <div class="hasicon img-icon">
                    <img class="hasicon nov-icon img-fluid" src="../../../assets/svg/menu/v-4.png" alt="icon-vertical">
                  </div>
                  <span class="badge">
                    Smartphone & Tablets
                  </span>
                </a>
                <span @click="openMenu" class="show-sub fa-active-sub"></span>
                <div class="dropdown-menu" style="width:calc(880px + 10px)">
                  <ul class="row">
                    <li class="item col-xl-3 xol-md-4">
                      <span class="menu-title">smartphones</span>
                      <div class="menu-content">
                        <ul>
                          <li><a href="#"><span>iPhone</span></a></li>
                          <li><a href="#"><span>Samsung</span></a></li>
                          <li><a href="#"><span>Sony</span></a></li>
                          <li><a href="#"><span>Huawei</span></a></li>
                          <li><a href="#"><span>Xiaomi</span></a></li>
                          <li><a href="#"><span>Nokia</span></a></li>
                        </ul>
                      </div>
                    </li>
                    <li class="item col-xl-3 xol-md-4">
                      <span class="menu-title">Table</span>
                      <div class="menu-content">
                        <ul>
                          <li><a href="#"><span>iPad pro</span></a></li>
                          <li><a href="#"><span>iPad air</span></a></li>
                          <li><a href="#"><span>Samsung</span></a></li>
                          <li><a href="#"><span>Sony</span></a></li>
                          <li><a href="#"><span>Huawei</span></a></li>
                        </ul>
                      </div>
                    </li>
                    <li class="item col-xl-6 xol-md-4">
                      <div class="menu-content">
                        <p>
                          <img alt="nemu" class="img-fluid" src="../../../assets/images/menu/ios.jpg">
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
              </li>
              <li class="item parent group" title="Game Devices">
                <a href="#" title="hasicon appliances">
                  <div class="hasicon img-icon">
                    <img class="hasicon nov-icon img-fluid" src="../../../assets/svg/menu/ic2.png" alt="icon-vertical">
                  </div>
                  <span class="badge">
                    Game Devices
                  </span>
                </a>
                <span @click="openMenu" class="show-sub fa-active-sub"></span>
                <div class="dropdown-menu" style="width:calc(880px + 10px)">
                  <ul>
                    <li class="item col-lg-8 p-0 group">
                      <div class="menu-content">
                        <div class="row m-0 no-flow">
                          <div class="col-lg-6">
                            <span class="menu-title">
                              Computer Speakers
                            </span>
                            <ul class="list-unstyled">
                              <li><a href="#"><span>Edifier Products</span></a></li>
                              <li><a href="#"><span>Logitech</span></a></li>
                              <li><a href="#"><span>Sarotech Products</span></a></li>
                            </ul>
                            <span class="menu-title">
                              Computer Speakers
                            </span>
                            <ul class="list-unstyled mt-20">
                              <li><a href="#"><span>Edifier Products</span></a></li>
                              <li><a href="#"><span>Logitech</span></a></li>
                              <li><a href="#"><span>Sarotech Products</span></a></li>
                            </ul>
                          </div>
                          <div class="col-lg-6">
                            <li class="menu-title">Home theatre system</li>
                            <ul class="list-unstyled">
                              <li><a href="#"><span>Desktop DAC HeadAmplifier</span></a></li>
                              <li><a href="#"><span>Portable DAC HeadAmplifier</span></a></li>
                              <li><a href="#"><span>Audio Cable</span></a></li>
                              <li><a href="#"><span>Headphone</span></a></li>
                              <li><a href="#"><span>Speaker</span></a></li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li class="item col-lg-4">
                        <div class="menu-content">
                          <p>
                            <img alt="" class="img-fluid" src="../../../assets/images/menu/playstation.png">
                          </p>
                        </div>
                    </li>
                  </ul>
                </div>
              </li>
              <li class="item parent group" title="Security Devices">
                <a href="#" title="hasicon appliances">
                  <div class="hasicon img-icon">
                    <img class="hasicon nov-icon img-fluid" src="../../../assets/svg/menu/ic4.png" alt="icon-vertical">
                  </div>
                  <span class="badge">
                    Security Devices
                  </span>
                </a>
              </li>
              <li class="item parent group" title="Smart Home">
                <a href="#" title="hasicon appliances">
                  <div class="hasicon img-icon">
                    <img class="hasicon nov-icon img-fluid" src="../../../assets/svg/menu/ic5.png" alt="icon-vertical">
                  </div>
                  <span class="badge">
                    Smart Home
                  </span>
                </a>
              </li>
              <li class="item parent group" title="Computers & Networking">
                <a href="#" title="Computers & Networking">
                  <div class="hasicon img-icon">
                    <img class="hasicon nov-icon img-fluid" src="../../../assets/svg/menu/ic3.png" alt="icon-vertical">
                  </div>
                  <span class="badge">
                    Computers & Networking
                  </span>
                </a>
              </li>
              <li class="item parent group" title="Laptops & Accessories">
                <a href="#" title="Laptops & Accessories">
                  <div class="hasicon img-icon">
                    <img class="hasicon nov-icon img-fluid withOpacity" src="../../../assets/svg/menu/v-9.png" alt="icon-vertical">
                  </div>
                  <span class="badge">
                    Laptops & Accessories
                  </span>
                </a>
                <span @click="openMenu" class="show-sub fa-active-sub"></span>
                <div class="dropdown-menu" style="width:calc(880px + 10px)">
                  <ul>
                    <li class="item col-lg-8 p-0 group">
                      <div class="menu-content">
                        <div class="row m-0 no-flow">
                          <div class="col-lg-6">
                            <span class="menu-title">
                              Computer Speakers
                            </span>
                            <ul class="list-unstyled">
                              <li><a href="#"><span>Edifier Products</span></a></li>
                              <li><a href="#"><span>Logitech</span></a></li>
                              <li><a href="#"><span>Sarotech Products</span></a></li>
                            </ul>
                            <span class="menu-title">
                              Computer Speakers
                            </span>
                            <ul class="list-unstyled mt-20">
                              <li><a href="#"><span>Edifier Products</span></a></li>
                              <li><a href="#"><span>Logitech</span></a></li>
                              <li><a href="#"><span>Sarotech Products</span></a></li>
                            </ul>
                          </div>
                          <div class="col-lg-6">
                            <li class="menu-title">Home theatre system</li>
                            <ul class="list-unstyled">
                              <li><a href="#"><span>Desktop DAC HeadAmplifier</span></a></li>
                              <li><a href="#"><span>Portable DAC HeadAmplifier</span></a></li>
                              <li><a href="#"><span>Audio Cable</span></a></li>
                              <li><a href="#"><span>Headphone</span></a></li>
                              <li><a href="#"><span>Speaker</span></a></li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li class="item col-lg-4">
                        <div class="menu-content">
                          <p>
                            <img alt="" class="img-fluid" src="../../../assets/images/menu/laptop2.png">
                          </p>
                        </div>
                    </li>
                  </ul>
                </div>
              </li>
              <li class="item parent group toggleable" title="Office Devices">
                <a href="#" title="Office Devices">
                  <div class="hasicon img-icon">
                    <img class="hasicon nov-icon img-fluid" src="../../../assets/svg/menu/v-10.png" alt="icon-vertical">
                  </div>
                  <span class="badge">
                    Office Devices
                  </span>
                </a>
              </li>
              <li class="item parent group toggleable" title="Cameras & Photo">
                <a href="#" title="Cameras & Photo">
                  <div class="hasicon img-icon">
                    <img class="hasicon nov-icon img-fluid" src="../../../assets/svg/menu/v-7.png" alt="icon-vertical">
                  </div>
                  <span class="badge">
                    Cameras & Photo
                  </span>
                </a>
              </li>
              <li class="item parent group toggleable" title="Television - Audiovisual">
                <a href="#" title="Television - Audiovisual">
                  <div class="hasicon img-icon">
                    <img class="hasicon nov-icon img-fluid" src="../../../assets/svg/menu/v-6.png" alt="icon-vertical">
                  </div>
                  <span class="badge">
                    Television - Audiovisual
                  </span>
                </a>
              </li>
              <li class="item parent group toggleable" title="Camera Camcorder">
                <a href="#" title="Camera Camcorder">
                  <div class="hasicon img-icon">
                    <img class="hasicon nov-icon img-fluid" src="../../../assets/svg/menu/v-7.png" alt="icon-vertical">
                  </div>
                  <span class="badge">
                    Camera Camcorder
                  </span>
                </a>
              </li>
              <li @click="seeMore" class="more item less">
                <span class="badge">see more</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import $ from 'jquery'
  export default {
    name: "Vertical-Menu-Content",
    methods: {
      seeMore: function () { 
        var e = $(".more");
        var span = $(".more span");
        var toggleable = $(".menu .toggleable");
        e.toggleClass("less");
        
        if (e.hasClass("less")) {
          toggleable.slideUp();
          span.text("see more");
        }else{
          toggleable.slideDown();
          span.text("hide");
        }

      },
      openMenu: function(e) {
        e.target.parentNode.classList.toggle("openMenu");
        // e.target.nextSibling.className.slideDown();
        $(".dropdown-menu").each(function () { 
            if ($(this).parent().hasClass("openMenu")) {
                $(this).slideDown();
            }else{
                $(this).slideUp();
            }
        });
      },
      toggleList: function (){
        $(".verticalmenu .menu.level1").slideToggle();
      }
    },
  }
</script>

<style lang="scss" scoped>
  .verticalmenu-content {
    position: relative;
    @media screen and (min-width: $minWidth) and (max-width: 1799px) {
      width: 16.666667%;
      padding-right: 25px;
    }
    .verticalmenu {
      @media screen and (min-width: $maxIpad) {
        background-color: $f;
      }
      @media screen and (min-width: $maxIpad) {
        position: relative;
      }
      background-color: transparent;
      .title_vertical {
        font-weight: 600;
        color: $WebGrn;
        font-family: "Poppins", sans-serif;
        cursor: pointer;
        ul{
          @media screen and (max-width: $mxIpad) {
            height: 100%;
          }
        }
        @media screen and (min-width: $maxIpad) {
          min-width: 270px;
        }
        @media screen and (min-width: $minWidth) and (max-width: 1799px) {
          min-width: 100%;
        }
        text-transform: uppercase;
        font-size: 14px;
        font-weight: 700;
        background: $WebGrn;
        line-height: 60px;
        height: 60px;
        color: $f;
        i {
          font-size: 24px;
          margin-left: 15px;
          margin-right: 35px;
          vertical-align: middle;
          margin-left: 0;
          margin-right: 15px;
          @media screen and (min-width: $minWidth) and (max-width: 1799px) {
            margin: 0 auto;
            margin-right: 10px;
            top: 0px;
            margin-left: 15px;
          }
        }
        span{
          font-size: 13px;
        }
      }
      .menu.level1 {
        position: absolute;
        width: 270px;
        z-index: 999;
        border: 2px solid $WebGrn;
        border-top: none;
        @media screen and (min-width: $maxIpad) {
          position: absolute;
          width: 270px;
          z-index: 999;
        }
        @media screen and (min-width: $minWidth) and (max-width: 1799px){
          width: 100%;
          height: auto;
        }
        background: $f;
        border-top: none;
        top: 60px;
        -webkit-box-shadow: 0 10px 1rem rgba(0,0,0,.15);
        -moz-box-shadow: 0 10px 1rem rgba(0,0,0,.15);
        -ms-box-shadow: 0 10px 1rem rgba(0,0,0,.15);
        -o-box-shadow: 0 10px 1rem rgba(0,0,0,.15);
        box-shadow: 0 10px 1rem rgba(0,0,0,.15);
      }
      .menu {
        list-style: none;
        padding: 0;
        margin-bottom: 0;
         li {
          width: 100%;
          &:not(:first-child){
            @media screen and (min-width: $minIpad) {
              border-top: 1px solid $liBorder;
            }
          }
          
        }
        .show-sub{
          
            &::before{
              background-image: url(../../../assets/svg/listBefore.png);
            }
        }
        
        .more{
          cursor: pointer;
          padding-left: 45px;
          font-weight: 700;
          position: relative;
          text-transform: uppercase;
          font-size: 10px;
          color: $WebGrn;
          min-height: 40px;
          &::before{
            content: "\f0d8";
            position: absolute;
            top: 45%;
            -webkit-transform: translateY(-50%);
            -ms-transform: translateY(-50%);
            transform: translateY(-50%);
            left: 23px;
            font: normal normal normal 14px/1 FontAwesome;
            font-size: 20px;
            color: $WebGrn;
            font-style: normal;
          }
          span{
            display: block;
            font-size: 11px;
            text-align: $textAlign;
            position: relative;
            top: 3px;
            padding: 10px 0 10px 22px;
          }
        }
        .more.less{
          &::before{
            content: "\f0d7";
            color: $WebGrn;
          }
        }
        .item a{
          font-size: 1.2rem;
          font-weight: 400;
          display: block;
          position: relative;
          padding: 17px 0 17px 55px;
          color: #666;
          text-transform: capitalize;
          font-weight: 500;
          line-height: 1.5rem;
          @media screen and (min-width: $minIpad) {
            padding: 11px 0 10px 68px;
          }
          @media screen and (min-width: $minWidth) and (max-width: 1799px) {
            padding: 11px 0 12px 55px !important;
          }
          @media screen and (min-width: $minWidth) and (max-width: 1439px) {
            padding: 10px 0 11px 55px !important;
          }
          .img-icon {
              position: absolute;
              width: 26px;
              height: 22px;
              left: 15px;
              top: 50%;
              -webkit-transform: translateY(-50%);
              -ms-transform: translateY(-50%);
              transform: translateY(-50%);
              text-align: center;

              @media screenand and (min-width: $minIpad){
                position: absolute;
                width: 26px;
                height: 22px;
                left: 15px;
                top: 50%;
                -webkit-transform: translateY(-50%);
                -ms-transform: translateY(-50%);
                transform: translateY(-50%);
                text-align: center;
              }
          }

          span{
            font-size: 11px;
            position: relative;
            display: flex;
            text-align: center;
            right: 12px;
            text-overflow: ellipsis;
            overflow: hidden;
            top: 5px;
            @include transition(.5);
          }
          &:hover {
              span{
              color: $WebGrn;
            }
            text-decoration-color: $WebGrn;
          }
          @include transition(1);
        }
        
        .item .dropdown-menu{
          background-color: #666;
          position: relative;
            display: block;
            top: inherit;
            left: inherit;
            border: none;
            padding: 0;
                padding-left: 0px;
            display: none;
            float: none;
            @media screen and(min-width: $maxIpad) {
              display: block !important;
            }
            @media screen and(min-width: $maxIpad) {
              top: 20px;
              padding-left: 10px;
              margin-top: 0;
              border: none;
              position: absolute;
              -webkit-border-radius: 0;
              -moz-border-radius: 0;
              -ms-border-radius: 0;
              -o-border-radius: 0;
              border-radius: 0;
              display: block;
              filter: alpha(opacity=0);
              -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=0)";
              -webkit-opacity: 0;
              -moz-opacity: 0;
              -ms-opacity: 0;
              -o-opacity: 0;
              opacity: 0;
              visibility: hidden;
              -webkit-transition: all 0.4s linear;
              -moz-transition: all 0.4s linear;
              -ms-transition: all 0.4s linear;
              -o-transition: all 0.4s linear;
              transition: all 0.4s linear;
              background: transparent;
              -webkit-box-shadow: none;
              -moz-box-shadow: none;
              -ms-box-shadow: none;
              -o-box-shadow: none;
              box-shadow: none;
            }
            @media screen and(min-width: $minIpad) and(min-width: $minWidth){
              left: 180px;
            }
            @media screen and(min-width: $minIpad) and(min-width: $maxIpad){
              min-height: 100%;
            }
            @media screen and(max-width: $mxIpad) and(min-width: $minIpad){
                background: none !important;
                padding-top: 0;
                padding-bottom: 30px !important;
                -webkit-transition: none;
                -moz-transition: none;
                -ms-transition: none;
                -o-transition: none;
                transition: none;
            }
            @media screen and (max-width: $mxIpad) {
                z-index: 300 !important;
                visibility: visible !important;
                opacity: 1 !important;
                display: none;
                position: static !important;
                width: 100% !important;
                background-color: #fff !important;
                -ms-box-shadow: none;
                -o-box-shadow: none;
                box-shadow: none;
                overflow: hidden;
                
                transition:none !important;

                border: none;
                padding: 0;
                display: none;
                float: none;
            }
            @include transition(.5);
           > ul{
            padding: 10px !important;
            list-style: none;
            @media screen and (min-width: $minIpad){
              padding: 4px 20px 17px;
              background-color: $f !important;
              -webkit-box-shadow: 0 0 7px rgba(0,0,0,.15);
              -moz-box-shadow: 0 0 7px rgba(0,0,0,.15);
              -ms-box-shadow: 0 0 7px rgba(0,0,0,.15);
              -o-box-shadow: 0 0 7px rgba(0,0,0,.15);
              box-shadow: 0 0 7px rgba(0,0,0,.15);
              min-height: 100%;
            }
            @media screen and (min-width: $maxIpad){
              display: -webkit-box;
              display: -moz-box;
              display: box;
              display: -webkit-flex;
              display: -moz-flex;
              display: -ms-flexbox;
              display: flex;
              -webkit-flex-wrap: wrap;
              -moz-flex-wrap: wrap;
              -ms-flex-wrap: wrap;
              flex-wrap: wrap;
              padding: 30px;
            }
            > li{
              border: none !important;
            }
          }
          ul{
            padding: 0;
            list-style: none;
          }
          .menu-title {
            @media screen and(min-width: 768px) {
              color: #222;
              font-size: .8rem;
              font-weight: 900;
              font-family: "Roboto",sans-serif;
              display: block;
              padding-bottom: 0;
              text-transform: uppercase;
            }
          }
          
          li a {
            font-family: "Roboto",sans-serif;
            font-size: 1.3rem;
            padding: 10px 0;
            display: block;
            position: relative;
            color: #848484;
            padding-left: 15px !important;
          }
        }
        .item {
          &:hover .dropdown-menu{
            visibility: visible;
            opacity: 1;
          }
        }
       }
    }
    @media screen and(max-width: $maxIpad) {
      width: 270px;
      filter: alpha(opacity=0);
      -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=0)";
      -webkit-opacity: 0;
      -moz-opacity: 0;
      -ms-opacity: 0;
      -o-opacity: 0;
      opacity: 0;
      left: -270px;
      -webkit-transition: all 0.3s linear;
      -moz-transition: all 0.3s linear;
      -ms-transition: all 0.3s linear;
      -o-transition: all 0.3s linear;
      transition: all 0.3s linear;
      position: fixed;
      top: 0 !important;
      z-index: $topMenuZ !important;
      height: 100%;
    }
    &.active{
      @extend %activeVerticalmenu;
    }
  }
</style>
