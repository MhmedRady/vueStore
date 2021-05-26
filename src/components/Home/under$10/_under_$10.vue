<template>
    <div class="col-12">
        <div class="vc_column-inner">
            <div class="wpb_wrapper">
                <div class="nov-productlist slider-special-1">
                    <div class="block_header d-flex align-items-center mb-3r w-Grn">
                        <h2 class="title_block text-left"> hot Under $10 </h2>
                        <router-link to="/" class="see-more">
                            View More <i class="material-icons">arrow_right</i>
                        </router-link>
                    </div>

                    <Block-content />

                </div>
            </div>
        </div>
    </div>
</template>

<script>
import BlockContent from '@/components/Home/under$10/_under10_content'
export default {
    components: {BlockContent}
}
</script>