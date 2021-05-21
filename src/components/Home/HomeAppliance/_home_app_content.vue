<template>
    <div class="block-product clearfix ">
        <div class="block_header d-flex align-items-center">
            <h2 class="title_block text-left">
                Home Appliance 
            </h2>
            <router-link class="see-more" to="/">
                View More
                <i class="material-icons">arrow_right</i>
            </router-link>
        </div>

        <List-Links />

        <Banner-imgs />

        <Tabs-List />

    </div>
</template>

<script>
import ListLinks from '@/components/Home/HomeAppliance/_home_links'
import BannerImgs from '@/components/Home/HomeAppliance/_banner_imgs'
import TabsList from '@/components/Home/HomeAppliance/_home_app_list'


export default {
    components: {ListLinks,BannerImgs,TabsList}
}
</script>

<style lang="scss" scoped>
    .block_header{
        border-bottom: 8px solid $HeaderBar_Co;
        padding-bottom: 0;
        .see-more{
            font-family: Pop;
            margin-left: auto;
            margin-right: 0;
            font-size: 11px;
            text-transform: uppercase;
            color: #959595;
            font-weight: 700;
            display: -webkit-box;
            display: -moz-box;
            display: box;
            display: -webkit-flex;
            display: -moz-flex;
            display: -ms-flexbox;
            display: flex;
            text-decoration: none;
            i{
                color: $HeaderBar_Co;
                font-size: 22px;
                padding-left: 5px;
                display: flex;
                line-height: .7rem;
            }
            &:hover{
                color: $HeaderBar_Co;
            }
        }
    }
</style>