<template>
    <div class="container">
        
        <div class="money-icon row wpb_row row-fluid pos-r mb-0 spacing-0 vc_custom row-has-fill hidden custom-container">
            <MoneyIcons v-for="(MoneyIcon ,index) in MoneyIcons" 
                :key="MoneyIcon.id"
                :title="MoneyIcon.title"
                :img="MoneyIcon.img"
                :sub="MoneyIcon.subTitle"
                :index="index"
            />
        </div>

        <Footer-Top />

        <Footer-Mid />

        <Copy-Right />

    </div>
</template>

<script>
import MoneyJson from '../../assets/models/Footer/policy-Icons/policy-Icons.json'
import MoneyIcons from '@/components/Footer/_money-Icon'

import FooterTop from '@/components/Footer/_footer-Top'
import FooterMid from '@/components/Footer/_footer-Mid'
import CopyRight from '@/components/Footer/_copy-right'

export default {

    data() {
        return {
            MoneyIcons :MoneyJson
        }
    },
    components:{MoneyIcons,FooterTop,FooterMid,CopyRight}
}
</script>

<style lang="scss">
    .money-icon{
        &.row{
            // max-width: 100%;
            // width: 100%;
            @extend %_vc_row;
        }
    }
    .footer {
        .footer_center{
            display: flex;
            -webkit-align-items: center;
            -moz-align-items: center;
            -ms-align-items: center;
            align-items: center;
        }
        .wpb_heading{
            span{
                text-align: $textAlign;
                color: #fff;
                font-size: 11px;
                font-family: Pop;
                text-transform: uppercase;
                font-weight: 700;
                padding-right: 10px;
                margin-bottom: 0;                
            }
        }
        .title_footer  {
            .title_block,p{
                color: $f;
                @include fontSize(.9);
                font-weight: 700;
                line-height: 21px;
                margin-bottom: 20px;
            }
            .title_block{
                text-transform: uppercase;
            }
        }
        .footer_mid{
            background-color: #082E53;
            >div{
                margin: 0 auto;
                margin-bottom: 1rem;
                margin-top: 1rem;
            }
            .block_content{
                li{
                    &[class*="social_"]{
                        a{
                            height: 25px;
                            width: 35px;
                            border-radius: 50px;
                            color: $f;
                            padding: 5px;
                            display: flex;
                            justify-content: center;
                            background-color: $HeaderBar_with_Op;
                            @include transition;
                        }
                        &:not(:last-child){
                            margin-right: 10px;
                        }
                    }
                    &:hover{
                        a{
                            background-color: $blueBlack;
                            text-decoration: none;
                        }
                    }
                }
            }
        }
        .row{
            &.footer_top,.vc_custom{

                border-width: 1px 0px 0px !important;
                background-color: $Footer_Co !important;
                border: none !important;
                ul{
                    li{
                        a{
                            text-align: $textAlign;
                            text-transform: capitalize;
                            color: rgba(255, 255, 255, 0.59);
                            @include fontSize(.85);
                            font-weight: 500;
                            &:hover{
                                color: $WebGrn;
                            }
                        }
                    }
                }
            }
        }
    } 
</style>