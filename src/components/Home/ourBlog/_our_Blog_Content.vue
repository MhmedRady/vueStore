<template>
    <div class="block-list">
        <div class="block-product clearfix ">
            <div class="block_header d-flex align-items-center">
                <h2 class="title_block text-left">
                    our blog 
                </h2>
                <router-link class="see-more" to="/">
                    View More
                    <i class="material-icons">arrow_right</i>
                </router-link>
            </div>

            <Blog-Links />
            
            <Blog-Content />

        </div>
    </div>
</template>

<script>
import BlogLinks from '@/components/Home/ourBlog/_blog_Links'
import BlogContent from '@/components/Home/ourBlog/_block_Content'

export default {
    components:{BlogLinks,BlogContent}
}
</script>