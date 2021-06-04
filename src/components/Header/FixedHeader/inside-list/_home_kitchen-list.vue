<template>
    <li class="nav-item p-0 content-list">
        <router-link to="/" class="nav-link p-0"> Home & Kitchen</router-link>
        
        <Home-Kitchen-List />
    </li>
</template>

<script>
    import HomeKitchenList from '@/components/Header/FixedHeader/inside-list/home-kitchen-menu/_Home_Kitchen_List'

    export default {
        components:{
            HomeKitchenList,
        }
    }
</script>
