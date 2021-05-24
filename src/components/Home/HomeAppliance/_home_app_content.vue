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
