<template>
    <li class="nav-item p-0 content-list">
        <router-link to="/" class="nav-link p-0"> Electronics</router-link>
        
        <Electronics-List />
    </li>
</template>

<script>
    import ElectronicsList from '@/components/Header/FixedHeader/inside-list/electronics-menu/_Electronics_List'

    export default {
        components:{
            ElectronicsList
                
        }
    }
</script>
