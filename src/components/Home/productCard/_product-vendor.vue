
<template>
    <div class="product-vendor">
        <a href="#">
            <span class="p-item d-flex align-items-center">
                <i class="material-icons pr-6">storefront</i>
                {{vendor}}
            </span>
        </a>
    </div>
</template>

<script>
export default {
    props:['vendor']
}
</script>

<style lang="scss" scoped>

.product-vendor{
    // min-height: 45px;
    overflow: hidden;
    padding-left: 0;
    margin-top: 0;
    text-align:$textAlign;
    a{
        display: inline-block;
        position: relative;
        span{
            @include fontSize(.7);
            margin-left: 0;
            margin-right: auto;
            color: #afafaf;
            font-weight: 700;
            font-family: OxyB;
            text-transform: capitalize;
            i{
                font-size: 16px;
                color: #49ad00;
                padding-right: 6px;
                margin-bottom: 5px;
            }
        }
        &:hover{
            text-decoration: none;
            span{
                color: $Grn;
            }
        }
    }
}
</style>