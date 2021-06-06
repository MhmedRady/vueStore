<template>
    <footer class="footer">
        <div class="footer-inner back-footer">
            <Footer-Content />
        </div>
    </footer>
</template>

<script>
import FooterContent from '@/components/Footer/Footer'
export default {
    components:{FooterContent}
}
</script>

<style lang="scss" scoped>
    footer{
        .container{
           @extend %queryCONTAINER;
        }
        .row{
            @extend %_vc_row;
        }
    }
</style>