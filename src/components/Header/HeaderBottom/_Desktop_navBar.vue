<template>
    <div class="contentsticky_menu _descTop_navBar">
        <nav class="nov-megamenu_default clearfix">
            <div class="nov-megamenu clearfix">
                <ul class="menu level1">
                    <li class="item  active">
                        <router-link to="/" title="Home">Home</router-link>
                    </li>
                    <li @click="setActive" class="item  group d-flex">
                        <span class="opener"></span>
                        <a href="#" title="All Demos">All Demos</a>
                        <div class="dropdown-menu" style="width:1170px"></div>
                    </li>
                    <li class="item  group d-flex">
                        <span class="opener"></span>
                        <a href="#" title="All Page">pages</a>
                        <div class="dropdown-menu" style="width:1170px">
                            <ul>
                                <li class="item col-md-3 has-sub">
                                    <span class="menu-title">Landing page</span>
                                    <div class="dropdown-menu">
                                        <ul class="">
                                            <li class="item "><router-link to="/about" title="About Us">About Us</router-link></li>
                                            <li class="item "><a href="" title="App Introduce">App Introduce</a></li>
                                            <li class="item "><a href="" title="Product Coming Soon">Product Coming Soon</a></li>
                                            <li class="item "><a href="" title="Product Single Introduce">Product Single Introduce</a></li>
                                            <li class="item "><a href="" title="Recruitment">Recruitment</a></li>
                                        </ul>
                                    </div>
                                </li>
                                <li class="item col-md-3 has-sub">
                                    <span class="opener">
                                    </span><span class="menu-title">Landing page</span>
                                    <div class="dropdown-menu">
                                        <ul class=""><li class="item "><a href="#" title="Coming Soon Dark">Coming Soon Dark</a></li>
                                            <li class="item "><a href="#" title="Coming Soon Light">Coming Soon Light</a></li>
                                            <li class="item "><a href="#" title="404 Page Dark">404 Page Dark</a></li>
                                            <li class="item "><a href="#" title="404 Page Light">404 Page Light</a></li>
                                        </ul>
                                    </div>
                                </li>
                               <li class="item col-md-3 has-sub">
                                       <span class="opener">
                                       </span><span class="menu-title">Inner pages</span>
                                    <div class="dropdown-menu"><ul class=""><li class="item "><a href="contact-us" title="Contact Us">Contact Us</a></li>
                                            <li class="item "><a href="#" title="Contact Us Full Map">Contact Us Full Map</a></li>
                                            <li class="item "><a href="#" title="FAQs Page">FAQs Page</a></li>
                                            <li class="item "><a href="#" title="Size Guide">Size Guide</a></li>
                                            <li class="item "><a href="#" title="Gallery">Gallery</a></li>
                                        </ul>
                                    </div>
                               </li>
                               <li class="item col-md-3 has-sub">
                                    <span class="opener">
                                    </span><span class="menu-title">Inner pages</span>
                                    <div class="dropdown-menu">
                                        <ul class="">
                                            <li class="item "><a href="#" title="Our Team">Our Team</a></li>
                                            <li class="item "><a href="#" title="Pricing Table">Pricing Table</a></li>
                                            <li class="item "><a href="#" title="Step To Buy">Step To Buy</a></li>
                                            <li class="item "><a href="#" title="Testimonial">Testimonial</a></li>
                                        </ul>
                                    </div>
                                </li> 
                            </ul>
                        </div>
                    </li>
                    <li class="item  group d-flex">
                        <span class="opener"></span>
                        <a href="#" title="All Categories">All Categories</a>
                        <div class="dropdown-menu" style="width:270px">
                            <ul class="">
                                <li class="item "><a href="#" title="Product Grid">Product Grid</a></li>
                                <li class="item "><a href="#" title="Product Grid Right Sidebar">Product Grid Right Sidebar</a></li>
                                <li class="item "><a href="#" title="Product Listing">Product Listing</a></li>
                                <li class="item "><a href="#" title="Product Without Sidebar">Product Without Sidebar</a></li>
                                <li class="item "><a href="#" title="Product Detail">Product Detail</a></li>
                            </ul>
                        </div>
                    </li>
                    <li class="item  group d-flex">
                        <span class="opener"></span>
                        <a href="#" title="All blog">blog</a>
                        <div class="dropdown-menu" style="width:270px">
                            <ul style="display:block;"><li class="item ">
                                <a href="#" title="Blog Listing v1">Blog Listing v1</a></li>
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
</template>

<script>
import $ from 'jquery';
export default {
    name:"desktopNav",
    methods: {
        setActive: function(e){
            var el = $(".nov-megamenu li");
            el.removeClass("active");
            e.target.parentNode.classList.add("active");
            console.log(e.target);
        }
    },
}
</script>

<style lang="scss" scoped>
    ._descTop_navBar{
        
        .nov-megamenu_default{
            -webkit-transition: all 0.3s ease;
            -moz-transition: all 0.3s ease;
            -ms-transition: all 0.3s ease;
            -o-transition: all 0.3s ease;
            transition: all 0.3s ease;
            
            .nov-megamenu{
                padding-left: 20px;
                .dropdown-menu {
                    padding-top: 10px;
                    visibility: hidden;
                    filter: alpha(opacity=0);
                    -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=0)";
                    -webkit-opacity: 0;
                    -moz-opacity: 0;
                    -ms-opacity: 0;
                    -o-opacity: 0;
                    opacity: 0;
                    left: 0;
                    z-index: 9999;
                    background-color: transparent;
                    display: none;
                    padding: 0;
                    margin: 0;
                    border: none;
                    -webkit-border-radius: 0;
                    -moz-border-radius: 0;
                    -ms-border-radius: 0;
                    -o-border-radius: 0;
                    border-radius: 0;
                    -webkit-transition: all 0.3s ease;
                    -moz-transition: all 0.3s ease;
                    -ms-transition: all 0.3s ease;
                    -o-transition: all 0.3s ease;
                    transition: all 0.3s ease;
                    min-width: 230px;
                }
                .menu{
                    @media screen and(min-width: 768px){
                        margin: 0;
                        padding: 0;
                        >li {
                            display: inline-block;
                            list-style: none;
                            padding: 6px 18px;

                            position: static;
                            >a{
                                display: block;
                                font-family: "Poppins",sans-serif;
                                font-size: 0.7rem;
                                font-weight: 600;
                                text-transform: uppercase;
                                padding: 10px 0;
                                line-height: 100%;
                                background-color: transparent;
                                -webkit-transition: all 0.2s linear;
                                -moz-transition: all 0.2s linear;
                                -ms-transition: all 0.2s linear;
                                -o-transition: all 0.2s linear;
                                transition: all 0.2s linear;
                                color: #222;
                                position: relative;
                                &:not(:first-child){
                                    &::after{
                                        content: "\f107";
                                        margin-left: 4px;
                                        font: normal normal normal 14px/1 FontAwesome;
                                        font-weight: 400;
                                        vertical-align: middle;
                                        display: inline-block;
                                    }
                                }
                                
                            }
                        }
                        > li .menu-title {
                            text-transform: uppercase;
                            color: #222;
                            font-weight: 700;
                            font-family: "Poppins",sans-serif;
                            @include fontSize(.7);
                            margin-bottom: 25px;
                            display: block;
                        }
                    }
                    > li {
                        padding: 3px 18px;
                        height: 60px;
                        float: left;
                        
                    }
                    
                    >li.group {
                        > .dropdown-menu {
                            @media screen and(min-width: 768px) {
                                z-index: 9999;
                                background-color: transparent;
                                display: none;
                                padding: 0;
                                    padding-top: 0px;
                                margin: 0;
                                border: none;
                                border-radius: 0;
                                transition: all 0.3s ease;
                                min-width: 230px;
                                
                                // top: 44%;
                                left: 50%;
                                -webkit-transform: translateX(-50%);
                                -ms-transform: translateX(-50%);
                                transform: translateX(-50%);

                                >ul{

                                    padding: 2rem 2rem 2rem;
                                    -webkit-box-shadow: 0 5px 7px rgba(0,0,0,.35);
                                    -moz-box-shadow: 0 5px 7px rgba(0,0,0,.35);
                                    -ms-box-shadow: 0 5px 7px rgba(0,0,0,.35);
                                    -o-box-shadow: 0 5px 7px rgba(0,0,0,.35);
                                    box-shadow: 0 5px 7px rgba(0,0,0,.35);
                                    border-radius: 0 0 10px 10px;
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
                                    background: $f;
                                    list-style: none;
                                    max-width: 100%;
                                }

                                .dropdown-menu{
                                    visibility: visible;
                                    filter: alpha(opacity=100);
                                    -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)";
                                    -webkit-opacity: 1;
                                    -moz-opacity: 1;
                                    -ms-opacity: 1;
                                    -o-opacity: 1;
                                    opacity: 1;
                                    position: relative;
                                    left: inherit;
                                    top: inherit;
                                    float: none;
                                    background: transparent;
                                    @include fontSize();
                                    color: #666;
                                    display: block;
                                    min-width: initial;

                                    li:not(:last-child) {
                                        border-bottom: 1px solid $liBorder;
                                    }
                                    
                                }
                            }
                        }
                    }
                    
                    > li{
                        @media screen and(min-width: 768px) {
                            .opener{
                                display: none;
                            }
                            .dropdown-menu a {
                                padding: 11px 0;
                                display: block;
                                font-family: "Roboto",sans-serif;
                                color: #666;
                                @include fontSize(.75);
                                
                            }
                            a{
                                &:hover {
                                    color: $Grn;
                                }
                            }
                        }

                        &:hover,
                        &:focus
                        {
                            .dropdown-menu{
                                filter: alpha(opacity=100);
                                -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)";
                                -webkit-opacity: 1;
                                -moz-opacity: 1;
                                -ms-opacity: 1;
                                -o-opacity: 1;
                                opacity: 1;
                                visibility: visible;
                                display: block;
                            }
                        }

                        > a {
                            color: $f;
                            text-transform: uppercase;
                            padding: 21px 0;
                            @include fontSize(.6);
                        }
                        
                    }
                    >li.active {
                        a{
                            color: $Grn;
                        }
                    }
                    > li.group > a::after {
                        content: "\f107";
                        margin-left: 4px;
                        font: normal normal normal 14px/1 FontAwesome;
                        @include fontSize();
                        font-weight: 400;
                        vertical-align: middle;
                        display: inline-block;
                    }

                    >li.group,
                    >li.has-sub{
                        > .dropdown-menu{
                            padding-top: 0;
                        }
                    }
                }
            }
        }
    }
</style>