<template>
    <div  class="countdown-Offer justify-content-center d-flex">
        <div class="item-time">
            <div>
                <span class="name-time">
                    Days
                </span>
                <span class="data-time">
                    <span :class="`dys${iId}`">360</span>
                </span>
                
            </div>
        </div>
        <div class="item-time">
            <div>
                <span class="name-time">
                    Hrs
                </span>
                <span class="data-time">
                    <span :class="`hrs${iId}`">21</span>
                </span>
                
            </div>
        </div>
        <div class="item-time">
            <div>
                <span class="name-time">
                    Mins
                </span>
                <span class="data-time">
                    <span :class="`mins${iId}`">54</span>
                </span>
                
            </div>
        </div>
        <div class="item-time">
            <div>
                <span class="name-time">
                    secs
                </span>
                <span class="data-time">
                    <span :class="`secs${iId}`">19</span>
                </span>
                
            </div>
        </div>
    </div>
</template>

<script>

import helperFun from '../../layout/js/helper'
// import $ from 'jquery'
export default {
    props: ["date","iId"],
    
    created() {
        helperFun.timers(this.date,this.iId);
    },
}
</script>

<style lang="scss" scoped>
    .countdown-Offer{
        text-align: center;
        -webkit-transition: all 0.3s linear;
        -moz-transition: all 0.3s linear;
        -ms-transition: all 0.3s linear;
        -o-transition: all 0.3s linear;
        transition: all 0.3s linear;
        position: absolute;
        width: 100%;
        bottom: 10px;
    }
    .countdown-Offer{
        position: static;
        -webkit-justify-content: start !important;
        -moz-justify-content: start !important;
        -ms-justify-content: start !important;
        justify-content: start !important;
        -ms-flex-pack: start !important;
    }
    .countdown-Offer{
        .item-time {
            width: initial;
            height: initial;
            border-radius: initial;
            padding: initial;
            background-color: transparent;
            -webkit-box-shadow: none;
            -moz-box-shadow: none;
            -ms-box-shadow: none;
            -o-box-shadow: none;
            box-shadow: none;
            &:not(:last-child){
                margin-right: .2rem;
            }

            > div{
                display: -webkit-box;
                display: -moz-box;
                display: box;
                -webkit-box-orient: vertical !important;
                -webkit-box-direction: reverse !important;
                -webkit-flex-direction: column-reverse !important;
                -ms-flex-direction: column-reverse !important;
                // flex-direction: column-reverse !important;
            }
            .data-time{
                margin-bottom: 5px;
                color: #000;
                position: relative;
                display: inline-block;
                min-width: 25px;
                vertical-align: top;
                position: relative;
                padding-bottom: 1px;
            }
            .data-time{
                color: $f;
                font-size: 11px;
                font-family: Pop;
                border-radius: 3px;
                background-color: #ff8d31;
                min-width: initial;
                position: relative;
                letter-spacing: 9px;
                height: 18px;
                line-height: 18px;
                overflow: hidden;
            }
        }


    }
</style>

<style lang="scss">
.countdown-Offer {
    .data-time{
     &::before{
        content: "";
        position: absolute;
        bottom: 0;
        left: 50%;
        -webkit-transform: translateX(-50%);
        -ms-transform: translateX(-50%);
        transform: translateX(-50%);
        background: #49ad00;
            background-color: rgb(73, 173, 0);
        width: 17px;
        height: 1px;
     }
     &::before,
     &::after{
        content: "";
        position: absolute;
        width: 15px;
        height: 100%;
        background-color: #ec710e;
        top: 0;
        -webkit-transform: translateX(0);
        -ms-transform: translateX(0);
        transform: translateX(0);
     }
     &::before{
        left: 15px;
     }
     &::after{
         left: 45px;
     }
     span{
        z-index: 2;
        position: relative;
     }
     > span {
        padding-left: 4px;
        margin-right: -4px;
     }
 }
 .name-time{
    font-family: Pop;
    display: block;
    font-size: .6rem;
    color: #909090;
    line-height: 1;
 }
 .name-time {
    color: #888;
    margin-bottom: 3px;
}
}
</style>