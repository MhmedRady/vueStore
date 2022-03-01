<template>
    <ul class="home-app-nav nav nav-pills d-flex text-center flex-nowrap">
        <li v-for="(link, index) in links" :key="link.id" class="nav-item">
            <a :id="`homeApp-link-${hashFun(link.id)}`" :class="`nav-link${index == 0?' active':''}`" data-toggle="tab" :href="`#homeApp-tap-${hashFun(link.id)}`" role="tab" :aria-controls="`homeApp-tap-${hashFun(link.id)}`" :aria-selected="index == 0?true:false">
                <span class="title_category">{{link.title}}</span>
            </a>
        </li>
    </ul>
</template>

<script>
import linkJson from '../../../assets/models/Home/homeAppliance/list-links.json'
import helper from '@/Helpers/Helper.js'

export default {
    data() {
        return {
            links: linkJson,
            hashFun:helper.hashId,
        }
    },
}
</script>

<style lang="scss">
    .nov-category-product{
        .nav-pills{
            margin-bottom: 15px;
            position: relative;
            overflow: hidden;
                overflow-x: hidden;
            overflow-x: auto;
            width: 100%;
            white-space: nowrap;
            border-right: 1px solid #eaeaea;      
            &::before{
                border-bottom: 1px solid #eaeaea;
                content: "";
                position: absolute;
                bottom: 0;
                width: 100%;
                left: 0;
            }
            .nav-link{
                padding: 16px 30px;
                @include f-F;
                @include fontSize(.82);
                font-weight: 700;
                color: #444;
                &:not(.active){
                    border-bottom: 1px solid #eaeaea;
                    border-right: 1px solid #eaeaea;
                    &:first-child{
                        border-left: 1px solid #eaeaea;
                    }
                }
                &:hover{
                    color: $WebGrn;
                }
                &.active{
                    cursor: pointer;
                    color: $f;
                    background: #105caa;
                    border-bottom: 1px solid #105caa;
                    -webkit-border-radius: 0;
                    -moz-border-radius: 0;
                    -ms-border-radius: 0;
                    -o-border-radius: 0;
                    border-radius: 0;
                    font-weight: 700;
                }
            }      
        }
        .nave-pills{
            white-space: nowrap;
        }
    }
</style>


