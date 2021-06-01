<template>
    <div class="container">
        <div class="money-icon row wpb_row row-fluid pos-r mb-0 spacing-0 vc_custom row-has-fill hidden">
            <MoneyIcons v-for="MoneyIcon in MoneyIcons" 
            :key="MoneyIcon.id"
            :title="MoneyIcon.title"
            :img="MoneyIcon.img"
            :sub="MoneyIcon.subTitle"
            />
        </div>
    </div>
</template>

<script>
import MoneyIcons from '@/components/Footer/_Money-Icon'

import MoneyJson from '../../assets/models/Footer/policy-Icons/policy-Icons.json'

export default {
    data() {
        return {
            MoneyIcons :MoneyJson
        }
    },
    methods: {
        mySize: function (){
            var tag = document.querySelector(".money-icon");
            var w = window.innerWidth
                || document.documentElement.clientWidth
                || document.body.clientWidth;

                var Mobile = 767, ipad = 768, minIpad10Pro = 834, ipadPro = 1024, deskTop = 1200;
                
                if(w <= Mobile){
                    tag.style.width = `${w}px`;
                    tag.style.left  = "0";
                }else if(w <= ipad){
                    tag.style.width = `${w}px`;
                    tag.style.left  = "-30px";
                }else if(w <= minIpad10Pro){
                    tag.style.width = `${w}px`;
                    tag.style.left  = "-55px";
                }else if(w<= ipadPro){
                    tag.style.width = `${w}px`;
                    tag.style.left  = "-33px";
                }else if(w >= deskTop){
                    tag.style.width = `${w}px`;
                }
            return w;
        }
    },
    mounted(){
        window.addEventListener('resize', this.mySize);
        this.mySize();
    },
    components:{MoneyIcons}
}
</script>

<style lang="scss" scoped>
    .money-icon{
        &.row{
            // max-width: 100%;
            // width: 100%;
            @extend %_vc_row;
            
        }
    }
</style>