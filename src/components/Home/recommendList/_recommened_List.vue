<template>
    <div id="recom-content" class="tab-content recom-tab mt-3r">
        <ListContnet v-for="listCard in listCards" :key="listCard.id" :id="listCard.id" :parent="listCard.parent" :cardContent="cardContent"/>
    </div>
</template>

<script>
import ListContnet from '@/components/Home/recommendList/_list_content';

import dataList from '../../../assets/models/Home/recommended/tab-list.json';
import items from '../../../assets/models/Home/recommended/list-items.json';

export default {
    props:["items"],
    data() {
        return {
            listCards: dataList,
            cardContent: items
        }
    },
    created() {
        // console.log(this.cardContent)
    },
    components:{ListContnet}
}
</script>

