<template>
    <div class="BS-alert">
        <b-alert show :variant="type?type:'primary'"><strong>{{msg}}</strong></b-alert>
    </div>
</template>

<script>
export default {
    props:["msg","type"]
}
</script>

<style lang="scss" scoped>
    .BS-alert{
        strong{
            @include f-F(OxyB);
            text-transform: capitalize;
        }
    }
</style>