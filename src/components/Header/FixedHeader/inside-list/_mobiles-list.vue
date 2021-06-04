<template>
    <li class="nav-item p-0 content-list">
            <router-link to="/" class="nav-link p-0"> Mobiles & Tablets</router-link>
            
            <Mobile-Tablets-List />
        </li>
</template>

<script>
    import MobileTabletsList from '@/components/Header/FixedHeader/inside-list/mobile-menu/_Mobile_Tablet_List'

    export default {
        components:{
            MobileTabletsList
        }
    }
</script>

<style lang="scss" >
.category-nav-content .menu-list{
    .content-list{
        
        >ul{
            &.content-menu{
                
                .inside-menu{
                    background-color: $f;
                }   
            }
        }
        
    }
}
</style>