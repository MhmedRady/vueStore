<template>
    <ul class="menu-list navbar-nav mr-auto menu p-0 m-0">
        
        <li class="nav-item p-0 no-child">
            <router-link to="/" class="nav-link p-0">all categories</router-link>
        </li>

        <Fashion-List />
        
        <Supermarket-List />

        <Mobile-List />

        <Electronics-List />

        <HomeKitchen-List />

        <Appliances-List />
  </ul>
</template>

<script>

import FashionList from '@/components/Header/FixedHeader/inside-list/_fashion-list'
import SupermarketList from '@/components/Header/FixedHeader/inside-list/_supermarket-list'
import MobileList from '@/components/Header/FixedHeader/inside-list/_mobiles-list'
import ElectronicsList from '@/components/Header/FixedHeader/inside-list/_electronics-list'
import HomeKitchenList from '@/components/Header/FixedHeader/inside-list/_home_kitchen-list'
import AppliancesList from '@/components/Header/FixedHeader/inside-list/_appliances-list'

export default {

    components:{
        FashionList,
        SupermarketList,
        MobileList,
        ElectronicsList,
        HomeKitchenList,
        AppliancesList

    }
}
</script>

<style lang="scss">
    .category-nav-content{
        .menu-list{
            margin: 0 0 0 3px;
            padding: 0;
            height: 39px;
            display: contents;
            overflow: hidden;
            a{
                
                @include f-F(Pop);
                font-weight: 900;
                text-transform: capitalize;
                color: $listColor;
                padding: .7142857143rem .5714285714rem !important;
                &.nav-link{
                    @include fontSize(.78);
                }
            }
            li{
                &:hover{
                    >ul{
                        display: flex !important;
                    }
                }
            }
            >li{
                >a{
                    position: relative;
                    top: 10px;
                }
                &:not(.no-child){
                    ul{
                        display: none;
                        height: 38px;
                        width: 100%;
                        max-width: 100%;
                        position: fixed;
                        top: 105px;
                        right: 0;
                        background-color: $listColor;
                        padding: 0px 20px 0px 20px;

                        &.inside-menu{
                            
                            height: auto;
                            left: 15px;
                            right: 0 !important;
                            top: 140px !important;
                            width: auto;

                            &.no-Top{
                                top: 105px !important;
                            }

                            img{
                                width: 100%;
                            }
                            .link-list{
                                height: auto;
                            }
                        }
                    }
                }
                .badge{
                    position: relative;
                    bottom: 2px;
                    @include fontSize(.7);
                }
                
            }
            
            .content-list{
                
                @include Header-Content-Links($listColor);
                

                .content-menu{
                    background-color: $f;
                    overflow: hidden;
                    li{
                        @include Header-Content-Links;
                        >a{
                            &.top-link{
                                &::after{
                                    bottom: -4px !important;
                                }
                            }
                            &:not(.top-link){
                                &::after{
                                    content: none;
                                }
                            }
                        }
                    }
                }
            }
            
            .inside-menu{
                // border: 1px solid #E8EBEE;
                
                box-shadow: 0px 5px 5px 2px #5556;
                ul{
                    background-color: transparent !important;
                }
                h4{
                    margin-top: 15px;
                    color: $f;
                    font-weight: 700;
                    @include f-F;
                    @include fontSize(.9);
                    text-transform: capitalize;
                }
                .inside-link{
                    >a{
                        padding: 0 !important;
                        margin: 3px 0 5px 0px;
                        text-transform: capitalize;
                        font-weight: 500;
                        @include f-F(Oxy);
                        @include fontSize(.75);
                        color: $liBorder;
                        text-decoration: none;
                        &:hover{
                            color: $subColor;
                            text-decoration: none;
                        }
                    }
                    // &.inside-head{
                        
                        h4{
                            margin: 0;
                            @include fontSize(.75);
                        }
                    // }
                }
            }
        }
    }
</style>