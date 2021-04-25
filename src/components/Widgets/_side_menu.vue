<template>
    <div id="mobile_top_menu_widget" class="mobile_top_menu hidden-md-up">
        <div class="content">
            <div id="verticalmenu" class="verticalmenu" role="navigation">
                <div class="title_vertical toggle-vertical">
                    <i class="material-icons">subject</i>
                    <span >All Categories</span>
                </div>
                <ul class="menu level1">
                    <li class="item parent group" title="Home">
                        <a href="#" title="Home appliances">
                        <div class="hasicon img-icon">
                            <img class="hasicon nov-icon img-fluid" src="../../assets/svg/menu/ic1.png" alt="icon-vertical">
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
                                <img alt="nemu" class="img-fluid" src="../../assets/images/menu/bg-v-1.jpg">
                                </p>
                            </div>
                            </li>
                        </ul>
                        </div>
                    </li>
                    <li class="item  parent group" title="Electronics">
                        <a href="#" title="hasicon appliances">
                        <div class="hasicon img-icon">
                            <img class="hasicon nov-icon img-fluid" src="../../assets/svg/menu/v-2.png" alt="icon-vertical">
                        </div>
                        <span class="badge">
                            Electronics
                        </span>
                        </a>
                    </li>
                    <li class="item parent group" title="Audio equipments">
                        <a href="#" title="hasicon appliances">
                        <div class="hasicon img-icon">
                            <img class="hasicon nov-icon img-fluid" src="../../assets/svg/menu/v-3.png" alt="icon-vertical">
                        </div>
                        <span class="badge">
                            Audio equipments
                        </span>
                        </a>
                    </li>
                    <li class="item parent group" title="Smartphone & Tablets">
                        <a href="#" title="hasicon appliances">
                        <div class="hasicon img-icon">
                            <img class="hasicon nov-icon img-fluid" src="../../assets/svg/menu/v-4.png" alt="icon-vertical">
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
                                <img alt="nemu" class="img-fluid" src="../../assets/images/menu/ios.jpg">
                                </p>
                            </div>
                            </li>
                        </ul>
                        </div>
                    </li>
                    <li class="item parent group" title="Game Devices">
                        <a href="#" title="hasicon appliances">
                        <div class="hasicon img-icon">
                            <img class="hasicon nov-icon img-fluid" src="../../assets/svg/menu/ic2.png" alt="icon-vertical">
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
                                    <img alt="" class="img-fluid" src="../../assets/images/menu/playstation.png">
                                </p>
                                </div>
                            </li>
                        </ul>
                        </div>
                    </li>
                    <li class="item parent group" title="Security Devices">
                        <a href="#" title="hasicon appliances">
                        <div class="hasicon img-icon">
                            <img class="hasicon nov-icon img-fluid" src="../../assets/svg/menu/ic4.png" alt="icon-vertical">
                        </div>
                        <span class="badge">
                            Security Devices
                        </span>
                        </a>
                    </li>
                    <li class="item parent group" title="Smart Home">
                        <a href="#" title="hasicon appliances">
                        <div class="hasicon img-icon">
                            <img class="hasicon nov-icon img-fluid" src="../../assets/svg/menu/ic5.png" alt="icon-vertical">
                        </div>
                        <span class="badge">
                            Smart Home
                        </span>
                        </a>
                    </li>
                    <li class="item parent group" title="Computers & Networking">
                        <a href="#" title="Computers & Networking">
                        <div class="hasicon img-icon">
                            <img class="hasicon nov-icon img-fluid" src="../../assets/svg/menu/ic3.png" alt="icon-vertical">
                        </div>
                        <span class="badge">
                            Computers & Networking
                        </span>
                        </a>
                    </li>
                    <li class="item parent group" title="Laptops & Accessories">
                        <a href="#" title="Laptops & Accessories">
                        <div class="hasicon img-icon">
                            <img class="hasicon nov-icon img-fluid withOpacity" src="../../assets/svg/menu/v-9.png" alt="icon-vertical">
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
                                    <img alt="" class="img-fluid" src="../../assets/images/menu/laptop2.png">
                                </p>
                                </div>
                            </li>
                        </ul>
                        </div>
                    </li>
                    <li class="item parent group toggleable" title="Office Devices">
                        <a href="#" title="Office Devices">
                        <div class="hasicon img-icon">
                            <img class="hasicon nov-icon img-fluid" src="../../assets/svg/menu/v-10.png" alt="icon-vertical">
                        </div>
                        <span class="badge">
                            Office Devices
                        </span>
                        </a>
                    </li>
                    <li class="item parent group toggleable" title="Cameras & Photo">
                        <a href="#" title="Cameras & Photo">
                        <div class="hasicon img-icon">
                            <img class="hasicon nov-icon img-fluid" src="../../assets/svg/menu/v-7.png" alt="icon-vertical">
                        </div>
                        <span class="badge">
                            Cameras & Photo
                        </span>
                        </a>
                    </li>
                    <li class="item parent group toggleable" title="Television - Audiovisual">
                        <a href="#" title="Television - Audiovisual">
                        <div class="hasicon img-icon">
                            <img class="hasicon nov-icon img-fluid" src="../../assets/svg/menu/v-6.png" alt="icon-vertical">
                        </div>
                        <span class="badge">
                            Television - Audiovisual
                        </span>
                        </a>
                    </li>
                    <li class="item parent group toggleable" title="Camera Camcorder">
                        <a href="#" title="Camera Camcorder">
                        <div class="hasicon img-icon">
                            <img class="hasicon nov-icon img-fluid" src="../../assets/svg/menu/v-7.png" alt="icon-vertical">
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
</template>

<script>
import $ from 'jquery';
export default {
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
            console.log(e);
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
    },
}
</script>

<style lang="scss" scoped>
    .mobile_top_menu{
        .verticalmenu .menu > li 
        {
        .show-sub{
            &::before{
              background-image: url(../../assets/svg/listBefore.png);
            }
        }
           > a {
                padding: 17px 0 17px 55px;

                font-size: 11px;
                position: relative;
                display: flex;
                text-align: center;
                right: 12px;
                text-overflow: ellipsis;
                font-family: Pop;
                overflow: hidden;
                top: 5px;
                @include transition();
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
                }
                span{
                    @include fontSize(.7);
                }
            }
            >.dropdown-menu {
                position: relative;
                display: block;
                top: inherit;
                left: inherit;
                border: none;
                padding: 0;
                display: none;
                float: none;
                ul {
                    padding: 0;
                    list-style: none;
                    span{
                        display: inline-block;
                        padding: 0.25em 0.4em;
                        font-size: 75%;
                        font-weight: 700;
                        line-height: 1;
                        text-align: center;
                        white-space: nowrap;
                        vertical-align: baseline;
                        border:none;
                        transition: color 0.15s ease-in-out, 
                        background-color 0.15s ease-in-out, 
                        border-color 0.15s ease-in-out, 
                        box-shadow 0.15s ease-in-out;
                        display: inline-block;
                        @include fontSize(0.6);
                    }
                    .menu-title{
                        @include fontSize(0.7);
                        margin-top: 10px;
                        margin-bottom: 0;
                    }
                }
            }
        }
        
        @media screen and(max-width: $maxMobile) {
            overflow: hidden;
            position: fixed;
            z-index: $topMenuZ;
            visibility: hidden;
            filter: alpha(opacity=0);
            @include opacity(0);
            left: 0;
            top: 0;
            bottom: 0;
            -webkit-overflow-scrolling: touch;
            width: 270px;
            @include transform(translateX(-270px));
            background: #fff;
            -webkit-transition: all 0.33s cubic-bezier(.694,.0482,.335,1);
            -moz-transition: all 0.33s cubic-bezier(.694,.0482,.335,1);
            -ms-transition: all 0.33s cubic-bezier(.694,.0482,.335,1);
            -o-transition: all 0.33s cubic-bezier(.694,.0482,.335,1);
            transition: all 0.33s cubic-bezier(.694,.0482,.335,1);
            -webkit-overflow-scrolling: touch;
            -webkit-box-shadow: 0 0 10px 5px rgba(0,0,0,.2);
            -moz-box-shadow: 0 0 10px 5px rgba(0,0,0,.2);
            -ms-box-shadow: 0 0 10px 5px rgba(0,0,0,.2);
            -o-box-shadow: 0 0 10px 5px rgba(0,0,0,.2);
            box-shadow: 0 0 10px 5px rgba(0,0,0,.2);

            

            .content {
                position: absolute;
                top: 0;
                bottom: 0;
                left: 0;
                right: 0;
                overflow: auto;
                overflow-x: hidden;
                -webkit-overflow-scrolling: touch;
                padding-top: 20px;
                padding-bottom: 20px;

                .verticalmenu {
                    -webkit-box-shadow: 0 0 10px rgba(0,0,0,.1);
                    -moz-box-shadow: 0 0 10px rgba(0,0,0,.1);
                    -ms-box-shadow: 0 0 10px rgba(0,0,0,.1);
                    -o-box-shadow: 0 0 10px rgba(0,0,0,.1);
                    box-shadow: 0 0 10px rgba(0,0,0,.1);
                }
                .verticalmenu {
                    -webkit-box-shadow: none;
                    -moz-box-shadow: none;
                    -ms-box-shadow: none;
                    -o-box-shadow: none;
                    box-shadow: none;

                    .title_vertical {
                        font-weight: 600;
                        color: $WebGrn;
                        font-family: Pop;
                        cursor: pointer;

                        i {
                            font-size: 24px;
                            margin-left: 15px;
                            margin-right: 35px;
                            vertical-align: middle;
                        }
                    }
                    .menu{
                        float: inherit !important;
                        margin: 0;
                        left: 0 !important;
                        padding: 0;
                        .dropdown-menu li img{
                            position: relative;
                            right: 30px;
                            width: 100%;
                            border-bottom: 2px solid #ddd;
                        }
                    }
                }
            }
        }

        @media screen and(max-width: $maxIpad) {
            @include transform(translateX(-270px));
            display: block !important;
            width: 270px;

            .menu {
                float: inherit !important;
                margin: 0;
                left: 0 !important;
                li{
                    float: none;
                    clear: both;
                    position: relative !important;
                    width: 100% !important;
                    left: 10px;
                    a {
                        float: none;
                        clear: both;
                        -webkit-box-shadow: none !important;
                        -moz-box-shadow: none !important;
                        -ms-box-shadow: none !important;
                        -o-box-shadow: none !important;
                        box-shadow: none !important;
                    }
                    .dropdown-menu {
                        z-index: 300 !important;
                        visibility: visible !important;
                        opacity: 1 !important;
                        display: none;
                        position: static !important;
                        width: 100% !important;
                        background-color: #fff !important;
                        -webkit-box-shadow: none;
                        -moz-box-shadow: none;
                        -ms-box-shadow: none;
                        -o-box-shadow: none;
                        box-shadow: none;
                        overflow: hidden;
                    }
                    .menu-title {
                        color: #666;
                        margin-bottom: 15px;
                        font-weight: 600;
                        display: none;
                    }
                    > span.menu-title
                    {
                        padding: 10px 0 !important;
                        border-bottom: 1px solid #CCC;
                        font-size: 14px;
                    }
                }
                >li{
                    .dropdown-menu {
                        padding: 0 10px;
                    }
                }
                // li.group{
                //     display: none;
                // }
            }
            
        }
        
        .verticalmenu 
        {
            .menu 
            {
                > li > 
                {
                    .dropdown-menu ul li a {
                        font-family: Pop;
                        font-size: 1.3rem;
                        padding: 10px 0;
                        display: block;
                        position: relative;
                        color: #848484;
                    }
                }
                .more {
                    cursor: pointer;
                    padding-left: 45px;
                    font-weight: 700;
                    position: relative;
                    text-transform: uppercase;
                    font-size: 15px;
                    color: $WebGrn;
                    min-height: 40px;
                    font-family: Pop;
                    
                    &::before{
                        content: "\f0d8";
                        position: absolute;
                        top: 35%;
                        transform: translateY(-50%);
                        left: 23px;
                        font: normal normal normal 14px/1 FontAwesome;
                            font-style: normal;
                            font-size: 14px;
                        font-size: 17px;
                        color: $WebGrn;
                        font-style: normal;

                    }
                    &.less{
                        &::before{
                            content: "\f0d7";
                        }
                    }
                }
            }
            
        }
        &.active{
           @extend %activeMenu;
        }
    }
</style>