<template>
    <div class="quick-nav-links">

        <div v-for="quickLink in quickLinks" :key="quickLink.lingth" class="nov-heading-group has_category">
            <div class="block-heading-group">
                <div class="group_cate2 pt-5 pb-5">
                    <h2 class="title_block d-inline-block mb-0">
                        {{quickLink.titleName}} :
                    </h2>
                    <ul class="list-category list-inline mb-0 p-0">
                        <li v-for="link in quickLink.links" :key="link.id" class="list-inline-item">
                            <router-link to="/">{{link.name}}</router-link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        
    </div>
</template>

<script>
import linksJson from "../../../assets/models/Home/quickLinks/quick-linkes.json"
export default {
    data() {
        return {
            quickLinks: linksJson,
        }
    },
}
</script>

<style lang="scss" scoped>
    .quick-nav-links{
        .title_block{
            text-transform: uppercase;
            @include fontSize(.75);
            @include f-F(OxyB);
        }
        .block-heading-group{
            text-align: $textAlign;
        }
        .list-category{
            .list-inline-item {
                padding-left: 7px;
                padding-right: 7px;
                margin-right: 0;
                line-height: 12px;
                &:not(:last-child){
                    border-right: 1px solid $liBorder;
                }
            }
            a {
                cursor: pointer;
                font-size: .72rem;
                font-weight: 500;
                color: #666;
                &:hover{
                    color: $WebGrn;
                }
            }
        }
    }
</style>