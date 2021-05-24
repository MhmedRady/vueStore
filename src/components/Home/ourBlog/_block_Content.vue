<template>
    <div class="block_content row d-flex flex-nowrap bloglist mt-1r">
        <div class="tab-content">
            <div class="nov-productslick spacing-30">
                <OwlCarousel 
                    :dots="false"
                    :nav="false"
                    :autoWidth="true" 
                >
            
                    <Blog-Card v-for="blogCard in blogData"
                     :key="blogCard.id"
                     :title="blogCard.title"
                     :img="blogCard.img"
                     :description="blogCard.description"
                     :day="day"
                     :shMonth="shMonth"
                     :lgMonth="lgMonth"
                     :year="year"
                     />

                </OwlCarousel>
            </div>
        </div>
    </div>
</template>

<script>
import BlogCard from '@/components/Home/ourBlog/_Blog_Card'

import blogJson from '../../../assets/models/Home/ourBlog/blog-posts.json'

export default {
    
    data() {
        const myDate = new Date();
        return {
            blogData: blogJson,

            day: myDate.getDate(),
            shMonth: myDate.toLocaleString('default',{month: 'short'}),
            lgMonth: myDate.toLocaleString('default',{month: 'long'}),
            year: myDate.getFullYear(),
        }
    },
    created() {
        console.log(this.day); 
    },
    components:{BlogCard}
}
</script>

