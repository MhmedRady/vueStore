<template>
    <nav class="category-nav-content">
        <div class="row">
            <List-Content />
        </div>
    </nav>
</template>

<script>
import ListContent from '@/components/Header/FixedHeader/_list-content'

export default {
    components:{ListContent}
}
</script>

<style lang="scss" scoped>
    .category-nav-content{
        background-color: #E8EBEE;
        position: relative;
        >div{
            max-width: 95%;
            margin: 0 auto;
        }
        .columns {
            width: 100%;
            float: left;
            padding-left: 1.0714285714rem;
            padding-right: 1.0714285714rem;
        }
        
    }
</style>