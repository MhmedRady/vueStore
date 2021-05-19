<template>
    <section class="homePage">
        <HomeCopm />
    </section>
</template>

<script>
import HomeCopm from '@/components/Home/Home.vue';
export default {
    components: {HomeCopm}
}
</script>

<style lang="scss" scoped>
    .homePage{
        &.container{
            @extend %queryCONTAINER;
        }
    }
</style>