<template>
    <div class="dataList col-sm-8 wpb_column vc_column_container">
        <div class="vc_column-inner ">
            <div class="wpb_wrapper">
                <div class="productTabs tab-slider">
                    <div class="block-producttabs clearfix">
                        <div class="d-flex align-items-center d-xs-block block_nav">
										
                            <ul class="nav nav-tabs" role="tablist">
                                
                                <li class="nav-item">
                                    <a href="#New-tab" class="nav-link active" role="tab" data-toggle="tab" aria-controls="New-tab" aria-selected="true">New Arrivals</a>
                                </li>

                                <li class="nav-item">
                                    <a href="#Best-tab" class="nav-link" role="tab" data-toggle="tab" aria-controls="Best-tab" aria-selected="false">Bestseller</a>
                                </li>

                                <li class="nav-item">
                                    <a href="#noSale-tab" class="nav-link" role="tab" data-toggle="tab" aria-controls="noSale-tab" aria-selected="false">On Sale</a>
                                </li>

                            </ul>
                            
                        </div>

                        <template>
                            <div class="block_content_card slick-content">
                                <content-list />
                            </div>
                        </template>

                    </div>
                </div>  
            </div>
        </div>
    </div>
</template>

<script>
import ContentList from '@/components/Home/saleDataList/_list_content'

export default {
    components:
    {
        ContentList
    }
}
</script>

<style lang="scss" scoped>
    .sale-date-list{
        .dataList{
            .productTabs{
                @media screen and(min-width: $minIpad) {
                    margin-top: -105px;
                }
                .tab-content {
                    position: relative;
                }
                .nav-tabs {
                    border: none;
                    padding-left: 15px;
                    margin-left: auto;
                    margin-right: 0;

                    li{
                        margin-top: -5px;
                        &:not(:last-child) {
                            margin-right: 10px;
                        }
                        @media screen and(max-width: $maxMobile) {
                            margin-bottom: 15px;
                        }
                        a{
                            border: none;
                            background: #e0e0e0;
                            border-top-right-radius: 5px;
                            border-top-left-radius: 5px;
                            min-width: 130px;
                            height: 46px;
                            line-height: 50px;
                            padding: 0 5px;
                            color: #222;
                            text-align: center;
                            font-size: .7rem;
                            font-weight: 700;
                            @include f-F(OxyB);
                            text-transform: uppercase;
                            -webkit-transition: all 0.2s linear;
                            -moz-transition: all 0.2s linear;
                            -ms-transition: all 0.2s linear;
                            -o-transition: all 0.2s linear;
                            transition: all 0.2s linear;
                            margin-bottom: 2px;
                            @media screen and(max-width: $maxMobile) {
                                border-radius: 5px;
                                box-shadow: 4px 2px 5px 1px #2225;
                            }
                            &.active,&:hover{
                                background: $HeaderBar_Co;
                                color: $f;
                                height: 48px;
                                line-height: 50px;
                                margin-bottom: 0;
                            }
                            
                        }
                    }

                }
                &.tab-slider .tab-content {
                    > .tab-pane {
                        display: block;
                        visibility: hidden;
                        width: 100%;
                        height: auto;
                        &:first-child{
                            display: none;
                        }
                        &:not(:first-child) {
                            position: absolute;
                            width: 100%;
                            height: auto;
                            top: 0;
                            left: 0;
                        }
                        &.active {
                            visibility: visible;
                            filter: alpha(opacity=100);
                            -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)";
                            -webkit-opacity: 1;
                            -moz-opacity: 1;
                            -ms-opacity: 1;
                            -o-opacity: 1;
                            opacity: 1;
                            display: contents !important;
                        }
                    }
                }
            }
        }
    }
</style>