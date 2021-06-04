<template>
    <li class="nav-item p-0 fashion-list">
            <router-link to="/" class="nav-link p-0"> <span class="badge badge-danger">New</span> fashion</router-link>
            <!-- <div class="row"> -->
            <ul class="nav fashion-menu">

                <li class="nav-item">
                    <a class="nav-link top-link" href="#">New Arrivals</a>
                    <New-Arrivals />
                
                </li>

                <li class="nav-item">
                    <a class="nav-link" href="#">Men</a>
                    <Men-List />

                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">women</a>
                    <Women-List />

                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">watchs</a>
                    <Watches-List />
                    
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">footwear</a>
                    <Footwear-List />

                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">sports</a>
                    <Sports-List />

                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">kids & baby</a>
                    <BaBy-List />

                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">jewelry & eyewear</a>
                    <Jewelry-Eye-List />

                </li>
            </ul>
            <!-- </div> -->
        </li>
</template>

<script>
import NewArrivals from '@/components/Header/FixedHeader/inside-list/fashion-menu/_New_Arrivals'
import MenList from '@/components/Header/FixedHeader/inside-list/fashion-menu/_Men_List'
import WomenList from '@/components/Header/FixedHeader/inside-list/fashion-menu/_Women_List'
import WatchesList from '@/components/Header/FixedHeader/inside-list/fashion-menu/_Watches_List'
import FootwearList from '@/components/Header/FixedHeader/inside-list/fashion-menu/_FootWear_List'
import SportsList from '@/components/Header/FixedHeader/inside-list/fashion-menu/_Sports_List'
import BaByList from '@/components/Header/FixedHeader/inside-list/fashion-menu/_BaBy_List'
import JewelryEyeList from '@/components/Header/FixedHeader/inside-list/fashion-menu/_Jewelry_Eye_List'

export default {
    components:{
        NewArrivals,
        MenList,
        WomenList,
        WatchesList,
        FootwearList,
        SportsList,
        BaByList,
        JewelryEyeList
    }
}
</script>

<style lang="scss" >
.category-nav-content .menu-list{
    .fashion-list{
        &:hover{
            background-color: $listColor;
            a{
                color: $f;
            }
        }
        ul{
            
            &:not(.inside-menu){
                >li{
                    &:not(.inside-link){
                        @extend %Header-Fashion-top-link;
                    }
                    .lazy-load{
                        background-color: $listColor;
                        min-height: 370px;
                    }
                    
                }
            }
            .inside-menu{
                h4{
                    color: $pp;
                }
            }
        }
        
    }
}
</style>