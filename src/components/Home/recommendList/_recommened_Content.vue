<template>
    <div class="recommendList productlist col-xl-10 col-sm-8 col-lg-9 col-md-9 wpb_column column_container">
        <div class="vc_column-inner">
            <div class="wpb_wrapper">
                <div class="nov-category-productlist">
                    <div class="block-product clearfix">
                        <h2 class="title_block text-left">
                            recommended
                        </h2>

                        <Tab-Links />

                        <List-Content />

                    </div>
                </div>
            </div>
        </div>
    </div>    
</template>

<script>
import TabLinks from '@/components/Home/recommendList/_tab_linkes'
import ListContent from '@/components/Home/recommendList/_recommened_List'

export default {
    components:{TabLinks,ListContent}
}
</script>
<style lang="scss" scoped>
    .recommendList{
        .title_block{
            margin-bottom: 13px;
        }
    }
</style>