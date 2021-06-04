<template>
    <li class="nav-item p-0 content-list">
        <router-link to="/" class="nav-link p-0"> Appliances</router-link>
        <Appliances-List />
    </li>
</template>

<script>
    import AppliancesList from '@/components/Header/FixedHeader/inside-list/appliances-menu/_appliances_List'

    export default {
        components:{
            AppliancesList,
        }
    }
</script>
