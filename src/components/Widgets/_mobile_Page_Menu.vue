<template>
    <div id="mobile-boxpage" class="mobile-boxpage d-flex hidden-md-up">
        <div class="content-boxpage col">
            <div class="box-header d-flex justify-content-between align-items-center">
                <span class="title-box">Menu</span>
                <span @click="closeMenu" class="close-box">Close</span>
            </div>
            <div class="js-top-menu box-content">
                <nav class="nov-megamenu_default clearfix">
                    <div class="nov-megamenu clearfix">
                        <ul class="menu level1">
                            <li class="item active">
                                <a href="#" title="Home">Home</a>
                            </li>
                            <li class="item group">
                                <span @click="onOpen" class="opener"></span>
                                <a href="#" title="All Demos">All Demos</a>
                                <div class="dropdown-menu" style="width: 1170px; display: none;"></div>
                            </li>
                            <li class="item gruop">
                                <span @click="onOpen" class="opener" data-bs-toggle="collapse" data-bs-target="#tryMenu" aria-expanded="false" aria-controls="tryMenu"></span>
                                    <a href="#" title="Pages">Pages</a>
                                    <div id="tryMenu" class="dropdown-menu" style="width: 1170px; display: none;">
                                        <ul class="">
                                            <li class="item col-md-3 has-sub">
                                                <span @click="onOpen" class="opener"></span>
                                                <span class="menu-title">Landing page</span>
                                                <div class="dropdown-menu" style="display: none;">
                                                    <ul class="">
                                                        <li class="item "><a href="#" title="About Us">About Us</a></li>
                                                        <li class="item "><a href="#" title="App Introduce">App Introduce</a></li>
                                                        <li class="item "><a href="#" title="Product Coming Soon">Product Coming Soon</a></li>
                                                        <li class="item "><a href="#" title="Product Single Introduce">Product Single Introduce</a></li>
                                                        <li class="item "><a href="#" title="Recruitment">Recruitment</a></li>
                                                    </ul>
                                                </div>
                                            </li>
                                            <li class="item col-md-3 has-sub">
                                                <span @click="onOpen" class="opener"></span>
                                                <span class="menu-title">Landing page</span>
                                                <div class="dropdown-menu" style="display: none;">
                                                    <ul class="">
                                                        <li class="item "><a href="#" title="Coming Soon Dark">Coming Soon Dark</a></li>
                                                        <li class="item "><a href="#" title="Coming Soon Light">Coming Soon Light</a></li>
                                                        <li class="item "><a href="#" title="404 Page Dark">404 Page Dark</a></li>
                                                        <li class="item "><a href="#" title="404 Page Light">404 Page Light</a></li>
                                                    </ul>
                                                </div>
                                            </li>
                                            <li class="item col-md-3 has-sub">
                                                <span @click="onOpen" class="opener"></span>
                                                <span class="menu-title">Inner pages</span>
                                                <div class="dropdown-menu" style="display: none;">
                                                        <ul class="">
                                                            <li class="item "><a href="#" title="Contact Us">Contact Us</a></li>
                                                            <li class="item "><a href="#" title="Contact Us Full Map">Contact Us Full Map</a></li>
                                                            <li class="item "><a href="#" title="FAQs Page">FAQs Page</a></li>
                                                            <li class="item "><a href="#" title="Size Guide">Size Guide</a></li>
                                                            <li class="item "><a href="#" title="Gallery">Gallery</a></li>
                                                        </ul>
                                                </div>
                                            </li>
                                            <li class="item col-md-3 has-sub">
                                                <span @click="onOpen" class="opener"></span>
                                                <span class="menu-title">Inner pages</span>
                                                <div class="dropdown-menu" style="display: none;">
                                                    <ul class="">
                                                        <li class="item ">
                                                            <a href="" title="Our Team">Our Team</a></li>
                                                        <li class="item "><a href="#" title="Pricing Table">Pricing Table</a></li>
                                                        <li class="item "><a href="#" title="Step To Buy">Step To Buy</a></li>
                                                        <li class="item "><a href="#" title="Testimonial">Testimonial</a></li>
                                                    </ul>
                                                </div>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            <li class="item  has-sub">
                                <span @click="onOpen" class="opener"></span>
                                <a href="#" title="Categories">Categories</a>
                                <div class="dropdown-menu" style="width: 270px; display: none;">
                                    <ul class="">
                                        <li class="item "><a href="#" title="Product Grid">Product Grid</a></li>
                                        <li class="item "><a href="#" title="Product Grid Right Sidebar">Product Grid Right Sidebar</a></li>
                                        <li class="item "><a href="#" title="Product Listing">Product Listing</a></li>
                                        <li class="item "><a href="#" title="Product Without Sidebar">Product Without Sidebar</a></li>
                                        <li class="item "><a href="#" title="Product Detail">Product Detail</a></li>
                                    </ul>
                                </div>
                            </li>
                            <li class="item  has-sub">
                                <span @click="onOpen" class="opener"></span>
                                <a href="#" title="Blog">Blog</a>
                                <div class="dropdown-menu" style="width: 270px; display: none;">
                                    <ul class="">
                                        <li class="item "><a href="#" title="Blog Listing v1">Blog Listing v1</a></li>
                                        <li class="item "><a href="#" title="Blog Listing v2">Blog Listing v2</a></li>
                                        <li class="item "><a href="#" title="Blog Listing v3">Blog Listing v3</a></li>
                                        <li class="item "><a href="#" title="Blog Listing v4">Blog Listing v4</a></li>
                                        <li class="item "><a href="#" title="Blog Detail">Blog Detail</a></li>
                                    </ul>
                                </div>
                            </li> 
                        </ul>
                    </div>
                </nav>
            </div>
        </div>
    </div>
</template>

<script>
import $ from 'jquery'
export default {
    name: "pageMenu",
    data() {
        return {
            closeMenu: function() {
                var DOC = $("#mobile-boxpage");
                DOC.toggleClass("active");
            },
            onOpen: function (e) {
                var ClassParent = e.target.parentElement.classList;
                ClassParent.toggle("ment-Active");
                e.target.classList.toggle("opened");
            }
        }
    },  
}
</script>

<style lang="scss" scoped>

    @media screen and(max-width: $maxMobile) {
        %menuTitle{
            @include fontSize(.7);
            font-family: Pop;
            font-weight: bold;
            text-transform: uppercase;
            margin-bottom: 10px;
        }
        .ment-Active > .dropdown-menu{
            display: block !important;
        }
    .mobile-boxpage{
        span{
            @extend %menuTitle;
            &.opener {
                position: absolute;
                right: 0;
                z-index: 1;
                padding: 10px;
                display: block;
                top: -2px;
                cursor: pointer;
                &::before {
                    @include MIcon("\e145");
                }
            }
            &.opened{
                &::before{
                    content: "\e931";
                    bottom: 5px;
                }
            }
        }
    }
        .mobile-boxpage{
            position: fixed;
            top: 100%;
            left: 0;
            right: 0;
            bottom: 0;
            background: #fff;
            z-index: 1000;
            padding-bottom: 48px;
            visibility: hidden;
            filter: alpha(opacity=0);
            -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=0)";
            -webkit-opacity: 0;
            -moz-opacity: 0;
            -ms-opacity: 0;
            -o-opacity: 0;
            opacity: 0;
            -webkit-transition: all 0.2s;
            -moz-transition: all 0.2s;
            -ms-transition: all 0.2s;
            -o-transition: all 0.2s;
            transition: all 0.2s;
        }
        .mobile-boxpage.active{
            visibility: visible;
            filter: alpha(opacity=100);
            -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)";
            -webkit-opacity: 1;
            -moz-opacity: 1;
            -ms-opacity: 1;
            -o-opacity: 1;
            opacity: 1;
            top: 0;
        }
        .content-boxpage {
            padding: 0;
            overflow-y: scroll;
            .box-header {
                height: 45px;
                background: rgba(255,255,255,.95);
                -webkit-box-shadow: 0 2px 5px -2px rgba(0,0,0,.2);
                -moz-box-shadow: 0 2px 5px -2px rgba(0,0,0,.2);
                -ms-box-shadow: 0 2px 5px -2px rgba(0,0,0,.2);
                -o-box-shadow: 0 2px 5px -2px rgba(0,0,0,.2);
                box-shadow: 0 2px 5px -2px rgba(0,0,0,.2);
                padding: 0 15px;
                position: relative;
                z-index: 1001;
                .title-box {
                    font-family: "Roboto",sans-serif;
                    font-weight: 700;
                    text-transform: uppercase;
                    color: #222;
                    @include fontSize(.8);
                }
                .close-box,
                .back-box{
                    font-size: 11px;
                    color: $WebGrn;
                    font-weight: 700;
                    cursor: pointer;
                }
            }
            .box-content {
                padding: 15px;
                .nov-megamenu{
                    .dropdown-menu {
                        position: relative;
                        width: 100% !important;
                        top: inherit;
                        float: none;
                        left: inherit;
                        border: none;
                        padding: 0;
                    }
                    .menu {
                        padding-left: 0;
                        margin-bottom: 0;
                        list-style: none;
                        > li{
                            position: relative;
                            padding: 0;
                            border-bottom: 1px dotted #dfdfdf;
                            display: block;
                            font-size: 1.6rem;
                             a {
                                @extend %menuTitle;
                            }
                            > a {
                                position: relative;
                                z-index: 2;
                            }
                            li:not(:last-child) {
                                border-bottom: 1px dotted #dfdfdf;
                            }
                        }
                        [class*=" col-"] {
                            padding-left: 0;
                            padding-right: 0;
                        }
                        li.has-sub,
                        li.group{
                            position: relative;
                            .dropdown-menu {
                                > ul{
                                    padding-left: 10px;
                                    padding-top: 10px;
                                }
                            }
                        }

                        li.group {
                            .dropdown-menu {
                                max-width: 100%;
                        }

                    }
                    
                }
            }
        }
    }
}
</style>