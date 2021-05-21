<template>

    <div id="home-app-list" class="home-app-list mt-2r">
        <div class="block_content_card slick-content">
            <div class="ch-Carousel d-flex">
                <button @click="chOwlClick('#home-app-prev')" id="home-app-prev" class="badge badge-blue btn-sm mr-5"> 
                    <i class="material-icons">chevron_left</i>
                </button>
                
                <button @click="chOwlClick('#home-app-next')" id="home-app-next" class="badge badge-blue btn-sm ml-5"> 
                    <i class="material-icons">chevron_right</i>
                </button>
            </div>
            <div class="block_content_card slick-content">
                <div class="block_content">
                    <div class="nov-productslick spacing-30">
                        <list-Contetn v-for="(tab, index) in listTabs" :key="tab.id" :index="index" :id="tab.id" :parent="tab.parent" :listCard="cardData"/>
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>

<script>
import tapJson from '../../../assets/models/Home/homeAppliance/tab-list.json'
import itemJson from '../../../assets/models/Home/homeAppliance/list-content.json'

import $ from 'jquery'
import listContetn from '@/components/Home/HomeAppliance/_home_list_content'

export default {
    data() {
        return {
            listTabs: tapJson,
            cardData: itemJson,
        }
    },
    components:{listContetn},
    methods: {
        chOwlClick: function(id){
            if (id=="#home-app-prev") {
                $("#home-app-list .owl-prev").click();
            }else{
                $("#home-app-list .owl-next").click();
            }
        },
    },
}
</script>

<style lang="scss" scoped>
    .home-app-list{
        .ch-Carousel{
            @extend %ch-Carousel;
        }
    }
</style>
