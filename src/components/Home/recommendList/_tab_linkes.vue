<template>
    <ul id="recommendTab" class="nav nav-tabs d-flex text-center flex-nowrap" role="tablist">
        
        <li v-for="link in links" :key="link.id" class="nav-item col text-center justify-content-center d-flex flex-nowrap" role="presentation">
            <a :href="`#recom-tab-link-${link.id}`" :class="`nav-link justify-content-center d-flex flex-nowrap ${link.id == 1? 'active':''}`" role="tab" data-toggle="tab" :aria-controls="link.title" :aria-selected="link.id==1?true:false">
                <div class="img-tab">
                    <img :src="require(`../../../assets/images/Home/recommended-list/tab-links/${link.img}`)" :alt="link.title">
                </div>
                <div class="title_category">{{link.title}}</div>
            </a>
        </li>
        
    </ul>
</template>

<script>
import linksJson from '../../../assets/models/Home/recommended/tabLinks.json'
export default {
    data() {
        return {
            links: linksJson
        }
    },
}
</script>

<style lang="scss">
    .productlist{
        .nav-tabs {
            .nav-item {
                padding: 0;
                position: relative;
                &::before {
                    content: "";
                    width: 100%;
                    height: 8px;
                    background: #105caa;
                    top: 0;
                    left: 0;
                    position: absolute;
                    z-index: 1;
                }
                a{
                    position: relative;
                    min-width: 170px;
                    width: 100%;
                    text-align: center;
                    padding: 29px 0 26px 0;
                    margin-top: 8px;
                    text-align: center;
                    text-decoration: none;
                    border-right: 1px solid #eaeaea;
                    border-top: none;
                    border-bottom: none;
                    @include f-F;
                    &:first-child{
                        border-left: 0;
                    }
                    .title_category {
                        font-size: 13px;
                        line-height: 22px;
                        text-transform: capitalize;
                        font-weight: 700;
                        color: #666;
                    }
                    &::before{
                        content: "";
                        width: 0;
                        height: 0;
                        border-top: 9px solid #49ad00;
                        border-left: 14px solid transparent;
                        border-right: 14px solid transparent;
                        top: 0;
                        left: 50%;
                        -webkit-transform: translateX(-50%);
                        -ms-transform: translateX(-50%);
                        transform: translateX(-50%);
                        position: absolute;
                        filter: alpha(opacity=0);
                        -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=0)";
                        -webkit-opacity: 0;
                        -moz-opacity: 0;
                        -ms-opacity: 0;
                        -o-opacity: 0;
                        opacity: 0;
                        z-index: 2;
                    }
                    &::after{
                        content: "";
                        width: 100%;
                        height: 8px;
                        background: #49ad00;
                        top: -8px;
                        left: 0;
                        position: absolute;
                        filter: alpha(opacity=0);
                        -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=0)";
                        -webkit-opacity: 0;
                        -moz-opacity: 0;
                        -ms-opacity: 0;
                        -o-opacity: 0;
                        opacity: 0;
                        z-index: 2;
                    }
                    &.active{
                        &::after,&::before{
                            filter: alpha(opacity=100);
                            -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)";
                            -webkit-opacity: 1;
                            -moz-opacity: 1;
                            -ms-opacity: 1;
                            -o-opacity: 1;
                            opacity: 1;
                        }
                        .title_category {
                            color: #49ad00;
                        }
                    }
                    .img-tab {
                        height: 100%;
                        padding-right: 10px;
                    }
                }
            }
        }
    }
</style>