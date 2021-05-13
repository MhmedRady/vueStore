<template>
    <div class="sale-date-list row wpb_row row-fluid">
        <div class="col-sm-12 wpb_column column_container">
            <div class="vc_column-inner ">
                <div class="wpb_wrapper">
                    <div class="heading-group has_category mb-sm-15">
                        <div class="block-heading-group">
                            <h2 class="title_block mb-0 text-left">
                                <span class="title_content">Smart Phone</span>
                            </h2>

                            <template>
                                <group-cate-list />
                            </template>

                            <template>
                                <div class="date-list-row row wpb_row row-fluid  mb-0">
                                    <date-Badge />
                                    <date-List />
                                </div>
                            </template>

                        </div>
                    </div>
                </div>
            </div>
        </div>      
    </div>
</template>

<script>
import GroupCateList from '@/components/Home/saleDataList/_group_cate_list'
import DateList from '@/components/Home/saleDataList/_date_list'
import DateBadge from '@/components/Home/saleDataList/_date_badge'


export default {
    components:{
        DateBadge,
        DateList,
        GroupCateList
        }
}
</script>

<style lang="scss" scoped>
    .sale-date-list{
        .heading-group{
            &.has_category {
                border-bottom: none;
                margin-bottom: 0px !important;
            }   
            .block-heading-group {
                display: -webkit-box;
                display: -moz-box;
                display: box;
                display: -webkit-flex;
                display: -moz-flex;
                display: -ms-flexbox;
                display: flex;
                -webkit-align-items: center;
                -moz-align-items: center;
                -ms-align-items: center;
                align-items: center;
            }
            .block-heading-group{
                display: block;
            }
            .title_block{
                border-bottom: 8px solid #105caa;
            }
        }
    }
</style>